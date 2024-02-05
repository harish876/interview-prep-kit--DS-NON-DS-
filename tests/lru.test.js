"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lruCache_1 = require("../typescript/lruCache");
test("LRU", function () {
    var lru = new lruCache_1.default(3);
    expect(lru.get("foo")).toEqual(undefined);
    lru.update("foo", 69);
    expect(lru.get("foo")).toEqual(69);
    lru.update("bar", 420);
    expect(lru.get("bar")).toEqual(420);
    lru.update("baz", 1337);
    expect(lru.get("baz")).toEqual(1337);
    lru.update("ball", 69420);
    expect(lru.get("ball")).toEqual(69420);
    expect(lru.get("foo")).toEqual(undefined);
    expect(lru.get("bar")).toEqual(420);
    lru.update("foo", 69);
    expect(lru.get("baz")).toEqual(undefined);
});
// foo<->ball<->baz
//# sourceMappingURL=lru.test.js.map