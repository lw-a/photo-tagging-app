class ChangeScoresLevelToString < ActiveRecord::Migration[7.0]
  def change
    change_column(:scores, :level, :string)
  end
end
