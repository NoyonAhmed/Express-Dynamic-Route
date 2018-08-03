const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) => {
    res.status(200).json({
        massage : "I am get method"
    })
})

router.post('/', (req, res, next) => {
    res.json({
        massage : "i am post page"
    })
})


router.put('/', (req, res, next) => {
    res.json({
        massage : "i am edit page"
    })
})

router.delete('/', (req, res, next) => {
    res.json({
        massage : "i am delete page"
    })
})




module.exports = router