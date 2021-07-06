# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create!(
  username: 'guest',
  password: 'password',
  email: 'guest@email.com'
)

u2 = User.create!(
  username: 'username',
  password: 'password',
  email: 'username@email.com'
)