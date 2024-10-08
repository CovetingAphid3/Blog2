//import dependancies
const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")

// import blogroutes
const blogRoutes = require("./routes/blogRoutes")

//express app initialize
const app = express()

//connect to mongodb
const dbURI = ''
mongoose.connect(dbURI)
    .then(()=>app.listen(3000))
    .catch((err)=>console.log(err))

//register view engine (ejs)
app.set('view engine', 'ejs');

//middleware and static files
app.use(express.static('public'))
//passes data from form into object
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

//routes
app.get('/',(req,res)=>{
    res.redirect('/blogs')
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
})
// blog routes
// app.use('/blogs',blogRoutes)

//404 page
app.use((req,res)=>{
    res.status(404).render('404')
})
