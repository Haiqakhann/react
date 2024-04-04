import {client} from '../database/connection.js'  

const create = async(req,res)=> {
    try {
        console.log(`req.bdy is ${JSON.stringify(req.body)}`)
        const {username,email,password} = req.body
        await client.connect();
        console.log('connected')
        const db =  client.db("CRUD");
        const myColl = db.collection("users");
        const result = await myColl.insertOne({username,email,password});
        // res.redirect('/users')
        console.log(result)
        res.send('user entered')
    }
    catch (error) {
        console.log(error)
    } 
    finally {
        await client.close();
    }
}


export {create}