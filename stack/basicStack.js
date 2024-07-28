class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getSize() {
    return this.stack.length;
  }

  print() {
    let stackString = [];
    for (let index = 0; index < this.stack.length; index++) {
      stackString.push(this.stack[index]);
    }
    return stackString.join("->");
  }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

console.log(myStack.print());
console.log(myStack.peek());
console.log(myStack.getSize());

myStack.pop();
console.log(myStack.print());
console.log(myStack.isEmpty());
