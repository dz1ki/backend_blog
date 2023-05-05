## Description

This backend implements custom CRUD, blog post CRUD, JWT token authorization.  
Database structure: The 'users' table has a one-to-many relationship with the 'posts' table,  
'posts' has a one-to-many relationship with the 'post_images' table.  
This allows us to upload multiple images.  
And if necessary, add new tables to store other types of data without changing the current structure.  
Docker-compose is used to create images and organize work with PostgreSQL.  
It is possible to attach images to the post.  
All images are stored on cloud storage "cloudinary.com".

An unauthorized user has the ability to:

1. Registration.
2. Authorization.
3. View all registered users.
4. Viewing all posts (per-page pagination implemented).

An authorized user has the ability to:

1. Update your data.
2. Change password.
3. Create posts.
4. Upload images to posts.
5. Delete images.
6. Update posts.
7. Delete posts.
8. Viewing a list of all your posts (per-page pagination implemented).

Filling tables with data occurs through migrations.

## Stack:

Stack: Node.js, Express, Postgresql, Sequelize-typescript, Swagger, Typescript, Streamifier, Docker-compose.

## Running the app

```bash

#You need to add the .env file to the root folder of the project, add the local.json and config.json files to the config folder.
#Examples : env.text , local.json.data , config.json.data.

# In the console, run the build and launch images with the command:
$ docker-compose up

# Wait until the server starts.

# Create tables in the database using the "migrations" command:
$ docker-compose exec backend_blog npm run migrate:start

```

## Test

Documentation (Swagger UI) is available at: [link] http://localhost:3000/api/

node v16.14.2
