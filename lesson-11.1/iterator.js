class Iterator {
    constructor(element) {
        this.index = 0;
        this.keys = Object.keys(element);
        this.elements = element;
    }

    next() {
        return this.elements[this.keys[this.index++]];
    }

    hasNext() {
        return this.index < this.keys.length;
    }
}

const musics = {
    nirvana: {song: 'Some song'},
    acdc: {song: 'Another song'},
    queen: {song: 'Song'},
}

const iterator = new Iterator(musics);

 while(iterator.hasNext()) {
     console.log(iterator.next());
 }