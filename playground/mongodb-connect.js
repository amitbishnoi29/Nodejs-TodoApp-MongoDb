const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{

    if(err){
       return  console.log('Unable to connect to server');
        
    }
    console.log('Connected to Mongo DB Server');

    let db=client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed:false
    },(err,result)=>{
        if (err){
           return  console.log('Not inserted');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
        
    });

    client.close();


});