const pool = require("./pool");

async function getAllMessages(){
    try{
    const { rows } = await pool.query("SELECT * FROM messages");
    console.log(rows);
    if(rows.length === 0){
        return null;
    }
    return rows;
    } catch (error) {
           console.error("Database error:", error);
           return null;
    }
}

async function insertMessage(author, text){
    await pool.query("INSERT INTO messages (author, text) VALUES ($1, $2)", [author, text]);
} 


async function getMessage(id){
    try {
        const result = await pool.query("SELECT * FROM messages WHERE id=$1",[id]);
        if (result.rows.length === 0){
            return null;
        }
        return result.rows[0];
    } catch (error) {
           console.error("Database error:", error);
           return null;

    }
}  

module.exports = {
    getAllMessages,
    insertMessage,
    getMessage
};