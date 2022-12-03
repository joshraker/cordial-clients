=begin
#Cordial

#A cooperative word puzzle game!

The version of the OpenAPI document: 0.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.2.1

=end

# Common files
require 'cordial/api_client'
require 'cordial/api_error'
require 'cordial/version'
require 'cordial/configuration'

# Models
Cordial.autoload :Account, 'cordial/models/account'
Cordial.autoload :CreateGameProps, 'cordial/models/create_game_props'
Cordial.autoload :CreateGuessProps, 'cordial/models/create_guess_props'
Cordial.autoload :CreateUserProps, 'cordial/models/create_user_props'
Cordial.autoload :Game, 'cordial/models/game'
Cordial.autoload :Guess, 'cordial/models/guess'
Cordial.autoload :LoginProps, 'cordial/models/login_props'
Cordial.autoload :PublicKeyResponse, 'cordial/models/public_key_response'
Cordial.autoload :Subscription, 'cordial/models/subscription'
Cordial.autoload :SubscriptionKeys, 'cordial/models/subscription_keys'
Cordial.autoload :Token, 'cordial/models/token'
Cordial.autoload :UnsubscribeProps, 'cordial/models/unsubscribe_props'
Cordial.autoload :User, 'cordial/models/user'

# APIs
Cordial.autoload :AuthApi, 'cordial/api/auth_api'
Cordial.autoload :GamesApi, 'cordial/api/games_api'
Cordial.autoload :NotificationsApi, 'cordial/api/notifications_api'
Cordial.autoload :UsersApi, 'cordial/api/users_api'

module Cordial
  class << self
    # Customize default settings for the SDK using block.
    #   Cordial.configure do |config|
    #     config.username = "xxx"
    #     config.password = "xxx"
    #   end
    # If no block given, return the default Configuration object.
    def configure
      if block_given?
        yield(Configuration.default)
      else
        Configuration.default
      end
    end
  end
end