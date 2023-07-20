const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

//local imports
const connectDb = require('./db.js')
const employeeRoutes = require('./controllers/employee.controller.js')
const {errorHandler} = require('./middlewares')


const app = express();

//middleware
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:4200'}))
app.use('/api/employees',employeeRoutes)
app.use(errorHandler)



connectDb()
.then(() => {
    console.log('database connection successful')
    app.listen(3000, () =>console.log
        ('Server is running on port 3000'))
})
.catch(err => console.log(err))