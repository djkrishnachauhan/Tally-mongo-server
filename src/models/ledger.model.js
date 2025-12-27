const mongoose = require("mongoose");
const LedgerSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model("Ledger", LedgerSchema, "LEDGERS");
