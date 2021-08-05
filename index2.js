class Cat {
    constructor(mustache, tail, paws, fur) {
        this.mustache = mustache;
        this.tail = tail; 
        this.paws = paws;
        this.fur = fur;

    }


sayPurr() {
    return 'Purr';
}


sayMeow() {
    return 'Meow';
}
}

class Lion extends Cat {
    constructor(mustache, tail, paws, fur, mane) {
        super (mustache, tail, paws, fur)
        this.mane = mane;
    }
    sayMeow() {
        return "Rrrrr"
    }
}

class Password {
    constructor(pass) {
        this.pass = pass;
        this.hasPassShow = false;
    }

    get showPassword() {
        if (this.hasPassShow === false) {
            this.hasPassShow = true; 
        return this.pass;
    }
    return null;
}
}