const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')

// Database
const db = require('./config/database')
const { Sequelize } = require('sequelize/dist')

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error: ' + err))

const app = express()
app.use(morgan('combined'))

// Handlebars
app.engine(
  'handlebars',
  exphbs.engine({
    defaultLayout: 'main',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true
    }
  })
)
app.set('view engine', 'handlebars')

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Index route
app.get('/', (req, res) => res.render('index', { layout: 'landing' }))

// Gig routes
app.use('/gigs', require('./routes/gigs'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`))
