import {ADD_TO_CART} from '../constants'
export const addTocart=(data)=>{
    // console.warn("action",data)
    return{
        type:ADD_TO_CART,
        data:data
    }
}

export const removeTocart=(data)=>{
   
    return{
        type:'REMOVE_TO_CART',
        data:data
    }
}
