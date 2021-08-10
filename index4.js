shift () {
    const fitst = this.array[0];

    for(let i=0; i<this.length; i++) {
        this.array[i] = this.array[i +1];

    }
    delete this.array[this.length -1]
    this.length -=1;
    return fitst;
}
/**
 * @papram {function}
 */
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    