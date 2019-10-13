let express = require('express');
let app = express();

app.set('view engine', 'ejs')
app.use('/', express.static('./public'))

// Controllers
let todoController = require('./controllers/todoController')

// Controller Exec
todoController(app)

// Server
let port = 3000;
app.listen(port);
console.log(`Listening to port ${port}`);
