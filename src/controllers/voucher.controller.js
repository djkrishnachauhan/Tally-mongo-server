const Voucher = require("../models/voucher.model");

exports.getVouchers = async (req, res) => {
  const q = {};
  if (req.query.type) q.VOUCHERTYPENAME = req.query.type;
  if (req.query.party) q.PARTYLEDGERNAME = new RegExp(req.query.party, "i");
  if (req.query.from && req.query.to)
    q.DATE = { $gte: req.query.from, $lte: req.query.to };

  const data = await Voucher.find(q).limit(1000);
  res.json(data);
};

exports.getVoucherByGuid = async (req, res) => {
  const v = await Voucher.findOne({ GUID: req.params.guid });
  res.json(v);
};
