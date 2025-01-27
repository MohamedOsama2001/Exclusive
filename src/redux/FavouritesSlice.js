import { createSlice } from "@reduxjs/toolkit"

const initialState={
    favProducts:JSON.parse(localStorage.getItem('fav'))|| []
}
const FavouritesSlice=createSlice({
    name:"favourites",
    initialState,
    reducers:{
        addToFav:(state,action)=>{
            const item=action.payload
            const exictingItem=state.favProducts.find((i)=>i.id===item.id)
            if(!exictingItem){
                state.favProducts.push(item)
                localStorage.setItem('fav',JSON.stringify(state.favProducts))
            }
        },
        removeFromFav:(state,action)=>{
            state.favProducts=state.favProducts.filter((i)=>i.id!==action.payload)
            localStorage.setItem('fav',JSON.stringify(state.favProducts))
        }
    }
})
export const {addToFav,removeFromFav} =FavouritesSlice.actions
export default FavouritesSlice.reducer;