import { ClassOne } from "./src/package/ClassOne.js";
import { ClassTwo } from "./src/package/ClassTwo.js";

const classes = {
  ClassOne,
  ClassTwo,
};

class DynamicClass {
  constructor(className, opts) {
    return new classes[className](opts);
  }
}

export default DynamicClass;
