const $ = require('jquery');

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
    return [day, month, year].join('-');
}

function initTable(){
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });

	// select all orders limit to 20

    var $query = 'SELECT * FROM `Commande` LIMIT 20';

    connection.query($query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }

        console.log("Query succesfully executed", rows);

        var myQuerry = '';

        rows.forEach(element => {
            myQuerry += `
                <tr>
                    <td>${element.nom_client}</td>
                    <td>${element.ref_commande}</td>
                    <td>${formatDate(element.date)}</td>
                    <td>${element.lien_drive}</td>
                    <td class="popup">🗨️</td>
                    <td class="fiche">😃</td>
                    <td class="telephone">📞</td>
                    <td class="photo">📸</td>
                </tr>
            `;
            console.log(`${element.date}`);
        });
        $('tbody').html(myQuerry)
    });

    connection.end(function(){
        // The connection has been closed
    });
}


initTable()