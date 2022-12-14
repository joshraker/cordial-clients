# cordial

Cordial - the Ruby gem for the Cordial

A cooperative word puzzle game!

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.RubyClientCodegen

## Installation

### Build a gem

To build the Ruby code into a gem:

```shell
gem build cordial.gemspec
```

Then either install the gem locally:

```shell
gem install ./cordial-1.0.0.gem
```

(for development, run `gem install --dev ./cordial-1.0.0.gem` to install the development dependencies)

or publish the gem to a gem hosting service, e.g. [RubyGems](https://rubygems.org/).

Finally add this to the Gemfile:

    gem 'cordial', '~> 1.0.0'

### Install from Git

If the Ruby gem is hosted at a git repository: https://github.com/GIT_USER_ID/GIT_REPO_ID, then add the following in the Gemfile:

    gem 'cordial', :git => 'https://github.com/GIT_USER_ID/GIT_REPO_ID.git'

### Include the Ruby code directly

Include the Ruby code directly using `-I` as follows:

```shell
ruby -Ilib script.rb
```

## Getting Started

Please follow the [installation](#installation) procedure and then run the following code:

```ruby
# Load the gem
require 'cordial'

# Setup authorization
Cordial.configure do |config|
  # Configure Bearer authorization (Bearer $TOKEN): token
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = Cordial::AuthApi.new
opts = {
  login_props: Cordial::LoginProps.new({email: 'email_example', password: 'password_example'}) # LoginProps | 
}

begin
  result = api_instance.login(opts)
  p result
rescue Cordial::ApiError => e
  puts "Exception when calling AuthApi->login: #{e}"
end

```

## Documentation for API Endpoints

All URIs are relative to *https://cordial-api.joshraker.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Cordial::AuthApi* | [**login**](docs/AuthApi.md#login) | **POST** /login | 
*Cordial::AuthApi* | [**logout**](docs/AuthApi.md#logout) | **POST** /logout | 
*Cordial::GamesApi* | [**create_game**](docs/GamesApi.md#create_game) | **POST** /games | 
*Cordial::GamesApi* | [**create_guess**](docs/GamesApi.md#create_guess) | **POST** /games/{id}/guess | 
*Cordial::GamesApi* | [**delete_game**](docs/GamesApi.md#delete_game) | **DELETE** /games/{id} | 
*Cordial::GamesApi* | [**get_game**](docs/GamesApi.md#get_game) | **GET** /games/{id} | 
*Cordial::GamesApi* | [**list_games**](docs/GamesApi.md#list_games) | **GET** /games | 
*Cordial::NotificationsApi* | [**get_public_key**](docs/NotificationsApi.md#get_public_key) | **GET** /notifications/key | 
*Cordial::NotificationsApi* | [**subscribe**](docs/NotificationsApi.md#subscribe) | **POST** /notifications/subscribe | 
*Cordial::NotificationsApi* | [**unsubscribe**](docs/NotificationsApi.md#unsubscribe) | **POST** /notifications/unsubscribe | 
*Cordial::UsersApi* | [**create_user**](docs/UsersApi.md#create_user) | **POST** /users | 
*Cordial::UsersApi* | [**get_my_account**](docs/UsersApi.md#get_my_account) | **GET** /users/me | 
*Cordial::UsersApi* | [**get_user**](docs/UsersApi.md#get_user) | **GET** /users/{id} | 


## Documentation for Models

 - [Cordial::Account](docs/Account.md)
 - [Cordial::CreateGameProps](docs/CreateGameProps.md)
 - [Cordial::CreateGuessProps](docs/CreateGuessProps.md)
 - [Cordial::CreateUserProps](docs/CreateUserProps.md)
 - [Cordial::Game](docs/Game.md)
 - [Cordial::Guess](docs/Guess.md)
 - [Cordial::LoginProps](docs/LoginProps.md)
 - [Cordial::PublicKeyResponse](docs/PublicKeyResponse.md)
 - [Cordial::Subscription](docs/Subscription.md)
 - [Cordial::SubscriptionKeys](docs/SubscriptionKeys.md)
 - [Cordial::Token](docs/Token.md)
 - [Cordial::UnsubscribeProps](docs/UnsubscribeProps.md)
 - [Cordial::User](docs/User.md)


## Documentation for Authorization


### token

- **Type**: Bearer authentication (Bearer $TOKEN)

