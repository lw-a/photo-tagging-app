class AddLevelToScores < ActiveRecord::Migration[7.0]
  def change
    add_column :scores, :level, :integer
  end
end
