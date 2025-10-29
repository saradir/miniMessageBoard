#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("pg");

const SQL =`
 CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author VARCHAR (255),
    text TEXT,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

 INSERT INTO messages (author, text)
 VALUES 
 ('Amando', 'Hi there'),
 ('Charlesy', 'Hello world!'); 
 `;

console.log(process.env.DATABASE_URL)
 async function main(){
    console.log("seeding...");
    const client = new Client ({
          connectionString: process.env.DATABASE_URL,
           ssl: {
                rejectUnauthorized: false
  }
         
    });

    try{
        await client.connect();
        await client.query(SQL);
        console.log("done");
        } catch(err) {
            console.error("Error seeding database:", err);
        } finally {
            await client.end();
        }
    }

 main();