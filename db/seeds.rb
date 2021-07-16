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

u3 = User.create!(
  username: 'migs',
  password: 'password',
  email: 'migs@email.com'
)

u4 = User.create!(
  username: 'Ekmek',
  password: 'password',
  email: 'ekmek@email.com'
)

p1 = Pin.create!(
  title: 'Title One',
  user_id: 1,
  image_url: "https://imgur.com/3GChGMb.png"
)

p2 = Pin.create!(
  title: 'a long title just to test',
  user_id: 1,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image_url: "https://imgur.com/CBaJlHS.png"
)

p3 = Pin.create!(
  title: 'a long title just to test asdfasdfasdfasdf',
  user_id: 2,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image_url: "https://i.imgur.com/sbgijEo.png"
)

p4 = Pin.create!(
  title: 'four',
  user_id: 2,
  image_url: "https://i.imgur.com/55U5AA8.jpg",
  description: "number four description"
)

p5 = Pin.create!(
  title: 'five',
  user_id: 2,
  image_url: "https://i.imgur.com/VqIQX64.png",
  description: "number five description"
)

p6 = Pin.create!(
  title: 'six',
  user_id: 2,
  image_url: "https://i.imgur.com/42BPMJN.jpg",
  description: "number six description"
)

p7 = Pin.create!(
  title: 'seven',
  user_id: 1,
  image_url: "https://i.imgur.com/Lc7m92L.jpg",
  description: "number seven description"
)

b1 = Board.create!(
  title: 'Normies',
  user_id: 1
)

b2 = Board.create!(
  title: 'Pied Crows',
  user_id: 2
)

b3 = Board.create!(
  title: 'Interesting',
  user_id: 3
)

pb1 = PinBoard.create!(
  board_id: 1,
  pin_id: 2
) 
pb2 = PinBoard.create!(
  board_id: 1,
  pin_id: 3
) 
pb3 = PinBoard.create!(
  board_id: 1,
  pin_id: 4
) 
pb4 = PinBoard.create!(
  board_id: 1,
  pin_id: 5
) 
pb5 = PinBoard.create!(
  board_id: 2,
  pin_id: 1
) 
pb6 = PinBoard.create!(
  board_id: 2,
  pin_id: 6
) 
pb7 = PinBoard.create!(
  board_id: 3,
  pin_id: 7
) 
pb7 = PinBoard.create!(
  board_id: 3,
  pin_id: 4
)
pb7 = PinBoard.create!(
  board_id: 3,
  pin_id: 3
) 

Pin.create!(
  title: 'a long title just to test asdfasdfasdfasdf',
  user_id: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image_url: "https://imgur.com/CHZRQD5.jpg"
)
Pin.create!(
  title: 'a long title just to test asdfasdfasdfasdf',
  user_id: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image_url: "https://i.imgur.com/sd2Lgzc.jpeg"
)
Pin.create!(
  title: 'a long title just to test asdfasdfasdfasdf',
  user_id: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image_url: "https://i.imgur.com/oFDk0wn.jpeg"
)
Pin.create!(
  title: 'a long title just to test asdfasdfasdfasdf',
  user_id: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image_url: "https://imgur.com/CHZRQD5.jpg"
)
Pin.create!(
  title: 'a long title just to test asdfasdfasdfasdf',
  user_id: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image_url: "https://i.imgur.com/oMiiKre.jpeg"
)
Pin.create!(
  title: 'a long title just to test asdfasdfasdfasdf',
  user_id: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image_url: "https://i.imgur.com/z7xqfBP.jpeg"
)
Pin.create!(
  title: 'a long title just to test asdfasdfasdfasdf',
  user_id: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image_url: "https://i.imgur.com/mOHUDPQ.jpeg"
)
Pin.create!(
  title: 'a long title just to test asdfasdfasdfasdf',
  user_id: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image_url: "https://i.imgur.com/WkWTZbN.jpeg"
)
Pin.create!(
  title: 'a long title just to test asdfasdfasdfasdf',
  user_id: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image_url: "https://i.imgur.com/OCoMCNM.jpeg"
)
Pin.create!(
  title: 'a long title just to test asdfasdfasdfasdf',
  user_id: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image_url: "https://i.imgur.com/erICBwG.jpeg"
)
Pin.create!(
  title: 'a long title just to test asdfasdfasdfasdf',
  user_id: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image_url: "https://i.imgur.com/DUwdwWN.jpeg"
)
Pin.create!(
  title: 'a long title just to test asdfasdfasdfasdf',
  user_id: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image_url: "https://i.imgur.com/NKrCjer.jpeg"
)
Pin.create!(
  title: 'a long title just to test asdfasdfasdfasdf',
  user_id: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image_url: "https://i.imgur.com/8K2IkDx.jpeg"
)
Pin.create!(
  title: 'a long title just to test asdfasdfasdfasdf',
  user_id: 3,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image_url: "https://i.imgur.com/vBCjirJ.jpeg"
)
