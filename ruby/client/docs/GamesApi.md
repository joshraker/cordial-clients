# Cordial::GamesApi

All URIs are relative to *https://cordial-api.joshraker.com*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_game**](GamesApi.md#create_game) | **POST** /games |  |
| [**create_guess**](GamesApi.md#create_guess) | **POST** /games/{id}/guess |  |
| [**delete_game**](GamesApi.md#delete_game) | **DELETE** /games/{id} |  |
| [**get_game**](GamesApi.md#get_game) | **GET** /games/{id} |  |
| [**list_games**](GamesApi.md#list_games) | **GET** /games |  |


## create_game

> <Game> create_game(opts)



Creates a new game.

### Examples

```ruby
require 'time'
require 'cordial'
# setup authorization
Cordial.configure do |config|
  # Configure Bearer authorization (Bearer $TOKEN): token
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = Cordial::GamesApi.new
opts = {
  create_game_props: Cordial::CreateGameProps.new({acceptor_id: 'acceptor_id_example'}) # CreateGameProps | 
}

begin
  
  result = api_instance.create_game(opts)
  p result
rescue Cordial::ApiError => e
  puts "Error when calling GamesApi->create_game: #{e}"
end
```

#### Using the create_game_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Game>, Integer, Hash)> create_game_with_http_info(opts)

```ruby
begin
  
  data, status_code, headers = api_instance.create_game_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Game>
rescue Cordial::ApiError => e
  puts "Error when calling GamesApi->create_game_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_game_props** | [**CreateGameProps**](CreateGameProps.md) |  | [optional] |

### Return type

[**Game**](Game.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## create_guess

> <Game> create_guess(id, opts)



Make a guess for the specified game.

### Examples

```ruby
require 'time'
require 'cordial'
# setup authorization
Cordial.configure do |config|
  # Configure Bearer authorization (Bearer $TOKEN): token
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = Cordial::GamesApi.new
id = 789 # Integer | 
opts = {
  create_guess_props: Cordial::CreateGuessProps.new({word: 'word_example'}) # CreateGuessProps | 
}

begin
  
  result = api_instance.create_guess(id, opts)
  p result
rescue Cordial::ApiError => e
  puts "Error when calling GamesApi->create_guess: #{e}"
end
```

#### Using the create_guess_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Game>, Integer, Hash)> create_guess_with_http_info(id, opts)

```ruby
begin
  
  data, status_code, headers = api_instance.create_guess_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Game>
rescue Cordial::ApiError => e
  puts "Error when calling GamesApi->create_guess_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** |  |  |
| **create_guess_props** | [**CreateGuessProps**](CreateGuessProps.md) |  | [optional] |

### Return type

[**Game**](Game.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## delete_game

> <Game> delete_game(id)



Deletes the specified game.

### Examples

```ruby
require 'time'
require 'cordial'
# setup authorization
Cordial.configure do |config|
  # Configure Bearer authorization (Bearer $TOKEN): token
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = Cordial::GamesApi.new
id = 789 # Integer | 

begin
  
  result = api_instance.delete_game(id)
  p result
rescue Cordial::ApiError => e
  puts "Error when calling GamesApi->delete_game: #{e}"
end
```

#### Using the delete_game_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Game>, Integer, Hash)> delete_game_with_http_info(id)

```ruby
begin
  
  data, status_code, headers = api_instance.delete_game_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Game>
rescue Cordial::ApiError => e
  puts "Error when calling GamesApi->delete_game_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** |  |  |

### Return type

[**Game**](Game.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_game

> <Game> get_game(id)



Returns the specified game.

### Examples

```ruby
require 'time'
require 'cordial'
# setup authorization
Cordial.configure do |config|
  # Configure Bearer authorization (Bearer $TOKEN): token
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = Cordial::GamesApi.new
id = 789 # Integer | 

begin
  
  result = api_instance.get_game(id)
  p result
rescue Cordial::ApiError => e
  puts "Error when calling GamesApi->get_game: #{e}"
end
```

#### Using the get_game_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Game>, Integer, Hash)> get_game_with_http_info(id)

```ruby
begin
  
  data, status_code, headers = api_instance.get_game_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Game>
rescue Cordial::ApiError => e
  puts "Error when calling GamesApi->get_game_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** |  |  |

### Return type

[**Game**](Game.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list_games

> <Array<Game>> list_games



Returns all accessible games.

### Examples

```ruby
require 'time'
require 'cordial'
# setup authorization
Cordial.configure do |config|
  # Configure Bearer authorization (Bearer $TOKEN): token
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = Cordial::GamesApi.new

begin
  
  result = api_instance.list_games
  p result
rescue Cordial::ApiError => e
  puts "Error when calling GamesApi->list_games: #{e}"
end
```

#### Using the list_games_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Game>>, Integer, Hash)> list_games_with_http_info

```ruby
begin
  
  data, status_code, headers = api_instance.list_games_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Game>>
rescue Cordial::ApiError => e
  puts "Error when calling GamesApi->list_games_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Game&gt;**](Game.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

