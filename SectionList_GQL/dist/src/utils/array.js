"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeMember = void 0;
function removeMember(member, arr) {
    const index = arr.indexOf(member);
    if (index > -1) {
        // only splice array when item is found
        arr.splice(index, 1); // 2nd parameter means remove one item only
    }
    return arr;
}
exports.removeMember = removeMember;
