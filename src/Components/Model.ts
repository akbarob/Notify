export interface Todo{
    id:number;
    todo:string;
    isDone:boolean;
}
type Actions = 
    |{ type: 'add'; payload: string}
    |{ type: 'remove'; payload: number}
    |{ type: 'done'; payload: number}


// const TodoReducer =(state:Todo[], action: Actions) => {
//    switch (action.type) {
//     case "add":
//         return [
//             ...state,
//             {id:Date.now(), todo: action.payload, isDone: false}
//         ]
//     case "remove":
//         return [
//             ...state,
//             {id:Date.now(), todo: action.payload, isDone: false}
//         ]
        
        
//         break;
   
//     default:
//         break;
//    }
// }





// import React from 'react'

// export default function ReducerExample() {
//     const [state, dispatch] = useReducer(TodoReducer, second, third)
//   return (
//     <div>ReducerExample</div>
//   )
// }
