const mongoose = require("mongoose");
const VoucherSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model("Voucher", VoucherSchema, "VOUCHERS");
