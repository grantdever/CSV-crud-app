# CSV-CRUD-APP

Welcome to my first full-stack project!

# Front End

Built using AngularJS.

## Overview

The frontend defines a series of routes with two main functions for the user: 

 - upload data to the database
 - display the data in the database

The upload routes enable a user to upload a .csv file. If the .csv contains data with the appropriate headers, that data will be posted to the appropriate API endpoint and the data will be added to the database.

The view routes display the data stored in the 'groups' and 'users' tables.

# Back End
Built using NestJS.

## Overview

The backend defines a series of API endpoints which allow the user to CRUD:

 - **C**reate entries in the database
 - **R**eview entries in the database
 - **U**pdate entries in the database
 - **D**elete entries in the database

My specific CRUD API stores users and their many-to-one relationship with a group.

## Configuration

I used a local PostgreSQL database (pgAdmin4 GUI) and TypeORM to help with the initial configuration.

In order to set-up your own instance, you will need to create an .env file with the following attributes and place it inside your backend folder:

    NODE_ENV=
    PORT=
    DB_USER=
    DB_PASSWORD=
    DB_PORT=
    DB_HOST=
    DB_NAME=

You do not need to add any '' or "" when setting-up the database, an example may look like:

    NODE_ENV=development
    PORT=1337
    DB_USER=dbuser
    DB_PASSWORD=dbpw
    DB_PORT=7777
    DB_HOST=localhost
    DB_NAME=myfirstapi

Everything else should work as-is, you just may need to configure your ports locally.

# Moving Forward

This project is still a work in progress. It could be prettier, safer, and more elegant. 

A few future improvements:


 - Implement Promises in the UploadUserComponent and UploadGroupComponent to write more elegant code
 -  Add tiers of user, ie. read v. write permissions
 - Allow users with write permissions to delete and patch entries in the database
 - Pagination for my tables
 -  and other lervage ng bootstrap and CSS to improve UX

If you have any recommendations or questions, feel free to reach out at grantdever at gmail dot com.
