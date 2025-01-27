import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './ProductsSlice'
import favReducer from './FavouritesSlice'

const store=configureStore({
    reducer:{
        cart : cartReducer,
        favourites: favReducer
    }
})
export default store