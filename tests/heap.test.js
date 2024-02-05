"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var heap_1 = require("../typescript/heap");
test("MinHeap", function () {
    var heap = new heap_1.default();
    heap.insert(25);
    heap.insert(13);
    heap.insert(12);
    heap.insert(28);
    heap.insert(3);
    heap.insert(11);
    expect(heap.peek()).toBe(3);
    expect(heap.delete()).toBe(3);
    expect(heap.peek()).toBe(11);
    expect(heap.delete()).toBe(11);
    expect(heap.peek()).toBe(12);
    expect(heap.delete()).toBe(12);
    expect(heap.peek()).toBe(13);
    expect(heap.delete()).toBe(13);
    expect(heap.peek()).toBe(25);
    expect(heap.delete()).toBe(25);
    expect(heap.peek()).toBe(28);
    heap.insert(24);
    expect(heap.peek()).toBe(24);
    console.log(heap.store);
});
//# sourceMappingURL=heap.test.js.map