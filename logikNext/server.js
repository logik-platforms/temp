const express = require("express")
const next = require("next")
const mongoose = require("mongoose")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = getRequestHandler()

const PORT = process.env.PORT || 3000

app.prepare().then(() => {
    const server = express()

    // routing
    server.get("*", (req, res) => {
        return handle(req, res)
    })

    // listen server
    server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost${PORT}`)
    })
}).catch((ex) => {
    // handle next set up errors
    console.error(ex.stack)
    process.exit(1)
})