const mongoose = require('mongoose');


function connectToDb() {
    mongoose.connect('mongodb+srv://shivampatil2107:oKX7O3Tvc6f4dN6V@cluster0.bg9rs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ).then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log(err));
}


module.exports = connectToDb;
