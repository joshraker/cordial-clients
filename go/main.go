package main


import (
	"context"
	. "example.com/openapi"
	"fmt"
	"os"
)

func main() {
	c := NewAPIClient(NewConfiguration())
	
	t, resp, err := c.AuthApi.Login(context.Background()).
		LoginProps(*NewLoginProps(os.Args[1], os.Args[2])).
		Execute()

	if err != nil {
		fmt.Printf("%v: %+v\n", err, resp)
		return
	}
	
	ctx := context.WithValue(context.Background(), ContextAccessToken, *t.AccessToken)
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

	game, resp, err := c.GamesApi.GetGame(ctx, *games[0].Id).Execute()
	if err != nil {
		fmt.Printf("%v: %+v\n", err, resp)
		return
	}

	fmt.Printf("%s vs %s - %+v\n", *game.Requester.DisplayName, *game.Acceptor.DisplayName, game)
}
