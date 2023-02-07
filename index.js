import DynamicClass from "./src/DynamicClass.js";

(() => {
  new DynamicClass("ClassOne");
  new DynamicClass("ClassTwo", "dave");
})();
