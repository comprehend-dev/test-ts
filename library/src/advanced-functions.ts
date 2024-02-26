async function awaitAll(...promises: Array<Promise<any>>) {
    for (let promise of promises) {
        await promise;
    }
}

function* evens() {
    let i = 2;
    while (true) {
        yield i;
        i += 2;
    }
}

async function* dribble(interval: number, ...values: Array<any>) {
    for (let value of values) {
        await new Promise(resolve => setTimeout(resolve, interval));
        yield value;
    }
}

class Utils {
    async awaitAll(...promises: Array<Promise<any>>) {
        for (let promise of promises) {
            await promise;
        }
    }

    * evens() {
        let i = 2;
        while (true) {
            yield i;
            i += 2;
        }
    }

    async * dribble(interval: number, ...values: Array<any>) {
        for (let value of values) {
            await new Promise(resolve => setTimeout(resolve, interval));
            yield value;
        }
    }
}
