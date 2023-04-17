const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {


    constructor() {
        this.rootElem = null;
    }

    root() {
        return this.rootElem;
    }

    add(data) {
        if (this.rootElem == null) {
            this.rootElem = new Node(data);
        } else {
            let cur = this.rootElem;
            let prev = null;
            while (cur != null) {
                prev = cur;
                if (data > cur.data) {
                    cur = cur.right;
                } else {
                    cur = cur.left;
                }
            }
            if (data > prev.data) {
                prev.right = new Node(data);
            } else {
                prev.left = new Node(data);
            }
        }
    }

    has(data) {
        if (this.rootElem == null) {
            return false;
        }
        let cur = this.rootElem;
        while (cur != null) {
            if (cur.data === data) {
                return true;
            } else if (data > cur.data) {
                cur = cur.right;
            } else {
                cur = cur.left;
            }
        }
        return false;
    }

    find(data) {
        if (this.rootElem == null) {
            return null;
        }
        let cur = this.rootElem;
        while (cur != null) {
            if (cur.data === data) {
                return cur;
            } else if (data > cur.data) {
                cur = cur.right;
            } else {
                cur = cur.left;
            }
        }
        return null;
    }

    remove(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    min() {
        if (this.rootElem == null) {
            return null;
        }
        let cur = this.rootElem;
        while (cur.left != null) {
            cur = cur.left;
        }
        return cur.data;
    }

    max() {
        if (this.rootElem == null) {
            return null;
        }
        let cur = this.rootElem;
        while (cur.right != null) {
            cur = cur.right;
        }
        return cur.data;
    }
}

module.exports = {
    BinarySearchTree
};