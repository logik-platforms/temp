const router = require("express").Router()
const db = require("../../models")

router.route("/api/contact").post((req, res) => {
    db.Contact.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
})

module.exports = router