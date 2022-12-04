package main

import (
	"context"
	"fmt"
	"os"

	"cordial"
)

func main() {
	c := cordial.NewAPIClient(cordial.NewConfiguration())

	t, resp, err := c.AuthApi.Login(context.Background()).
		LoginProps(*cordial.NewLoginProps(os.Args[1], os.Args[2])).
		Execute()

	if err != nil {
		fmt.Printf("%v: %+v\n", err, resp)
		return
	}

	ctx := context.WithValue(context.Background(), cordial.ContextAccessToken, *t.AccessToken)
	defer func() {
		if _, err := c.AuthApi.Logout(ctx).Execute(); err != nil {
			fmt.Printf("Error logging out: %v\n", err)
			return
		}
	}()

	games, resp, err := c.GamesApi.ListGames(ctx).Execute()
	if err != nil {
		fmt.Printf("%v: %+v\n", err, resp)
		return
	}

	game, resp, err := c.GamesApi.GetGame(ctx, *games[len(games)-1].Id).Execute()
	if err != nil {
		fmt.Printf("%v: %+v\n", err, resp)
		return
	}

	fmt.Printf("%+v\n", game)

	title := "Solo Game"
	if !game.IsSoloGame() {
		title = fmt.Sprintf("%s and %s", *game.Requester.DisplayName, *game.Acceptor.DisplayName)
	}

	fmt.Println(title)

	if len(game.Guesses) == 0 {
		fmt.Println("No Guesses")
	}

	for _, guess := range game.Guesses {
		fmt.Printf("%s - %v\n", *guess.Word, guess.Comparison)
	}
}
