const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql = `
select game.id,game.name,game.number of players,game.peak,developer.name as name2 from game inner join developer on game.developer_id=developer_id
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( game.id + ' : ' +game.name+':'+game.number of players+':'+game.peak+':'+data.name2);
		}
	});
});
