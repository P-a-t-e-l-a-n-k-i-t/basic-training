function flatten(unflatObject) {
  // Write your code here
   let result = {};

  function helper(obj, parentKey) {
    for (let key in obj) {
      let newKey = parentKey ? parentKey + "." + key : key;

      if (typeof obj[key] === "object" && obj[key] !== null) {
        helper(obj[key], newKey);
      } else {
        result[newKey] = obj[key];
      }
    }
  }

  helper(unflatObject, "");
  return result;
}