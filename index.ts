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

function showMessageType(msgs:Messages){
    msgs.forEach(msg => console.log(msg))
}

const messages = showMessageType(["どうも！", "よいしょ！"])


//Classを扱う
type TodoItem = {
    name:string;
};

interface Service{
    getTodos():TodoItem[]
    //オブジェクトの配列
}


//オブジェクトのフィールドに型注釈をつける
type SomeType = {
    message:string;
}

function showMessageA (obj:SomeType){
    console.log(obj.message)
}

showMessageA({message:"こんちは！！"})

//messageというフィールドを持った型であれば、何でも代入できる！
//多分、Errorの詳細を見ると、{message:"どっかおかしいよ！"}のプロパティがあるはず！
showMessageA(new Error("どっかおかしいよ！"))
