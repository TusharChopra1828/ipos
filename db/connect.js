
const mongoose = require('mongoose');

uri ="mongodb+srv://chopratushar941:Alpha1828@nzwebsite.yhhi6co.mongodb.net/nzwebsite?retryWrites=true&w=majority&appName=Nzwebsite"

const connectDb =() => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://chopratushar941:<Alpha1828>@nzwebsite.yhhi6co.mongodb.net/nzwebsite?retryWrites=true&w=majority&appName=Nzwebsite";

const client = new MongoClient(uri,{
    ServerApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping:1});
        console.log("Pinged your deployment. You successfully connected to mongodb");
    } finally {
        await client.close();
    }
}
run().catch(console.dir);