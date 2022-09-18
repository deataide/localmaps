const app = require('express')()
import cors from 'cors'
import express = require('express')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(cors())