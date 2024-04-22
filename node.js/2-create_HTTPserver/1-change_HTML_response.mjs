import { createServer } from 'node:http' //method createServer

const server = createServer((request, response) => {
    console.log('request received');

    response.statusCode = 200;

    response.setHeader('Content-Type', 'text/html');

    const jsonResponseBody = JSON.stringify({ location: 'Mars' });

    response.end(jsonResponseBody)
});

server.listen(3001, () => {
    console.log('Server is running at http://localhost:3001')
});

