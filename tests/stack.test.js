"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("../typescript/stack");
test("Queue", function () {
    var arr = [1, 2, 3, 4, 5];
    var s = new stack_1.default();
    s.push(1);
    s.push(2);
    s.push(3);
    s.pop();
    s.pop();
    s.pop();
    s.pop();
    console.log(s);
});
//# sourceMappingURL=stack.test.js.map