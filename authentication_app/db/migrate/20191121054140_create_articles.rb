class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.text :summary, :limit => 500, null: false
      t.text :body, :limit => 500, null: false
      t.string :thumbnail
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
