const util = require('util')
const mysql = require('mysql')
const db = require('./DbConext')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM movie'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response )
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM movie WHERE id = ?'
        db.query(sql, [req.params.Id], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let Id = req.params.Id;
        let sql = 'UPDATE movie SET ? WHERE id = ?'
        db.query(sql, [data, Id], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        console.log(data)
        let sql = 'INSERT INTO movie SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM movie WHERE id = ?'
        db.query(sql, [req.params.Id], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}