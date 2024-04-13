export const flat = (data, parentKey) => {
  return Object.keys(data).reduce((flatten, key) => {
    const objectKey = parentKey ? `${parentKey}->${key}` : key;
    const value = data[key];

    if (value && typeof value === "object") {
      return {
        ...flatten,
        ...flat(value, objectKey),
      };
    }

    return {
      ...flatten,
      [objectKey]: value,
    };
  }, {});
};
