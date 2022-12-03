require 'openapi_client'

auth_client = OpenapiClient::AuthApi.new
token = nil

begin
  token = auth_client.login(login_props: OpenapiClient::LoginProps.new(email: ARGV[0], password: ARGV[1]))
rescue OpenapiClient::ApiError => e
  puts e
  exit 1
end

OpenapiClient.configure do |config|
  config.access_token = token.access_token
end

at_exit do
  OpenapiClient::AuthApi.new.logout
end

games_client = OpenapiClient::GamesApi.new

games = nil
begin
  games = games_client.list_games
rescue OpenapiClient::ApiError => e
  puts e
  exit 1
end

game = nil
begin
  game = games_client.get_game(games.first.id)
rescue OpenapiClient::ApiError => e
  puts e
  exit 1
end

puts game

