export function isSoloGame(game: Game): boolean {
    return game.requesterId == game.acceptorId
}
