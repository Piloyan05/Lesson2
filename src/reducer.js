export default function reducer(state,action){
    switch(action.type){
        case "ADD":
            return[
                ...state,
                {
                    id:Date.now(),
                    name:action.payload
                }
            ]
    }
}