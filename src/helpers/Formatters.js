export const stringToCurrency = (value) => {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 6,
      });
      
    return formatter.format(value);
};
