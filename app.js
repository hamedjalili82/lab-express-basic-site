const express = require('express');
const app = express();

app.use(express.static("public"));

app.get('/home', (request, response) => {
    console.log(request);
    response.sendFile(__dirname + '/veiws/home.html');
});

app.get('/about', (request, response) => {
    console.log(request);
    response.sendFile(__dirname + '/veiws/about.html');
});

app.get('/works', (request, response) => {
    console.log(request);
    response.sendFile(__dirname + '/veiws/works.html');
});

app.listen(3000, () => console.log('My first app listening to port 3000! '));




