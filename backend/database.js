const mongoose=require('mongoose');
async function dbConn(){
    const conn= await mongoose.connect('mongodb+srv://harshmaurya7112:g7E5OwiRsK5QruUD@cluster0.n6ydnhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    if(conn){
        console.log("Database connected successfully!!")
    }
    else{
        console.log("Database connection failure");
    }
}
module.exports=dbConn;
