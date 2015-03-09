# database7
Database role group for week 7 of fac4

-------------------

Started by installing MongoDB - http://docs.mongodb.org/manual/installation/
Useful command line MongoDB commands:
```use mydb``` - creates a database with name "mydb" and move into it
```show collections``` - displays the collections within the current database
```db.mycollection.find()``` - searches collection for documents. Search parameters are key:value pairs that have been defined by your schema

Install application library such as Mongoose - http://mongoosejs.com/index.html
There are others available such as Monk (more lightweight but less features), mongojs etc

MongoDB uses collections to organise data. These are comparative with tables in relational databases.
Inside collections are documents, and these form the equivalent to fields and rows of a table and store all of the information.

These are the basic steps we carried out to display example data on a local server:

- Connect to database
- Define schema
- Create collection/model
- Create dummy data
- Save to database
- Create simple server
- Read dummy data from database
- Display dummy data


If you are running the database locally make sure to have it running simultaneously as your server to be able to extract data from it!

In you would like to run this code:
- Clone repo
- npm install node modules
- run mongo
- node model.js

