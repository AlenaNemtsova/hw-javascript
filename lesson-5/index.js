class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(maxSize = 10) {
        if (typeof maxSize !== 'number' || maxSize < 0) {
            throw new Error('Stack size is invalid number');
        }

        this.maxSize = maxSize;
        this.top = null;
        this.size = 0;
    }

    push(value) {
        if (this.size >= this.maxSize) {
            throw new Error('The stack if full');
        }

        const newNode = new Node(value);

        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (!this.top) {
            throw new Error('The stack if empty');
        }

        const removedNode = this.top;

        this.top = this.top.next;
        this.size--;

        return removedNode.value;
    }

    peek() {
        return this.top ? this.top.value : null;
    }

    isEmpty() {
        return this.size === 0;
    }

    toArray() {
        const arrayFromStack = [];
        const elem = this.top;
        const getArray = (data) => {
            if (data instanceof Object) {
                Object.values(data).flatMap(getArray);
                arrayFromStack.push(data);
            }
        }

        getArray(elem);

        return arrayFromStack;
    }

    static fromIterable(iterable) {
        if (typeof iterable[Symbol.iterator] !== 'function') {
            throw new Error('The entity is not iterable');
        }

        const newStack = new Stack(iterable.length);

        for (const item of iterable) {
            newStack.push(item);
        }

        return newStack;
    }
}


const stack = new Stack(4);

stack.push(1);
stack.push(2);
stack.pop();
stack.peek();
stack.toArray();

const iterable = Stack.fromIterable(['a', 'b', 'c']);
const stack2 = new Stack(-10);