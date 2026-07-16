const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://VisakhS:Visakh1367@cluster0.myccibi.mongodb.net/evd").then(
    () => {
        console.log("MongoDB connected")
    }
).catch(
    (err) => (
        console.log(err)
))

const Car=mongoose.model("Cars", new mongoose.Schema(
    {
        bookingID: String,
        ownerName: String,
        email: String,
        phone: String,
        vRegno: String,
        vBrand: String,
        vModel: String,
        batteryCap: String,
        connType: String,
        chargeDate: String,
        timeSlot: String,
        estUnits: String,
        chBayno: String
    }
))

app.get("/test", (req, res) => {
    res.send("hello")
})

app.post("/view-ev", async (req, res) => {
    const cars=await Car.find()
    res.json(cars)
  
app.post("/add-ev", async (req,res) => {
    await Car.create(req.body)
    res.json({"status" : "success"})
})

app.listen(3000,() => {
    console.log("Server started")
})