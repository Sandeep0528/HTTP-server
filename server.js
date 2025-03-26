const http = require.js("http")
const PORT = 3000


const server = http.createServer((req, res) => {
    res.end("Hello")
})

server.listen(PORT, () => {
    console.log(`Server is running on:http://localhost${PORT}`);

})
