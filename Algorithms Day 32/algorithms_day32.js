// Binary Search Algorithm

class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }

    // Inserts a value into the tree
    // positioning based on it's value.
    add(value) {
        let newNode = new BSTNode(value);
        if(this.root === null) {
            this.root = newNode;
        } else {
            var runner = this.root;
            while(runner != null) {
                if(runner.value > value) {
                    if(runner.left === null) {
                        runner.left = newNode;
                        return;
                    } else {
                        runner = runner.left;
                    }
                } else if(runner.value < value) {
                    if(runner.right === null) {
                        runner.right = newNode;
                        return;
                    } else {
                        runner = runner.right;
                    }
                } else {
                    console.log("This Value already exists in the BST!");
                    return;
                }
            }
        }
    }

    
    findMin() {
        var runner = this.root;
        while(runner.left != null){
            runner = runner.left;
            // keep moving if theres data
        }
        return runner.value;
    }

    findMax() {
        // same thing only that now it moves in the opposite direction
        var runner = this.root;
        while(runner.right != null) {
            runner = runner.right;
        }
        return runner.value;
    }

    printTree(node) {
        console.log("Current node = ", node.value);
        if (node.left != null) {
            console.log("Left node of ", node.value, " = " + node.left.value);
            this.printTree(node.left);
        }
        if (node.right != null) {
            console.log("Right node of ", node.value, " = " + node.right.value);
            this.printTree(node.right);
        }
    }
}

let newBST = new BST();
newBST.add(35);
newBST.add(5);
newBST.add(25);
newBST.add(55);
newBST.add(15);
newBST.printTree(newBST.root);
newBST.findMin(newBST.root);
newBST.findMax(newBST.root);