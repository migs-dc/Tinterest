# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_16_121611) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boards", force: :cascade do |t|
    t.string "title", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "pin_id"
    t.string "display_picture"
    t.index ["pin_id"], name: "index_boards_on_pin_id"
    t.index ["title"], name: "index_boards_on_title"
    t.index ["user_id"], name: "index_boards_on_user_id"
  end

  create_table "pin_boards", force: :cascade do |t|
    t.integer "board_id", null: false
    t.integer "pin_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id"], name: "index_pin_boards_on_board_id"
    t.index ["pin_id"], name: "index_pin_boards_on_pin_id"
  end

  create_table "pins", force: :cascade do |t|
    t.string "title", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url", null: false
    t.string "description"
    t.index ["title"], name: "index_pins_on_title"
    t.index ["user_id"], name: "index_pins_on_user_id"
  end

  create_table "saves", force: :cascade do |t|
    t.integer "pin_id", null: false
    t.integer "user_id", null: false
    t.index ["pin_id"], name: "index_saves_on_pin_id"
    t.index ["user_id"], name: "index_saves_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "display_picture"
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

end
