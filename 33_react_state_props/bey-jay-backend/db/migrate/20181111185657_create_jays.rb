class CreateJays < ActiveRecord::Migration[5.2]
  def change
    create_table :jays do |t|
      t.string :name
      t.string :img

      t.timestamps
    end
  end
end
