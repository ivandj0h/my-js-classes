import { ClassOne } from "./package/ClassOne.js";
import { ClassTwo } from "./package/ClassTwo.js";

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
