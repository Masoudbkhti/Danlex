import {combineReducers} from "@reduxjs/toolkit";
import CompareSlice from "@/redux/features/CompareSlice.ts";
import SearchSlice from "@/redux/features/SearchSlice.ts"

const rootReducer = combineReducers({
        Compare: CompareSlice,
        Search: SearchSlice,
});

export default rootReducer;