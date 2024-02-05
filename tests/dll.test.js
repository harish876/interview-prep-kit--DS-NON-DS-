"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var doublyLinkedList_1 = require("../typescript/doublyLinkedList");
test("Test DLL", function () {
    var dll = new doublyLinkedList_1.default();
    dll.append(1);
    dll.append(2);
    dll.prepend(0);
    //[0,1,4,2]
    dll.insertAt(2, 4);
    console.log(dll);
});
//# sourceMappingURL=dll.test.js.map