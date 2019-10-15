const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{

    if(err){
       return  console.log('Unable to connect to server');
        
    }
    console.log('Connected to Mongo DB Server');

    let db=client.db('TodoApp');

    db.collection('Todos').find().toArray()
    .then((docs)=>{
        
        console.log(JSON.stringify(docs,undefined,2));
        
    },(err)=>{
        
        console.log(err);
        
    })
    client.close();


});