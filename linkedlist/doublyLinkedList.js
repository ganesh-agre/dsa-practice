class ListNode {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtbeginning(data) {
    const newNode = new ListNode(data, this.head, null);
    if (this.head !== null) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
  }

  insertAtEnd(data) {
    let newNode = new ListNode(data, null, this.tail);
    if (this.tail !== null) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (this.head === null) {
      this.head = newNode;
    }
  }

  insertAtGivenNodeKey(data, key) {
    let newNode;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    if (this.head.data === key) {
      newNode = new ListNode(data, this.head, null);
      this.head.prev = newNode;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current) {
      if (current.next.data === key) {
        newNode = new ListNode(data, current.next, current);
        current.next.prev = newNode;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
    return "No such key exists";
  }

  // its logic need to adjust as it always need to think about prev and next of newnode as well as pervious and next node
  insertAfterGiveNodeKey(data, key) {
    let newNode;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    let current = this.head;
    while (current) {
      if (current.data === key) {
        newNode = new ListNode(data, current.next, current);
        if (current.next !== null) {
          current.next.prev = newNode;
        }

        current.next = newNode;
        if (newNode.next === null) {
          this.tail = newNode;
        }
        return;
      }
      current = current.next;
    }
  }

  insertAftergivenNode(pervNode, data) {
    if (!pervNode) return "Please Provide prev node";
    let newNode = new ListNode(data, pervNode.next, pervNode);
    if (pervNode.next !== null) {
      pervNode.next.prev = newNode;
    }
    pervNode.next = newNode;

    if (newNode.next === null) {
      this.tail = newNode;
    }
  }

  deleteFromBeginning() {
    if (!this.head) return "List is empty";
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }

  deleteFromEnd() {
    if (!this.tail) return "List is empty";
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  reverseList() {
    let current = this.head;
    let prev = null;

    while (current != null) {
      //swapping
      prev = current.prev;
      current.prev = current.next;
      current.next = prev;
      //move to next node
      current = current.prev;
    }

    let temp = this.tail;
    this.tail = this.head;
    this.head = temp;
  }

  printList() {
    if (!this.head) return "List is empty!";
    let current = this.head;
    let values = [];
    while (current) {
      values.push(current.data);
      current = current.next;
    }
    return values.join("->");
  }
}

let myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.insertAtEnd(3);
myDoublyLinkedList.insertAtEnd(4);
myDoublyLinkedList.insertAtEnd(5);
myDoublyLinkedList.insertAtbeginning(6);
myDoublyLinkedList.insertAtbeginning(7);
myDoublyLinkedList.insertAftergivenNode(
  myDoublyLinkedList.head.next.next.next.next,
  8
);
myDoublyLinkedList.insertAtGivenNodeKey(9, 8);
myDoublyLinkedList.insertAfterGiveNodeKey(10, 8);
myDoublyLinkedList.deleteFromBeginning();
console.log(myDoublyLinkedList.printList());
//myDoublyLinkedList.deleteFromEnd();
console.log(myDoublyLinkedList.printList());
myDoublyLinkedList.reverseList();
console.log(myDoublyLinkedList.printList());
