export const objectToArray = objects => {
  const arrayObject = [];
  for (const obj in objects) {
    arrayObject.push({
      ...objects[obj],
      id: obj
    });
  }
  return arrayObject;
};
// {key1: {name1: value1, name2: value2}, key2: {name1: value1, name2: value2}}
