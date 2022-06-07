import {TYPE_LANG} from "./types";


const state={
    typeLang:false
}



const Reducers=(initialState=state,action)=>{
    switch (action.type){
        case TYPE_LANG:
            return {
                ...state,
                typeLang: action.data
            }
    }
    return state
}

export default Reducers;