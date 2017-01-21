class CreateGameplays < ActiveRecord::Migration[5.0]
  def change
    create_table :gameplays do |t|
      t.belongs_to :game, null: false
      t.belongs_to :player, null: false
      t.integer :points, default: 0, null: false
    end
  end
end
