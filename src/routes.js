const express = require("express")
const QuestionController = require("./controllers/QuestionController")
const RoomController = require("./controllers/RoomController")

const route = express.Router()

route.get("/", function (req, res) {
    res.render("index", {page: 'enter-room'})
})

route.get("/criar-sala", function (req, res) {
    res.render("index", {page: 'create-pass'})
})

route.post("/criar-sala", RoomController.create)
route.get("/sala/:room", RoomController.open)
route.post("/enterroom", RoomController.enter)

route.post("/question/create/:room", QuestionController.create)
route.post("/question/:room/:question/:action", QuestionController.index)

module.exports = route