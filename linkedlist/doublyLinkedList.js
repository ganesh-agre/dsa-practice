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
    let newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    if (!this.head.next) {
      this.head.next = newNode;
      newNode.prev = this.head;
      this.tail = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    newNode.prev = current;
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

  printList() {
    if (!this.head) return "Lis is empty!";
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
