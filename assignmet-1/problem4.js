function unflatten(flatObject) {
  // Write your code here
  let result = {};

  for (let key in flatObject) {
    let parts = key.split(".");
    let current = result;

    for (let i = 0; i < parts.length; i++) {
      let part = parts[i];
      let nextPart = parts[i + 1];

      // last key
      if (i === parts.length - 1) {
        current[part] = flatObject[key];
      } else {
        if (current[part] === undefined) {
          // decide array or object
          if (!isNaN(nextPart)) {
            current[part] = [];
          } else {
            current[part] = {};
          }
        }
        current = current[part];
      }
    }
  }

  return result;
}