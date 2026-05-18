class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    append(value) {
        const node = new Node(value)
        if(!this.head){
            this.head=node
            return
        }

        let current = this.head;
        while (current.next !== null) {
        current = current.next;
    }
    current.next = node;

    }

    prepend(value){
       const node = new Node(value, this.head)
       this.head = node
    }


    size(){
        let i =0
        let current = this.head;
        while (current.next !== null) {
        current = current.next;
        i++
            return "length is "+i
    }
}


    gethead(){
        if(this.head === null){
            return "undefined"
        }
        
        let value = this.head
        return value

        
    }

    tail(){

        if(this.head === null){
            return "undefined"
        }

        let current = this.head;
        while (current.next !== null) {
        current = current.next;

    }
    return current
}




    atIndex(i){
        let k = 0
        let current = this.head;
        while (k !== i) {
        
        current = current.next;
        if(current == null){
        return "undefined"
    }
        k++

    }

    
    return current
    }
    

 pop(){
    // 1. If the list is empty, there's nothing to pop
    if (!this.head) return null;

    // 2. If there is only one node, clear the list
    if (this.head.next === null) {
      const removedNode = this.head;
      this.head = null;
      return removedNode;
    }

    // 3. Otherwise, traverse until we find the second-to-last node
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }

    // Save the last node to return it (optional), then sever the link
    const lastNode = current.next;
    current.next = null;
 }

    contains(value){
        let current = this.head;
        while (current !== null) {
        
            if(current === value){
                return true
            }
            current = current.next;
    }
    return false

}


findIndex(value){
    k=0
    let current = this.head;
        while (current !== null) {
            if(current == null){
                return "k"
            }
        current = current.next;
        k++
            
    }
    return -1
}



    toString() {
    let parts = [];
    let current = this.head;
    while (current !== null) {
        parts.push(`( ${current.value} )`);   // ← was current (the object)
        current = current.next;
    }
    return parts.join(" => ") + " => null";
}
}



// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

