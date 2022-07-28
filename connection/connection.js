const mysql = require('mysql');

// Add the credentials to access your database
global.connection = mysql.createConnection({
    host     : '127.0.0.1',
	port	 : '3306',
    user     : 'root',
    password : '', // or the original password : 'apaswword'
    database : 'nodejs',
    connectTimeout : 30000
});
