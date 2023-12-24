// require('dotenv').config()
// const express = require('express')
import dotenv from 'dotenv';
import express from 'express'; 
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/joke',(req,res)=>{
    const joke=[
        {
          "id": 1,
          "title": "joke 1",
          "content": "This is the first joke."
        },
        {
          "id": 2,
          "title": "joke 2",
          "content": "Here's another joke for you."
        },
        {
          "id": 3,
          "title": "joke 3",
          "content": "Why did the chicken cross the road? To get to the other side!"
        },
        {
          "id": 4,
          "title": "joke 4",
          "content": "Knock, knock. Who's there? Orange. Orange who? Orange you glad I didn't say banana?"
        },
        {
          "id": 5,
          "title": "joke 5",
          "content": "Last but not least, this is the fifth joke."
        }
      ]
      
    res.send(joke)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})