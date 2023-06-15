
const http = require('http');

//Creamos el servidor
http.createServer( (req, res) => {

    res.setHeader('Content-Disposition','attachment; filename= lista.csv')
    res.writeHead(200, {'Content-Type': 'application/csv' });

    res.write('id, nombre');
    res.write('1, Edwin');
    res.write('2, María');
    res.write('3, Fernando');
    res.write('4, Dayiro');

    res.end();  

})
.listen( 3000);

console.log('Escuchando el puerto', 3000);