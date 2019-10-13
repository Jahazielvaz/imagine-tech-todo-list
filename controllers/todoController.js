module.exports = (app) => {
  let items = [
    {item: 'Learn jQuery'},
    {item: 'Learn NodeJs'},
    {item: 'Learn Javascript'},
    {item: 'Learn React'}
  ]

  app.get('/', (req, res) => {
    res.render('index', {list: items})
  })

  app.post('/todo', (req, res) => {

  })

  app.delete('/todo', (req, res) => {

  })


}
