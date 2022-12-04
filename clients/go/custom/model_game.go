func (g *Game) IsSoloGame() bool {
	return *g.RequesterId == *g.AcceptorId
}
