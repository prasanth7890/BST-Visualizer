function deleteNode(data, root, cir) {
    let current = root;
    let parent = null;
    let found = false;
  
    // search for the node to be deleted
    while (current != null) {
      if (current.n === data) {
        found = true;
        break;
      }
      parent = current;
      if (data < current.n) {
        current = current.leftchild;
      } else {
        current = current.rightchild;
      }
    }
  
    // if node is not found
    if (!found) {
      console.log("Node not found");
      return;
    }
  
    // Case 1: Deleting a node with no children (leaf node)
    if (current.leftchild === null && current.rightchild === null) {
      if (current !== root) {
        if (parent.leftchild === current) {
          parent.leftchild = null;
        } else {
          parent.rightchild = null;
        }
      } else {
        root = null;
      }
      // update the state with the new circle array
      const newCir = cir.filter((node) => node.n !== current.n);
      return newCir;
    }
  
    // Case 2: Deleting a node with one child
    if (current.leftchild === null || current.rightchild === null) {
      let child = null;
      if (current.leftchild !== null) {
        child = current.leftchild;
      } else {
        child = current.rightchild;
      }
  
      if (current !== root) {
        if (current === parent.leftchild) {
          parent.leftchild = child;
        } else {
          parent.rightchild = child;
        }
      } else {
        root = child;
      }
      // update the state with the new circle array
      const newCir = cir.filter((node) => node.n !== current.n);
      return newCir;
    }
  
    // Case 3: Deleting a node with two children
    let temp = current.rightchild;
    while (temp.leftchild !== null) {
      temp = temp.leftchild;
    }
    const newvalue = temp.n;
    const tempcir = deleteNode(temp.n, root, cir);
    current.n = newvalue;
    console.log(tempcir);
    // update the state with the new circle array
    const newCir = cir.filter((node) => node.n !== current.n);
    // return newCir;
    return tempcir; 
  }
  
  export default deleteNode;

  