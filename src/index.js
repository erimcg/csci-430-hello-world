const express = require('express') 
const app = express()

const port = process.env.PORT || 3000 

const path = require('path')
const dir = path.join(__dirname, "../public")
app.use(express.static(dir))


app.get('', (req, res) => { 
    let o = {x: 1, y: 2}

    res.send(o)
})

app.listen(port, () => { 
    console.log('Server is up on port ' + port) 
})

console.log(__dirname)