const express = require("express")
const cookieparser = require("cookie-parser");
const multer  = require('multer')
const authroutes = require("./routes/auth.routes"); // ✅ direct import
const foodRoutes = require("./routes/food.routes")


const app = express()
app.use(express.json());
app.use(cookieparser())
app.use('/api/food', foodRoutes)

app.use('/api/auth', authroutes) // ✅ अब सही चलेगा

module.exports = app;
