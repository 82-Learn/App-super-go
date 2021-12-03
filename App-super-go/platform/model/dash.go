package model

type Post struct {
	ID         int    `gorm:"primary_key" json:"id"`
	First_Name string `gorm:"first_name" json:"first_name"`
	Last_Name  string `gorm:"last_name" json:"last_name"`
}
