# Tally MongoDB API Server

## Setup
```bash
npm install
npm run dev
```

## APIs

### Get Vouchers
GET /api/vouchers  
Filters:
- type (Sales, Purchase)
- party (Party Ledger Name)
- from, to (Date range)

### Get Voucher by GUID
GET /api/vouchers/:guid

### Get Ledgers
GET /api/ledgers?name=Cash

### Party Wise Total Amount
GET /api/reports/party-total  
Filters:
- type
- party
- from, to

Returns total bill amount and voucher count per party.
