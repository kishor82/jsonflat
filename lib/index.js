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

const jsonflat = {
  flat,
};

export default jsonflat;
