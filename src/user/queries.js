// Create fbt_id_main queries
const getFbtIdMain = "SELECT * FROM fbt_id_main;";
const getFbtIdMainById = "SELECT * FROM fbt_id_main WHERE id = $1;";
const addFbtIdMain = "INSERT INTO fbt_id_main (sender, receiver, items, amount, date_loaded) VALUES ($1, $2, $3, $4, $5);";
const deleteFbtIdMain = "DELETE FROM fbt_id_main WHERE id = $1;";
const updateFbtIdMain = "UPDATE fbt_id_main SET sender = $1, receiver = $2, items = $3, amount = $4, date_loaded = $5 WHERE id = $6;";

// Create FBT_TS queries
const getFbtTs = "SELECT * FROM FBT_TS;";
const getFbtTsById = "SELECT * FROM FBT_TS WHERE id = $1;";
const addFbtTs = "INSERT INTO FBT_TS (id, reference_id, date_updated) VALUES ($1, $2, $3);";
const deleteFbtTs = "DELETE FROM FBT_TS WHERE id = $1;";
const updateFbtTs = "UPDATE FBT_TS SET reference_id = $1, date_updated = $2 WHERE id = $3;";

module.exports = {
    getFbtIdMain,
    getFbtIdMainById,
    addFbtIdMain,
    deleteFbtIdMain,
    updateFbtIdMain,
    getFbtTs,
    getFbtTsById,
    addFbtTs,
    deleteFbtTs,
    updateFbtTs,
};
