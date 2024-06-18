function solution(nodeinfo) {
    const pre = [];
    const post = [];
    const length = nodeinfo.length;
    
    class Node {
        constructor(x, y, num) {
            this.num = num;
            this.x = x;
            this.y = y;
            this.left = null;
            this.right = null;
        }
    }
    
    class Tree {
        constructror() {
            this.root = null;
            this.size = 0;
        }
        
        compareNode(p, sign, q) {
            if (sign === '<') {
                return p.x < q.x;
            } else if (sign === '>') {
                return p.x > q.x;
            } else {
                throw error;
            }
        }
        
        insert(newNode) {
            if (!this.root) {
                this.root = newNode;
                return;
            }
            
            let node = this.root;
            
            while (node) {
                if (this.compareNode(node, '>', newNode)) {
                    if (node.left) {
                        node = node.left;
                    } else {
                        node.left = newNode;
                        return;
                    }
                } else {
                    if (node.right) {
                        node = node.right;
                    } else {
                        node.right = newNode;
                        return;
                    }
                }
            }
        }
         
        preorder(node, list) {
            if (!node) return;
            
            list.push(node.num);
            this.preorder(node.left, list);
            this.preorder(node.right, list);
        }
        
        postorder(node, list) {
            if (!node) return;
            
            this.postorder(node.left, list);
            this.postorder(node.right, list);
            list.push(node.num);
        }
    }
    
    const nodeList = nodeinfo.map((info, i) => new Node(...info, i + 1));
    nodeList.sort((a, b) => a.y === b.y ? a.x - b.x : b.y - a.y);

    const tree = new Tree();
    const preorder = [];
    const postorder = [];
    
    for (let node of nodeList) {
        tree.insert(node);
    }
    
    tree.preorder(tree.root, preorder);
    tree.postorder(tree.root, postorder);

    return [preorder, postorder];
}