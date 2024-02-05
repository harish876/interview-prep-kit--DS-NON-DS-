"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var queue_1 = require("../typescript/queue");
test("Queue", function () {
    var arr = [1, 2, 3, 4, 5];
    var q = new queue_1.default();
    q.enqueue(arr[0]);
    q.enqueue(arr[1]);
    q.deque();
    q.deque();
    q.deque();
    console.log(q);
});
//# sourceMappingURL=queue.test.js.map