# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Score.delete_all

Score.create!(
  name: 'test',
  level: 1,
  time: 10_000
)

Score.create!(
  name: 'test2',
  level: 1,
  time: 20_000
)

Score.create!(
  name: 'test3',
  level: 1,
  time: 30_000
)

Score.create!(
  name: 'test4',
  level: 2,
  time: 40_000
)

Score.create!(
  name: 'test5',
  level: 2,
  time: 50_000
)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
