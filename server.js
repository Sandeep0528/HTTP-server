const http = require("http")
const PORT = 3000


const server = http.createServer((req, res) => {
    res.end(
        `<!DOCTYPE HTML>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Node.js Server</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                h1 { color: #333; }
            </style>
        </head>
        <body>
            <h1>Welcome to My Node.js Server!</h1>
            <p>This page is served using Node.js HTTP module.</p>
        </body>
        </html>
        
        `)

})

server.listen(PORT, () => {
    console.log(`Server is running on:http://localhost${PORT}`);

})