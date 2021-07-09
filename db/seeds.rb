# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create!(
  username: 'demo',
  password: 'password',
  email: 'demo@email.com'
)

u2 = User.create!(
  username: 'lara',
  password: 'password',
  email: 'demo2@email.com'
)

p1 = Pin.create!(
  title: 'Pied crow',
  user_id: 1,
  image_url: "https://imgur.com/3GChGMb"
)

p2 = Pin.create!(
  title: 'American crow',
  user_id: 1,
  image_url: "https://imgur.com/CBaJlHS"
)

p3 = Pin.create!(
  title: 'three',
  user_id: 2,
  image_url: "https://imgur.com/CBaJlHS"
)

p4 = Pin.create!(
  title: 'four',
  user_id: 2,
  image_url: "https://imgur.com/CBaJlHS",
  description: "number four description"
)

p5 = Pin.create!(
  title: 'five',
  user_id: 2,
  image_url: "https://imgur.com/CBaJlHS",
  description: "number five description"
)

p6 = Pin.create!(
  title: 'six',
  user_id: 2,
  image_url: "https://imgur.com/CBaJlHS",
  description: "number six description"
)
