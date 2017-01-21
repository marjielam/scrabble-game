Rails.application.routes.draw do
  root "games#new"

  resources :game, only: [:new, :create]
end
