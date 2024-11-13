import {configureStore} from"@reduxjs/toolkit";
import  countSlice  from './slice/countSlice'

export const store= configureStore({
reducer:{
    counterReducer:countSlice
}
})