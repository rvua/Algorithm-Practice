// Heaps

class MinHeap{
    constructor(){
        this.heap = [null];
    }

    insert(val){
        this.heap.push(val);
        this.shiftUp();
    }

    shiftUp(){
        if(this.heap.length > 2){
            let currentIndex = this.heap.length - 1;

            while(currentIndex > 1 && this.heap[Math.floor(currentIndex/2)] > this.heap[currentIndex]){
                const parentIndex = Math.floor(currentIndex/2);

                let temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[currentIndex];
                this.heap[currentIndex] = temp;

                currentIndex = parentIndex;
            }
        }
    }

    printMe(){
        const [, ...rest] = this.heap;
        console.log(rest);
    }
}

const myHeap = new MinHeap();

myHeap.insert(1);
myHeap.insert(5);
myHeap.printMe();
myHeap.insert(7);
myHeap.insert(9);
myHeap.printMe();
myHeap.insert(3);
myHeap.printMe();
myHeap.insert(4);
myHeap.printMe();
myHeap.insert(-1);
myHeap.printMe();