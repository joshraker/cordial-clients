require 'cordial'

auth_client = Cordial::AuthApi.new
token = nil

begin
  token = auth_client.login(login_props: Cordial::LoginProps.new(email: ARGV[0], password: ARGV[1]))
rescue Cordial::ApiError => e
  puts e
  exit 1
end

Cordial.configure do |config|
  config.access_token = token.access_token
end

at_exit do
  Cordial::AuthApi.new.logout
end

games_client = Cordial::GamesApi.new

games = nil
begin
  games = games_client.list_games
rescue Cordial::ApiError => e
  puts e
  exit 1
end

game = nil
begin
  game = games_client.get_game(games.first.id)
rescue Cordial::ApiError => e
  puts e
  exit 1
end

puts game

