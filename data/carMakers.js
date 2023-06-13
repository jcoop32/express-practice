const cars = [
  { make: 'Tesla' },
  { make: 'Ford' },
  { make: 'GM' },
  { make: 'Rivian' },
  { make: 'Lucid' },
  { make: 'Audi' },
  { make: 'Mercedes' },
];

module.exports = {
  getAll: function () {
    return cars;
  },
};
