function arraySort(params, order){
    let result = params;

    if (order === "asc"){
        result.sort((a, b) => a - b)
    }

    else if (order === "desc"){
        result.sort((a, b) => b - a)
    }

    return result
}

console.log(arraySort([14, 7, 17, 6, 8], 'desc'))