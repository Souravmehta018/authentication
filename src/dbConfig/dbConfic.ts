import mongoose, { connection } from 'mongoose';

export async function connect() {
  
    try {
        mongoose.connect(process.env.mongo_url!)  //"!" represents us saying 'tera bhai sambhal lega'
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('mangoDB connected')
        })
        connection.on('error', (err) => {
            console.log('mangoDB connection error' + err)
            process.exit()
        })
    } catch (error) {
        console.log('Something went wrong');
        console.log(error);

    }
  
}

