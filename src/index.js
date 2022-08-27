const express = require('express')
const app = express()
const port = 3000

const middleware = require('./utilities/middleware')

app.use(express.json())
app.use(middleware.requestLogger)

const me = {
  fname : "ya haddy",
  minit : "",
  lname : "kasseh",
  ststus : "online",
  location : "costalroad",
  living : "true",
  Id : "0697",
  phone : "+220 3086398",
  picture : "",
  email : "kassehyahaddy@gmail.com",
  gender : "female",
  DateOfBirth : "14/04/1999",
}

let users = [
{
  id: 1,
  username: "haddix",
  phone: "3086398",
  password: "secrete"
},

{
  id: 2,
  username: "ya haddy",
  phone: "3937132",
  password: "password"
}
]

app.get('/', (req, res) => {
  res.send('HEALTH-REMEDY')
})


app.get("/api/users/:id" , (req, res) => {
  const id = req.params.id
  const user = users.find((user) => user.id === Number(id))
  res.json(users)
  
 })

app.get("/api/users", (req, res) => {
  res.json(users)
})


app.delete("/api/users/:id" , (req , res) => {
  const id = req.params.id
  users = users.filter((u) => u.id !== Number(id))
  res.status(204).end()
})

app.post("/api/users" , (req , res) => {
  const content = req.body

  
// here we save the content to the database
console.log(content)
res.json(content)

})

app.put('/api/users/:id' , (req , res) => {
  const id = req.params

  res.id
})


app.use(middleware.unknownEndPoint)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})