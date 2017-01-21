class GamesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    @game = Game.find(params[:id])
  end

  def new
    @game = Game.new
  end

  def create
    game_info = JSON.parse(request.body.read)
    @game = Game.new(num_players: game_info["game"]["num_players"].to_i)
    @player_names = game_info["players"]
    @players = []
    @player_names.each do |player_name|
      @players << Player.new(name: player_name)
    end
    @game.players = @players
    if @game.save
      render :show
    else
      flash[:notice] = @game.errors.full_messages.to_sentence
      render :new
    end
  end

  private
  #
  # def game_params
  #   params.require(:game).permit(:num_players)
  # end
end
