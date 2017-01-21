class Gameplay < ApplicationRecord
  belongs_to :game
  belongs_to :player

  validates :game, presence: true
  validates :player, presence: true
  validates :points, presence: true, numericality: { only_integer: true }
end
