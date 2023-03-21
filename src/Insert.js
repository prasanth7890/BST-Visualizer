function insert(data, root, cir, count) {
  var current = root;
  var cnt = count;
  let temp = 30;
  while(true) {
    let parent = current;
    
    if(cnt===1 || cnt === 2) { temp = 80} else {temp = 0}
    if(cnt=== 5 || cnt===4) {temp = -10}
    if(cnt===3) {temp = 80}
    if(cnt===6) {temp = 80}
    if(cnt===13 || cnt===8) {temp = -20}
    if(cnt===11 || cnt === 10) {temp = -12}

    if(data < current.n) {
      current = current.leftchild;
      if(current == null) {
        const Node = {
          cx: parent.cx - 65 - temp,
          cy: parent.cy + 100, 
          leftchild: null,
          rightchild: null,
          n: data,
        };
        parent.leftchild = Node;
        const newCir = [...cir, Node]; // create new array with updated node
        return {newCir, cnt}; // set new array as state
      }
    }
    else {
      current = current.rightchild;  
      if(current == null) {
        const Node = {
          cx: parent.cx + 65 + temp,
          cy: parent.cy + 100,
          leftchild: null,
          rightchild: null,
          n: data,
        };
        parent.rightchild = Node;
        const newCir = [...cir, Node]; // create new array with updated node
        return {newCir, cnt}; // set new array as state
      }
    }
  }
}

export default insert;