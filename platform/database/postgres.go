package database

import (
	"fmt"

	"github.com/82-Learn/App-v0-octo.git/platform/model"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var DB *gorm.DB
var err error

func InitialMigration() {
	DB, err = gorm.Open("postgres", "host=localhost port=5432 user=postgres dbname=App-DB sslmode=disable password=Mick45")
	if err != nil {
		fmt.Println(err.Error())
		panic("Cannot connect to Database")
	}

	DB.AutoMigrate(&model.Post{})

	fmt.Println("Connected to DB")

}
