let chekingIndex = (arr, indexN) => {
    let i = arr.length - 1;
    while (i >= 0) {
        console.log(arr[i] === indexN ? i : -1);
        i--;
    }
}

const animals = ["Lion", "Tiger", "Bear", "Elephant", "Giraffe"];
chekingIndex(animals, "Tiger");