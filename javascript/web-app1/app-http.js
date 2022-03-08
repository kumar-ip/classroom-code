const http = require('http');

const homePage = `<html>
    <head>
        <title>My First Web App</title>
    </head>
    <body>
        <h1>This is my first web application!!!</h1>    
        <a href='contact'>Go to Contact</a>  
    </body>
</html>`;

const contactPage = `<html>
    <head>
        <title>My First Web App</title>
    </head>
    <body>
        <h1>This is my contact page!!!</h1>  
        <a href='home'>Go Back to Home</a>  
    </body>
</html>`;

const server = http.createServer((req, res) => {

    res.writeHead(200);

    if (req.url === '/contact') {
        res.write(contactPage);
    } else {
        res.write(homePage);
    }
    res.end();
});

server.listen(8080);