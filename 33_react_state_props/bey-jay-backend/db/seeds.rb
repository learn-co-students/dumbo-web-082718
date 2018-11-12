# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

beyArray = [
  {
    "id": 1,
    "name": "All Day Slay",
    "img": "https://media.giphy.com/media/3o6gb7cN7bwDxAbnS8/giphy.gif",
    "favorite": false
  },
  {
    "id": 2,
    "name": "I Slay When I Say I Slay",
    "img": "https://media.giphy.com/media/10tk2nVzRbNV5u/giphy.gif",
    "favorite": false
  },
  {
    "id": 3,
    "name": "I Probably Shouldn't Have Added This Slay",
    "img": "https://media.giphy.com/media/xT0BKERIJrOjV73nMc/giphy.gif",
    "favorite": false
  },
  {
    "id": 4,
    "name": "Hallway Slay",
    "img":
      "https://media1.tenor.com/images/07fcc7f498655079905813acbaa4113a/tenor.gif?itemid=5036498",
    "favorite": false
  },
  {
    "id": 5,
    "name": "Queen Slay",
    "img":
      "https://media1.tenor.com/images/390eeb72dc9e99e980d2e6f77dbe437b/tenor.gif?itemid=5230419",
    "favorite": false
  }
]

jayArray=[
  {
    "id": 1,
    "name": "Jay Confetti Slay",
    "img": "https://media.giphy.com/media/EGGunK4d4y3qo/giphy.gif",
    "favorite": false
  },
  {
    "id": 2,
    "name": "Jay Barclays Slay",
    "img": "https://media.giphy.com/media/FwE9DpvpJjuBW/giphy.gif",
    "favorite": false
  },
  {
    "id": 3,
    "name": "Jay Jammin' Slay",
    "img": "https://media.giphy.com/media/hiLLD9o1wTB3a/giphy.gif",
    "favorite": false
  },
  {
    "id": 4,
    "name": "Jay Number 1 Slay",
    "img":
      "https://media.giphy.com/media/101TgAiTF9v6E0/giphy.gif",
    "favorite": false
  },
  {
    "id": 5,
    "name": "Jay Grammay Slay",
    "img":
      "https://media.giphy.com/media/LCHSXxyp357wY/giphy.gif",
    "favorite": false
  }
]

beyArray.each do |bey|
  Bey.create(name:bey[:name], img:bey[:img])
end
jayArray.each do |jay|
  Jay.create(name:jay[:name], img:jay[:img])
end
