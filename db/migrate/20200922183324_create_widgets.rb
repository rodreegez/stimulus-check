class CreateWidgets < ActiveRecord::Migration[6.0]
  def change
    create_table :widgets do |t|
      t.string :name
      t.integer :quantity
      t.boolean :available

      t.timestamps
    end
  end
end
