const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{

    if(err){
       return  console.log('Unable to connect to server');
        
    }
    console.log('Connected to Mongo DB Server');

    let db=client.db('TodoApp');


    db.collection('Todos').findOneAndUpdate(
        {
            _id: new ObjectID('5d32f3b9c1e89e5a61fb946a')
        },

        {
            $set:{
                completed:false
            }
        },
        {
            returnOriginal:false
        }).then((res)=>{
            console.log(res);
            
        },(err)=>{
            console.log(err);
            
        })



    client.close();


});