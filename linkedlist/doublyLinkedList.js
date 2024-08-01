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
    let newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtEnd(data) {
    let newNode = new ListNode(data, null, this.tail);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  insertAtGivenNodeKey(data, key) {
    let newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    if (this.head.data === key) {
      newNode.next = this.head;
      this.head = newNode;
    }

    let current = this.head;
    while (current) {
      if (current.next.data === key) {
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        newNode.prev = current;
        return;
      }
      current = current.next;
    }
  }

  insertAfterGiveNodeKey(data, key) {
    let newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    let current = this.head;
    while (current) {
      if (current.data === key) {
        let temp = current.next;
        current.next = newNode;
        newNode.prev = current;
        newNode.next = temp;
        return;
      }
      current = current.next;
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

  reversLIst() {
    if (!this.head) return "blaak DLL";
    temp = null;
    let current = this.head;
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = prev;
      current = current.prev;
    }
    this.tail = this.head;
    this.head = temp.prev;
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
myDoublyLinkedList.insertAtbeginning(1);
myDoublyLinkedList.insertAtbeginning(2);
myDoublyLinkedList.insertAtEnd(3);
myDoublyLinkedList.insertAtEnd(4);
myDoublyLinkedList.insertAtEnd(5);
myDoublyLinkedList.insertAtbeginning(6);
console.log(myDoublyLinkedList.printList());
myDoublyLinkedList.insertAtGivenNodeKey(7, 6);
myDoublyLinkedList.insertAfterGiveNodeKey(8, 1);
console.log(myDoublyLinkedList.printList());
myDoublyLinkedList.deleteFromBeginning();
console.log(myDoublyLinkedList.printList());
myDoublyLinkedList.deleteFromEnd();
console.log(myDoublyLinkedList.printList());
