const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/FreeLancerProject';

const connectDB = () => {
    MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
        if (err) {
            throw(err);
        }
        console.log('MongoDB Connected');
        client.close();
    })
}

module.exports = connectDB;
