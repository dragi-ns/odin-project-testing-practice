function capitalize(string = '') {
  if (!string || string.trim().length < 1) {
    return '';
  }
  return string[0].toUpperCase() + string.slice(1);
}

export default capitalize;
