"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maxHeap_1 = require("../typescript/maxHeap");
test("MaxHeap", function () {
    var maxHeap = new maxHeap_1.default();
    maxHeap.push(9);
    maxHeap.push(10);
    maxHeap.push(12);
    maxHeap.push(6);
    maxHeap.push(4);
    maxHeap.push(5);
    expect(maxHeap.peek()).toBe(12);
    expect(maxHeap.pop()).toBe(12);
    expect(maxHeap.peek()).toBe(10);
    maxHeap.pop();
    maxHeap.pop();
    expect(maxHeap.peek()).toBe(6);
    console.log(maxHeap.container);
    maxHeap.pop();
    console.log(maxHeap.container);
    expect(maxHeap.peek()).toBe(5);
    maxHeap.pop();
    console.log(maxHeap.container);
    expect(maxHeap.peek()).toBe(4);
    maxHeap.pop();
    expect(maxHeap.peek()).toBe(undefined);
    console.log(maxHeap.container);
});
//# sourceMappingURL=maxHeap.test.js.map