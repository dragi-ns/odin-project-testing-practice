function calculateAverage(array) {
  return array.reduce((prev, curr) => prev + curr, 0) / array.length;
}

function getMinValue(array) {
  return array.sort()[0];
}

function getMaxValue(array) {
  return array.sort()[array.length - 1];
}

function analyzeArray(array = []) {
  const isEmpty = array.length === 0;
  const arrayCopy = array.slice(0);
  return {
    average: isEmpty ? 0 : calculateAverage(arrayCopy),
    min: isEmpty ? 0 : getMinValue(arrayCopy),
    max: isEmpty ? 0 : getMaxValue(arrayCopy),
    length: array.length,
  };
}

export default analyzeArray;
