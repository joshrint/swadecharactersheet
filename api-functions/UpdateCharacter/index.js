const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient("mongodb://swade-db:d5c2WLiKguYerhVEC9nzCoKl3Wtg4CaCwPon9Ktpl93Bytx9Csu8uwtSbzjaUSwW1a93yfK84yeFACDbqyrynA==@swade-db.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@swade-db@");

module.exports = async function (context, req) {
    try {
        const database = await mongoClient.db("rippers");
        const collection = database.collection("characters");
        const { id } = req.params;
        const results = await collection.updateOne({name:id}, {$set:req.body})
        context.res={
            "headers":{
                "content-type":"application/json"
            },
            "body":req
        }

        console.log(`${results.matchedCount} characters matched`);

    } catch(error) {
        context.res = {
            "status":500,
            "headers":{
                "content-type":"application/json",
                "body":{
                    "message":error.toString()
                }
            }
        }
    }
}