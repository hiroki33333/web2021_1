const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql = `
insert into game("name","number of players","peak","debeloper_id")values("Apex Legends",154090,297017,3);

insert into game ("name","number of players","peak","developer_id")values("ARK:Survival Evolved",83227,148260,5);

insert into game("name","number of players","peak","debeloper_id")values("Counter-Strike:Global Offensive",400679,812268,6);

insert into game("name","number of players","peak","developer_id")values("Destiiny2",67551,84563,7);

insert into game("name","number of players","peak","developer_id")values("Dota2",350577,647280,7);

insert into game("name","number of players","peak","developer_id")values("Grand heft Auto V",64366,117872,8);

insert into game("name","number of players","peak","developer_id")values("PUBG:BATTLEGROUNDS",109922,353383,9);

insert into game("name","number of players","peak","developer_id")values("Lost Ark",193462,275284,2);

insert into game("name","number of players","peak","developer_id")values("Team Fortress",127840,137068,1);

insert into game("name","number of players","peak","developer_id")values("Wallpaper Engine",60041,92265,4);



insert into developer("name")values("Value Corporation");
insert into debeloper("name")values("Smilegate");
insert into developer("name")values("Respawn Entertainment");
insert into developer("name")values("Wallpaper Engine Team");
insert into developer("name")values("Studio Wildxcard");
insert into developer("name")values("Valve");
insert into developer("name")value("Bungie");
insert into developer("name")value("Rockstar North");
insert into developer("name")value("KRAFON");
`

db.serialize( () => {
	db.run( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "データを追加しました" );
	});
});

