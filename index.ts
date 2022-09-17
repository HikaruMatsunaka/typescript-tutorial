//関数に型注釈をつける
function add(a:string, b: string){
    return a+b
}


//変数に型注釈をつける
const message = add("100", "100")
const messageType: string = add("100", "100")


//オブジェクトに型注釈をつける
const obj = {name:"hikaru", age:20}
const objType:{name:string, age:number} = {name:"hikaru", age:20}


//配列に型注釈をつける
const arr = [1, 2, 3]
const arrType: number[] = [1, 2, 3]


//Type alias
//型に別名をつけて再利用する
type Messages = string[];

function showMessage(msgs){
    msgs.forEach(msg => console.log(msg))
}

function showMessageType(msgs:Messages){
    msgs.forEach(msg => console.log(msg))
}
