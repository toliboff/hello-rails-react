Rails.application.routes.draw do
  root 'static#index'
  namespace :v1, defaults: {format:JSON} do 
    get 'greetings', to:'greetings#index'
  end
end
