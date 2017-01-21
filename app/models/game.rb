class Game < ApplicationRecord
  has_many :gameplays
  has_many :players, through: :gameplays

  validates :num_players, presence: true
  validates :num_players, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 2,
    less_than_or_equal_to: 4
  }
end
