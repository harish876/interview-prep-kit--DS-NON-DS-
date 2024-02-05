"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quicksort_1 = require("../typescript/quicksort");
test("Quick Sort", function () {
    var arr = [8, 5, 10, 1, 3];
    var expected = arr.sort();
    (0, quicksort_1.default)(arr);
    expect(arr).toEqual(expected);
});
//# sourceMappingURL=quicksort.test.js.map