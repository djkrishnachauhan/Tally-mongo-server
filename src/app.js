const express = require("express");
const cors = require("cors");

const voucherRoutes = require("./routes/voucher.routes");
const ledgerRoutes = require("./routes/ledger.routes");
const reportRoutes = require("./routes/report.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/vouchers", voucherRoutes);
app.use("/api/ledgers", ledgerRoutes);
app.use("/api/reports", reportRoutes);

module.exports = app;
