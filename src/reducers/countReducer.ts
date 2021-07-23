import {Dispatch} from "redux";

let initialState: number = 0
export const countReducer = (state = initialState, action: countACType) => {
    switch (action.type) {
        case 'PLUS': {
            let newState = state;
            newState = action.countValue
            return newState
        }
        default:
            return state
    }
}

type countACType = ReturnType<typeof countAC>

export let countAC = (countValue: number) => {
    return {
        type: "PLUS",
        countValue
    } as const
}

export const countThunk = (count: number,setLoading:(loading:boolean)=>void) => (dispatch: Dispatch) => {
    Api.setLocalStorage(count + 1);
    setLoading(true)
    setTimeout(()=>{
        let countValue = Api.getLocalStorage()
        dispatch(countAC(Number(countValue)));
        setLoading(false)
    },2000)
}

let Api = {
    setLocalStorage: (value: number) => {
        localStorage.setItem('key', `${value}`)
    },
    getLocalStorage: () => {
        return localStorage.getItem('key')
    }
}
