const {MongoClient, ServerApiVersion} = require('mongodb');

const uri = process.env.DB_STRING;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

module.exports = client;