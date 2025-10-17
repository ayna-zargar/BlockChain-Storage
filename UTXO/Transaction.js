class Transaction {
  constructor(inputUTXOs, outputTXOs) {
    this.inputUTXOs = inputUTXOs;
    this.outputTXOs = outputTXOs;
  }
  execute() {
    if (this.inputUTXOs.some((x) => x.spent)) {
      throw new Error("Input UTXOs already spent");
    }
  }
}
