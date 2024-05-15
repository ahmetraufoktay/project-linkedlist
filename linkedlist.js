class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.listHead = null;
  }
  prepend(value) {
    let temp = null;
    if (this.listHead !== null) temp = this.listHead;
    this.listHead = new Node(value);
    this.listHead.next = temp;
  }
  append(value) {
    if (this.listHead === null) this.prepend(value);
    else {
      let temp = this.listHead;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = new Node(value);
    }
  }
  size() {
    let temp = this.listHead;
    let counter = 0;
    while (temp != null) {
      counter++;
      temp = temp.next;
    }
    console.log(counter);
  }
  head() {
    console.log(this.listHead);
  }
  tail() {
    let temp = this.listHead;
    while (temp.next != null) {
      temp = temp.next;
    }
    console.log(temp);
  }
  at(index) {
    let temp = this.listHead;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    console.log(temp);
  }
  pop() {
    let temp = this.listHead;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = null;
  }
  contains(value) {
    let temp = this.listHead;
    while (temp != null && temp.value != value) {
      temp = temp.next;
    }
    if (temp == null) console.log(false);
    else console.log(true);
  }
  toString() {
    let string = "";
    let temp = this.listHead;
    while (temp != null) {
      string += `( ${temp.value} ) -> `;
      temp = temp.next;
    }
    string += "null";
    console.log(string);
  }
}

const newLinkedList = new LinkedList();
