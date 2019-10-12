let express = require('express');
let app = express();

app.set('view engine', 'ejs')
app.use('/', express.static('./public'))

// Controllers
let todoController = require('./controllers/todoController')

// Controller Exec
todoController(app)

// Server
app.listen(3000);
console.log('Listening to port 3000');
