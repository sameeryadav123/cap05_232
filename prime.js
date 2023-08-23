let chekingIndex = (arr, indexN) => {
    let i = arr.length - 1;
    while (i >= 0) {
        console.log(arr[i] === indexN ? i : -1);
        i--;
    }
}

const animals = ["Lion", "Tiger", "Bear", "Elephant", "Giraffe"];
chekingIndex(animals, "Tiger");



function customSubstring(str,st,ed){
    if(ed === undefined){
        ed=str.length
    }
    let bag="";
    for(let i=st; i<ed;i++){
        bag+=str[i]
    }
    return bag;
}
let str="Mozilla";
console.log(customSubstring(str,1,3))
console.log(customSubstring(str,2))