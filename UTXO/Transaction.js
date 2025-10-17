class Transaction {
  constructor(inputUTXOs, outputTXOs) {
    this.inputUTXOs = inputUTXOs;
    this.outputTXOs = outputTXOs;
  }
  execute() {
    const TotalInputAmount = this.inputUTXOs.reduce((p, c) => {
      return p + c.amount, 0;
    });
    const TotalOutputAmount = this.outputTXOs.reduce((p, c) => {
      return p + c.amount, 0;
    });

    if (this.inputUTXOs.some((x) => x.spent)) {
      throw new Error("Input UTXOs already spent");
    }
    if (TotalInputAmount < TotalOutputAmount) {
      throw new Error("Input amount is less than output amount");
    }
    this.inputUTXOs.forEach((x) => x.spend());
    this.fee = TotalInputAmount - TotalOutputAmount;
  }
}
Module.exports = Transaction;
