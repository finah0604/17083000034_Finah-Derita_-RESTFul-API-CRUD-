const express = require('express')
const router = express.Router()
const Biodata = require('../models/Biodata')

//CREATE
router.post('/', async (req, res) => {
    const biodataPost = new Biodata({
        nama: req.body.nama,
        alamat: req.body.alamat,
        pekerjaan: req.body.pekerjaan,
        hobi: req.body.hobi,
        email: req.body.email,
        phone: req.body.phone
    })

    try {
        const biodata = await biodataPost.save()
        res.json(biodata)
    }catch(err){
        res.json({message: err})
    }
})

//Read
router.get('/', async (req, res) => {
    try{
        const biodata = await Biodata.find()
        res.json(biodata)
    }catch(err){
        res.json({message: err})
    }
})


// Update
router.put('/:biodataId', async (req, res) => {
    try{
        const biodataUpdate = await Biodata.updateOne ({_id: req.params.biodataId}, {
        nama: req.body.nama,
        alamat: req.body.alamat,
        pekerjaan: req.body.pekerjaan,
        hobi: req.body.hobi,
        email: req.body.email,
        phone: req.body.phone
    })
        res.json(biodataUpdate)
    }catch(err){
        res.json({message: err})
    }
}) 

//Delete
router.delete('/:biodataId', async (req, res) => {
    try{
        const biodataUpdate = await Biodata.deleteOne ({_id: req.params.biodataId}, {
        nama: req.body.nama,
        alamat: req.body.alamat,
        pekerjaan: req.body.pekerjaan,
        hobi: req.body.hobi,
        email: req.body.email,
        phone: req.body.phone
      })
        res.json(biodataUpdate)
    }catch(err){
        res.json({message: err})
    }
}) 

module.exports = router