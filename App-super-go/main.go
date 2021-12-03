package main

import (
	"github.com/82-Learn/App-v0-octo.git/platform/database"
	"github.com/82-Learn/App-v0-octo.git/platform/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {

	// Database Connection
	database.InitialMigration()

	app := fiber.New(fiber.Config{})

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowMethods: "GET,POST,PATCH",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	//API Routes
	routes.Routers(app)

	//App Port
	app.Listen(":3000")

}
