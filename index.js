/**
 * Externals modules
 */
const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')

/**
 * Save sessions on path
 */
const FileStore = require('session-file-store')(session)

/**
 * Flash messages
 */
const flash = require('express-flash')

/**
 * Database connection
 */
const conn = require('./db/conn')

/**
 * Import Modules
 */
const Tought = require('./models/Tought')
const User = require('./models/User')

/**
 * Import Routes
 */
const toughtsRoutes = require('./routes/toughtsRoutes')
const authRoutes = require('./routes/authRoutes')

/**
 * Import Controllers
 */
const ToughtController = require('./controllers/ToughtController')

/**
 * Express constant
 */
const app = express()

/**
 * Ready data of body of views
 */
app.use(
    express.urlencoded({
        extended: true,
    })
)

/**
 * Get data to Json
 */
app.use(express.json())

/**
 * Partials path
 */
const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

/**
 * Setup do handlebars e view engine
 */
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

/**
 * Setup da pasta estática public, para armazenar CSS, JS e imagens
 */

app.use(express.static('public'))

/**
 * Session midleware
 */
app.use(
    session({
        name: 'session',
        secret: 'nosso_secret',
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function () {},
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000),
            httpOnly: true // Obs: se fosse online, deve ser https
        }
    }),
)

/**
 * Set up session to res
 */
app.use((req, res, next) => {
    if(req.session.userid){
        res.locals.session = req.session
    }
    next()
})

/**
 * Flash message
 */
app.use(flash())

/**
 * Routes
 */
app.use('/toughts', toughtsRoutes)
app.use('/', authRoutes)
app.get('/', ToughtController.showToughts)

/**
 * Conditioning database persistence with connection port
 */
conn
    .sync()
    //.sync({ force: true })
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))