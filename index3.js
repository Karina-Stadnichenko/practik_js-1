class Queue {
    constructor () {
        // console.log(arguments);
        
        this.room ={};
    for (let i = 0 ; i < arguments.length; i++);{
    const element = arguments[i]
    this.room[i] = element;
}
    this.push(element)
    this
    
    this.end = arguments.length
    this.head = 0;
}
    push (element) {
        this.room[this.end++] = element;
    }
shift () {
    if (this.end ===this.head)
    return undefined
    const element = this.room[this.head];
    delete this.queue[this.head++];
    
    return element; 
}

}

const queue = new Queue(1,2,3,4)