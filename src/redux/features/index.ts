import {combineReducers} from "@reduxjs/toolkit";
import CompareSlice from "@/redux/features/CompareSlice.ts";


const rootReducer = combineReducers({
        Compare: CompareSlice,
});

export default rootReducer;