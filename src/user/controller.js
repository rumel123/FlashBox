const pool = require('../../db');
const queries = require('./queries');

// Handlers for fbt_id_main
const getFbtIdMain = (req, res) => {
    pool.query(queries.getFbtIdMain, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getFbtIdMainById = (req, res) => {
    const id = req.params.id;
    pool.query(queries.getFbtIdMainById, [id], (error, results) => {
        if (error) throw error;
        if (results.rowCount == 0) {
            res.status(404).send("Profile Not Found.");
        } else {
            res.status(200).json(results.rows);
        }
    });
};

const addFbtIdMain = (req, res) => {
    const { sender, receiver, items, amount, date_loaded } = req.body;
    pool.query(queries.addFbtIdMain, [sender, receiver, items, amount, date_loaded], (error, results) => {
        if (error) throw error;
        res.status(201).send("Record created successfully");
    });
};

const updateFbtIdMain = (req, res) => {
    const id = req.params.id;
    const { sender, receiver, items, amount, date_loaded } = req.body;
    pool.query(queries.getFbtIdMainById, [id], (error, results) => {
        if (results.rowCount == 0) {
            res.status(404).send("Profile Not Found.");
        } else {
            pool.query(queries.updateFbtIdMain, [sender, receiver, items, amount, date_loaded, id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Record updated successfully");
            });
        }
    });
};

const deleteFbtIdMain = (req, res) => {
    const id = req.params.id;
    pool.query(queries.getFbtIdMainById, [id], (error, results) => {
        if (results.rowCount == 0) {
            res.status(404).send("Profile Not Found.");
        } else {
            pool.query(queries.deleteFbtIdMain, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Record deleted successfully");
            });
        }
    });
};

// Handlers for FBT_TS
const getAllFbtTs = (req, res) => {
    pool.query(queries.getFbtTs, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getFbtTsById = (req, res) => {
    const id = req.params.id;
    pool.query(queries.getFbtTsById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addFbtTs = (req, res) => {
    const { id, reference_id, date_updated } = req.body;
    pool.query(queries.addFbtTs, [id, reference_id, date_updated], (error, results) => {
        if (error) throw error;
        res.status(201).send("Tracking status added successfully");
    });
};

const updateFbtTs = (req, res) => {
    const id = req.params.id;
    const { reference_id, date_updated } = req.body;
    pool.query(queries.updateFbtTs, [reference_id, date_updated, id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Tracking status updated successfully");
    });
};

const deleteFbtTs = (req, res) => {
    const id = req.params.id;
    pool.query(queries.deleteFbtTs, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Tracking status deleted successfully");
    });
};

module.exports = {
    getFbtIdMain,
    getFbtIdMainById,
    addFbtIdMain,
    deleteFbtIdMain,
    updateFbtIdMain,
    getAllFbtTs,
    getFbtTsById,
    addFbtTs,
    updateFbtTs,
    deleteFbtTs,
};
