# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do 
    name = Faker::Name.name.split.join("_")
    email = name + "@mail.com"
    new_user = User.create(username: name, password: "123456", email: email)
end

30.times do
    random_num = rand(1..10)
    title = ""
    case random_num
    when 1
        title = Faker::University.name
    when 2
        title = Faker::Job.title
    when 3
        title = Faker::GreekPhilosophers.name
    when 5
        title = Faker::ProgrammingLanguage.name
    when 6
        title = Faker::Vehicle.manufacture
    when 7
        title = Faker::Nation.language
    when 8
        title = Faker::Nation.nationality
    when 9
        title = Faker::Team.name   
    when 10
        title = Faker::Food.dish
    end    
    description = "A forum about " + title
    moderator_id = User.pluck(:id).sample
    new_user = Sub.create(title: title, description: description, moderator_id: moderator_id)
end


100.times do
    random_num = rand(1..10)
    title = ""
    case random_num
    when 1
        title = Faker::University.name
    when 2
        title = Faker::Job.title
    when 3
        title = Faker::GreekPhilosophers.name
    when 5
        title = Faker::ProgrammingLanguage.name
    when 6
        title = Faker::Vehicle.manufacture
    when 7
        title = Faker::Nation.language
    when 8
        title = Faker::Nation.nationality
    when 9
        title = Faker::Team.name   
    when 10
        title = Faker::Food.dish
    end    

    description = "A forum about " + title
    moderator_id = User.pluck(:id).sample
    new_user = Sub.create(title: title, description: description, moderator_id: moderator_id)
end

100.times do 
    sub_id = Sub.pluck(:id).sample
    user_id = User.pluck(:id).sample
    random_num = rand(1..10)
    title = ""
    case random_num
    when 1
        title = Faker::University.name
    when 2
        title = Faker::Job.title
    when 3
        title = Faker::GreekPhilosophers.name
    when 5
        title = Faker::ProgrammingLanguage.name
    when 6
        title = Faker::Vehicle.manufacture
    when 7
        title = Faker::Nation.language
    when 8
        title = Faker::Nation.nationality
    when 9
        title = Faker::Team.name   
    when 10
        title = Faker::Food.dish
    end    
    content = "A post about " + title
    Post.create(title: title, content: content, user_id: user_id, sub_id: sub_id)
end

1000.times do
        post_id = Post.pluck(:id).sample
        user_id = User.pluck(:id).sample
        rand_comm = rand(1..2)
        parent_comment_id = rand_comm == 1 ? nil : Post.find_by(id: post_id).comments.pluck(:id)
        random_num = rand(1..10)
        body = ""
        case random_num
        when 1
            body = Faker::University.name
        when 2
            body = Faker::Job.title
        when 3
            body = Faker::GreekPhilosophers.name
        when 4
            body = Faker::Name.name
        when 5
            body = Faker::ProgrammingLanguage.name
        when 6
            body = Faker::Vehicle.manufacture
        when 7
            body = Faker::Nation.language
        when 8
            body = Faker::Nation.nationality
        when 9
            body = Faker::Team.name   
        when 10
            body = Faker::Food.dish
        end 

        body = "a comment about " + body 
        
    Comment.create(body: body, user_id: user_id, 
        parent_comment_id: parent_comment_id, post_id: post_id)
end

1000.times do
    user_id = User.pluck(:id).sample
    direction = [-1, 1].sample
    comment_id = Comment.pluck(:id).sample
    Comment.find_by(id: comment_id).user_votes.create(user_id: user_id, value: direction)
end

1000.times do
    user_id = User.pluck(:id).sample
    direction = [-1, 1].sample
    post_id = Post.pluck(:id).sample
    Post.find_by(id: post_id).user_votes.create(user_id: user_id, value: direction)
end
