User Management API

This is a User Management REST API built with Node.js, Express, and MongoDB. It includes CRUD operations, authentication, and authorization using JWT and ACL (Access Control List).

## Setup Instructions

Step 1: Clone the repository 
  git clone https://github.com/swap2728/zylentrix.git
  cd zylentrix
  
Step 2 : npm install

Step 3 : Set mongodb url of atlus or use mongodb compass ( in .env file)

Step 4 : npm run dev (to run the code )



## ** Features added **

-Express – Web framework for Node.js

-Mongoose – MongoDB ODM for handling database operations

-JWT (JSON Web Token) – Authentication & Authorization

-ACL (Access Control List) – Role-based access control for users and admins

-dotenv – Environment variable management

-bcryptjs – Password hashing for security





## CRUD Operations on Users 

Method              Endpoint                     Description

POST                /api/users/register           Register a new user

POST                /api/users/login             Login a user and get token

GET                 /api/users                   Retrieve all users (Admin only)

GET                  /api/users/:id               Retrieve a user by ID

PUT                  /api/users/:id               Update a user by ID

DELETE              /api/users/:id               Delete a user by ID



