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
  level: 'Viridian Forest',
  time: 10_000
)

Score.create!(
  name: 'test2',
  level: 'Viridian Forest',
  time: 20_000
)

Score.create!(
  name: 'test3',
  level: 'Viridian Forest',
  time: 30_000
)

Score.create!(
  name: 'test4',
  level: 'Mt. Moon',
  time: 40_000
)

Score.create!(
  name: 'test5',
  level: 'Mt. Moon',
  time: 50_000
)
