const DBMigrate = require('db-migrate');
const dbm = DBMigrate.getInstance(true);
console.log("start migrations");
dbm.registerAPIHook()
    .then(function() {
        dbm.up()
            .then(() => {
                console.log( 'finish migrations!' );
            });
    });
