const stocks = [
  { ticker: 'NVDA' },
  { ticker: 'TSLA' },
  { ticker: 'GME' },
  { ticker: 'AMC' },
  { ticker: 'BTC' },
  { ticker: 'MSFT' },
  { ticker: 'AMZN' },
  { ticker: 'PYPL' },
];

module.exports = {
  getAll: function () {
    return stocks;
  },
};
