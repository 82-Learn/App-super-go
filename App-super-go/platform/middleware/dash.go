package middleware

import (
	"github.com/82-Learn/App-v0-octo.git/platform/database"
	"github.com/82-Learn/App-v0-octo.git/platform/model"
	"github.com/gofiber/fiber/v2"
)

var err error

func Dash(c *fiber.Ctx) error {
	var posts []model.Post
	database.DB.Find(&posts)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": true,
			"msg":   err.Error(),
		})
	}

	return c.JSON(fiber.Map{
		"Post": &posts,
	})
}
