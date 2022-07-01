
function initTable(){
    var $query = 'SELECT * FROM `Commande` LIMIT 10';
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });

    var $query = 'SELECT * FROM `Commande` LIMIT 10';

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
                    <td>${element.ref_commande}</td>
                    <td>${element.motif}</td>
                    <td>${element.date}</td>
                    <td>${element.lien_drive}</td>
                    <td>${element.date_remise_stock}</td>
                </tr>
            `;
        });

        $('tbody').html(myQuerry)

    });




    connection.end(function(){
        // The connection has been closed
    });
}


initTable()