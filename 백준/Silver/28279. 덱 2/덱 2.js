const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
let answer = '';

class Node {
    constructor(x) {
        this.value = x;
        this.prev = null;
        this.next = null;
    }
}

class Deck {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    isEmpty() {
        return this.size === 0;
    }
    
    pushFront(x) {
        const newNode = new Node(x);
        
        if (this.isEmpty()) {
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
        }
        
        this.head = newNode;
        this.size++;
    }
    
    pushBack(x) {
        const newNode = new Node(x);
        
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
        }
        
        this.tail = newNode;
        this.size++;
    }
    
    popFront() {
        if (this.isEmpty()) {
            return undefined;
        } else if (this.size === 1) {
            const value = this.head.value;
            
            this.head = null;
            this.tail = null;
            this.size--;
            
            return value;
        } else {
            const value = this.head.value;
            
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
            
            return value;
        }
    }
    
    popBack() {
        if (this.isEmpty()) {
            return undefined;
        } else if (this.size === 1) {
            const value = this.tail.value;
            
            this.head = null;
            this.tail = null;
            this.size--;
            
            return value;
        } else {
            const value = this.tail.value;
            
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
            
            return value;
        }
    }
}

const deck = new Deck();

for (let i = 1; i <= N; i++) {
    const [action, x] = input[i].split(' ').map(Number);
    
    if (action === 1) {
        deck.pushFront(x);
    } else if (action === 2) {
        deck.pushBack(x);
    } else if (action === 3) {
        answer += `${deck.isEmpty() ? -1 : deck.popFront()}\n`;
    } else if (action === 4) {
        answer += `${deck.isEmpty() ? -1 : deck.popBack()}\n`;
    } else if (action === 5) {
        answer += `${deck.size}\n`;
    } else if (action === 6) {
        answer += `${deck.isEmpty() ? 1 : 0}\n`;
    } else if (action === 7) {
        answer += `${deck.isEmpty() ? -1 : deck.head.value}\n`;
    } else if (action === 8) {
        answer += `${deck.isEmpty() ? -1 : deck.tail.value}\n`;
    }
}

console.log(answer);