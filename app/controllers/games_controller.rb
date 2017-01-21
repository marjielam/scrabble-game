class GamesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    binding.pry
    @game = Game.find(params[:id])
  end

  def new
    @game = Game.new
  end

  def create
    game_info = JSON.parse(request.body.read)
    @game = Game.new(num_players: game_info["num_players"].to_i)

    if @game.save
      redirect_to @game
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
