Rails.application.routes.draw do
  root "games#new"

  resources :games, only: [:show, :new, :create]
end
