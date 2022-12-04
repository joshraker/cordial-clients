module Cordial
  class Game
    def solo_game?
      requester_id == acceptor_id
    end
  end
end
