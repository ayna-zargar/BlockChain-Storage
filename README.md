# UTXO Transaction Simulator

A simple Node.js project to simulate **UTXO (Unspent Transaction Output) based transactions**, inspired by how Bitcoin handles transactions. This project focuses on understanding blockchain fundamentals such as transaction inputs, outputs, and spending mechanisms.

---

## How It Works

- The project defines **two classes**:
  1. **TXO**: Represents a single output with an owner, amount, and spent status.
  2. **Transaction**: Takes input TXOs and output TXOs, validates the transaction, marks inputs as spent, and calculates transaction fees.

- Transaction execution rules:
  - Input TXOs cannot already be spent.
  - Total input amount must be equal to or greater than total output amount.
  - Any remaining amount is treated as a transaction fee.

---

## Usage

```javascript
const TXO = require("./TXO");
const Transaction = require("./Transaction");

// Create some unspent outputs
const txo1 = new TXO("Alice", 50);
const txo2 = new TXO("Alice", 30);

// Create outputs for the transaction
const output1 = new TXO("Bob", 60);
const output2 = new TXO("Alice", 15);

// Execute the transaction
const tx = new Transaction([txo1, txo2], [output1, output2]);
tx.execute();

console.log("Transaction fee:", tx.fee); // 5
console.log("Inputs spent:", txo1.spent, txo2.spent); // true, true
