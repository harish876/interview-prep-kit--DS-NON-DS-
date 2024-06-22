class Demo {
    constructor(counter) {
        this.counter = counter;
    }

    setMe() {
        this.counter.count += 1;
    }
}

function createAndCount() {
    const objs = [];
    const counter = {
        count: 0
    };
    for (let i = 0; i < 100000; i++) {
        for (let demo = 0; demo < 1000; demo++) {
            const currBoom = objs[objs.push(new Demo(counter)) - 1];
            currBoom.setMe();
        }
        objs.length = 0;
    }

    console.log(`Counter is: ${counter.count}`);
}

function createAndCountV1() {
    const counter = {
        count: 0
    };
    const objs = new Array(1000).fill(null).map(new Demo(counter));
    
    for (let i = 0; i < 1000; i++) {
        for (let demo = 0; demo < 1000; demo++) {
            const currBoom = objs[demo];
            currBoom.setMe();
        }
    }

    console.log(`Counter is: ${counter.count}`);
}

createAndCountV1()