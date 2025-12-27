const Voucher = require("../models/voucher.model");

exports.partyWiseTotal = async (req, res) => {
  const match = {};
  if (req.query.type) match.VOUCHERTYPENAME = req.query.type;
  if (req.query.party) match.PARTYLEDGERNAME = new RegExp(req.query.party, "i");
  if (req.query.from && req.query.to)
    match.DATE = { $gte: req.query.from, $lte: req.query.to };

  const data = await Voucher.aggregate([
    { $match: match },
    { $addFields: { AMOUNT_NUM: { $toDouble: "$AMOUNT" } } },
    {
      $group: {
        _id: "$PARTYLEDGERNAME",
        totalAmount: { $sum: "$AMOUNT_NUM" },
        voucherCount: { $sum: 1 }
      }
    },
    { $sort: { totalAmount: -1 } }
  ]);

  res.json(data);
};
