class AddSubIdToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :sub_id, :integer, null: false, default: 0
    add_index :posts, :sub_id
  end
end
