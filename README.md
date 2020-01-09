# library-management-systerm
Build a Library web application with Vue, NodeJS, and SQL using ScaffoldHub

#Requirement
npm lasted
PostgreSQL

# Create new databse
In this guides, I am going to present how to create database via PostgreSQL. 
Firstly, we need to access our account in pgAdmin version 4.
Nextly, creatig new database, and name it appropriately ('development3' in this project).

# Create environment
In font-end and back-end folder, open terminal and type command: npm install. 
Additional, to reset or init database, type command: npm run db:reset:localhost.

#Config application
In folder /back-end/config/localhost.js, we must change some object attributes like:
  database: {
    username: 'postgres',
    dialect: 'postgres',
    password: 'your-password',
    database: 'development3',
    host: 'localhost',
    ...
  },
  
#Run application
To run application, type command in back-end and font-end folder: npm start

#More information
Build a Library web app with Vue: https://scaffoldhub.io/courses/vue-library

