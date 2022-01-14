const express = require('express') 
const app = express() 

const port = process.env.PORT || 3000 

const path = require('path')
const dir = path.join(__dirname, "../public")
app.use(express.static(dir))

app.get('', (req, res) => { 
    res.send('Hello Eric') 
}) 

app.get('/about', (req, res) => {
    res.render('index', {
      title: 'Weather App',
      name: 'Eric'
    })
  })

app.listen(port, () => { 
    console.log('Server is up on port ' + port) 
})

