class Player < ApplicationRecord
  has_many :gameplays
  has_many :games, through: :gameplays

  validates :name, presence: true
end
