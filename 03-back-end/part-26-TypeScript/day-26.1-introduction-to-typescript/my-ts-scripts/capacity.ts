const units = ['kl', 'hl', 'lh', 'dal', 'l', 'dl', 'cl', 'ml'];

function convertTo(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
}

convertTo(1, 'l', 'ml');