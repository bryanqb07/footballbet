class AddSubIdsColumnToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :subscription_ids, :integer, array: true, default: []
    add_index :users, :subscription_ids, using: 'gin'
  end
end
