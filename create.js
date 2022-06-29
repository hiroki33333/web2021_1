const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let schema = `
create table game(
  id integer primary key,
  name text not null,
  number of players integer not null,
  peak integer not null,
  developer_id integer not null
);
`
let schema=`
crate table developer(
  id integer primary key,
  name text not null,
);
`


db.serialize( () => {
	db.run( schema, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "テーブルを作成しました" );
	});
});
