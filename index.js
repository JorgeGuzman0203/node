const express = require ('express');
const index = express();

index.get('/', (req, res) => {
	res.send("Hola Mundo");
});


const port = process.env.port || 3000;

index.listen(port, () => {
	console.log("Hola Mundo");
});

