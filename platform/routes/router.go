package routes

import (
	"github.com/82-Learn/App-v0-octo.git/platform/middleware"

	"github.com/gofiber/fiber/v2"
)

func Routers(app *fiber.App) {
	app.Get("/", middleware.Dash)
	app.Get("/dash", middleware.Dash)
}
