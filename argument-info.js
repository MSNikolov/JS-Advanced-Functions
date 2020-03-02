function solve(...args){
    let types = {};

    args.forEach(ar => {
        console.log(`${typeof ar}: ${ar}`)

        let tip = typeof ar;

        if (!types.hasOwnProperty(tip)){
            Object.defineProperty(types, tip, {value: 0, writable: true, enumerable: true, configurable: true})
        }

        types[tip]++;
    })

    let keys = Object.keys(types);

    keys.sort((a, b) => types[b] - types[a]);

    keys.forEach(k => {
        console.log(`${k} = ${types[k]}`)
    })
}

solve('cat', 42, function () { console.log('Hello world!'); }, 'dog')