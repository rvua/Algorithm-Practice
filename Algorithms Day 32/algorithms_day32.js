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

    height(rootNode) {
        if(rootNode == null) {
            return 0;
          }
        else {
          var left = this.height(rootNode.left);
          var right = this.height(rootNode.right);
        if (left > right) {
            return left + 1;
        }
          else {
            return right + 1;
          }
        }
      }

      size(node) {
          if(node == null) return 0;
              
          else return (this.size(node.left) + 1 + this.size(node.right));
            
              //results = (this.size(node.left) + 1 + this.size(node.right));
              //console.log(results);
    }
}
  
  let newBST = new BST();
  newBST.add(35);
  newBST.add(2);
  newBST.add(52);
  newBST.add(57);
  newBST.add(11);
  newBST.add(7);
  newBST.add(74);
  newBST.add(45);
  console.log(newBST.height(newBST.root));
  console.log(newBST.size(newBST.root)); 
  newBST.printTree(newBST.root);
  newBST.findMin(newBST.root);
  newBST.findMax(newBST.root);
  // newBST.findMin(newBST.root);
  // newBST.findMax(newBST.root);