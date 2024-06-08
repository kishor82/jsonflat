const flat = (data, delimeter = ".", parentKey) => {
  return Object.keys(data).reduce((flattenedObject, key) => {
    const objectKey = parentKey ? `${parentKey}${delimeter}${key}` : key;
    const value = data[key];

    if (value && typeof value === "object") {
      return {
        ...flattenedObject,
        ...flat(value, delimeter, objectKey),
      };
    }

    return {
      ...flattenedObject,
      [objectKey]: value,
    };
  }, {});
};

const unflat = (data, delimiter = ".") => {
  return Object.keys(data).reduce((unflattenedObject, key) => {
    const keys = key.split(delimiter);
    keys.reduce((acc, k, i) => {
      if (i === keys.length - 1) {
        acc[k] = data[key];
      } else {
        acc[k] = acc[k] || {};
      }
      return acc[k];
    }, unflattenedObject);
    return unflattenedObject;
  }, {});
};

const jsonflat = {
  flat,
  unflat,
};

export default jsonflat;
