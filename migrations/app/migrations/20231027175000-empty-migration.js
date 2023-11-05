'use strict';

var dbm;
var type;
var seed;
var fs = require('fs');
var path = require('path');
var Promise;


exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
    Promise = options.Promise;
};

exports.up = function (db) {
    var filePath = path.join(__dirname, 'sqls', '20231027175000-up.sql')
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
            if (err) return reject(err)
            console.log('recieved data: ' + data);
            resolve(data);
        });
    }).then((data) => {
        return db.runSql(data)
    })
};

exports.down = function (db) {
    var filePath = path.join(__dirname, 'sqls', '20231027175000-down.sql')
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
            if (err) return reject(err)
            console.log('recieved data: ' + data);
            resolve(data);
        });
    }).then((data) => {
        return db.runSql(data)
    })
};

exports._meta = {
    "version": 1
}; up