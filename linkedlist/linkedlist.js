class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(data) {
    let newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtEnd(data) {
    let newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertAtGivenKey(key, data) {
    let newNode = new ListNode(data);
    if (!this.head) {
      return "Linked List ios empty";
    }

    if (this.head.data === key) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current) {
      if (current.next.data === key) {
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        return;
      }
      current = current.next;
    }
    return "No node found with given key";
  }

  insertAfterGivenKey(key, data) {
    let newNode = new ListNode(data);
    if (!this.head) {
      return "Linked List ios empty";
    }

    let current = this.head;

    while (current) {
      if (current.data === key) {
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        return;
      }
      current = current.next;
    }
    return "No node found with given key";
  }

  insertAfterGiveNode(pervNode, data) {
    if (!pervNode) return "please provide prev node";
    let newNode = new ListNode(data, pervNode.next);
    pervNode.next = newNode;
  }

  deleteFromBeginning() {
    if (!this.head) return "Empty List";
    this.head = this.head.next;
  }

  deleteFromEnd() {
    if (!this.head) return "Empty List";
    if (!this.head.next) {
      // means only one node exist
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
  }

  deleteByKey(key) {
    if (!this.head) return "Empty List";
    if (this.head.data === key) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;

    while (current) {
      if (current.next.data === key) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  reverseList() {
    if (!this.head) return "List is empty!";
    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  printList() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result.join("->");
  }
}

let myList = new LinkedList();
myList.insertAtBeginning(1);
myList.insertAtEnd(2);
console.log(myList.printList());
myList.insertAtGivenKey(1, 3);
console.log(myList.printList());
myList.insertAfterGivenKey(1, 4);
console.log(myList.printList());
myList.insertAfterGiveNode(myList.head.next, 1.5);
console.log(myList.printList());
/*myList.deleteFromBeginning();
console.log(myList.printList());
myList.deleteFromEnd();
console.log(myList.printList());
myList.deleteByKey(4);*/
myList.reverseList();
console.log(myList.printList());
