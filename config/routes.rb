Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, :defaults => {:format => 'json' } do
    resources :users, only: [:create, :show] do
        member do
          post 'subscribe'
          post 'unsubscribe'
        end
    end
    resource :session, only: [:create, :destroy]
    resources :subs, except: [:new] do
      get "search", on: :collection
    end
    resources :posts, only: [:create, :show, :edit, :update] do 
        member do
          post 'downvote'
          post 'upvote'
        end
    end
    resources :comments, only: [:create, :show, :edit, :update] do 
        member do
          post 'downvote'
          post 'upvote'
        end
    end
  end  
  root to: 'static_pages#root'
end
