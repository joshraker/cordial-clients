import {AuthApi, Configuration, GamesApi, isSoloGame} from './client/src'

const argv = process.argv.slice(2)
const config = new Configuration()
const authClient = new AuthApi(config)
const gamesClient = new GamesApi(config)
let token

(async function() {
  try {
    token = await authClient.login({ loginProps: { email: argv[0], password: argv[1] } })
  } catch(e) {
    console.error(`Error logging in: ${e}`)
    return
  }

  config.config = new Configuration({ accessToken: token.accessToken })
  
  let games
  try {
    games = await gamesClient.listGames()
  } catch(e) {
    console.error(`Error fetching games: ${e}`)
    return
  }

  let game = games[games.length - 1]
  try {
    game = await gamesClient.getGame({ id: game.id })
  } catch(e) {
    console.error(`Error fetching game ${game.id}: ${e}`)
    return
  }

  console.log(game)

  if (isSoloGame(game)) {
    console.log("Solo Game")
  } else {
    console.log(`${game.requester.displayName} and ${game.acceptor.displayName}`)
  }

  if (game.guesses.length == 0) {
    console.log("No Guesses")
  }

  for (const guess of game.guesses) {
    console.log(`${guess.word} - ${guess.comparison}`)
  }
})()
.finally(async () => {
  if (token) {
    try {
      await authClient.logout()
    } catch(e) {
      console.error(`Error logging out: ${e}`)
      return
    }
  }
})

