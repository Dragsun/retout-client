const $ = require('jquery');

function test(){
	$("input").each(function (param) {  
		if($(this).val() != ''){
			console.log($(this).val());
		}
	})
}

const formatDate = (date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    return [year, month, day].join('-');
}

function objectifyForm(formArray) {
    //serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++){
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}


$('form').on('submit', function(e){

	var connection = mysql.createConnection({
		host     : '127.0.0.1',
		port	 : '3306',
		user     : 'root',
		password : '', // or the original password : 'apaswword'
		database : 'test',
		connectTimeout : 30000,
		flag: [161]
	});

    e.preventDefault();

	myData = $(this).serializeArray()

	myData = objectifyForm(myData)

	$.each(x => {

	})

	connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });

    var $query=`INSERT INTO Commande VALUES
					('${myData.ref}',
					NULL,
					'${myData.motif}',
					'${myData.link}',
					NULL,
					'${myData.nom}',
					'${myData.num}',
					'${myData.mail}');
					
					INSERT INTO commentaire VALUES
					('${myData.commentaire}',
					'${myData.date}',
					'${myData.ref}');
					
					INSERT INTO Produit VALUES
					('${myData.ref_produit}',
					'${myData.qte_produit}',
					'${myData.ref}');

					INSERT INTO etat VALUES
					('${myData.etat}',
					'${myData.ref}',
					'${myData.date}')
				`;

	connection.query($query, function(err, rows, fields) {
		if(err){
			console.log("An error ocurred performing the query.");
			console.log(err);
			return;
		}

		console.log("Query succesfully executed", rows);
	});

	connection.end(function(){
        // The connection has been closed
    });

	alert();

})