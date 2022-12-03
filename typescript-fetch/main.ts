import { AuthApi, Configuration, GamesApi } from './client'

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

  let game
  try {
    game = await gamesClient.getGame({ id: games[0].id })
  } catch(e) {
    console.error(`Error fetching game ${games[0].id}: ${e}`)
    return
  }

  console.log(game)
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

