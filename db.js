const mongoose =require('mongoose');

const dbUri = 'mongodb+srv://admin:9090@cluster0.75uxkjl.mongodb.net/employee_db?retryWrites=true&w=majority'



module.exports = () => {
    return mongoose.connect(dbUri,
        {useNewUrlParser:true, useUnifiedTopology: true}
        )
}