//import dependancies
const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")

console.log('working')
const blogRoutes = require("./routes/blogRoutes")

//express app
const app = express()

//connect to mongodb
const dbURI = 'mongodb+srv://TChawanda:Blog1@blog1.hqlxjwu.mongodb.net/'
mongoose.connect(dbURI)
    .then(()=>app.listen(3000))
    .catch((err)=>console.log(err))

//register view engine
app.set('view engine', 'ejs');

//middleware and static files
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))//passes data from form into object
app.use(morgan('dev'))

//routes
app.get('/',(req,res)=>{
    res.redirect('/blogs')
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
})
// blog routes
app.use('/blogs',blogRoutes)

//404 page
app.use((req,res)=>{
    res.status(404).render('404')
})