const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{

    if(err){
       return  console.log('Unable to connect to server');
        
    }
    console.log('Connected to Mongo DB Server');

    let db=client.db('TodoApp');

    // delete many

    db.collection('Todos').deleteMany({text:'Eat food'})
    .then((res)=>{
        console.log(res);
        
    },(err)=>{
        console.log(err);
        
    })

    //deleteOne




    //findOneand delete

    client.close();


});