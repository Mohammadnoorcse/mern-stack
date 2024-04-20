import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(process.env.MONG_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
      })
      .then(() => {
        console.log(`Mongodb connected with server secussfully`);
      }) .catch((err) => {
        console.log(`Some error occured while connecing to database: ${err}`);
      });
}