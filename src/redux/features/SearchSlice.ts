import {createSlice} from "@reduxjs/toolkit";
import {InitialState} from "@/lib/types.ts";
const SearchSlice = createSlice({
    name:"Search",
    initialState: {
        searchItems: [] as InitialState['searchItems'],
        filteredCategories: [] as InitialState['filteredCategories'],
        filteredProducts: [] as InitialState['filteredProducts'],
    },
    reducers:{
        addToSearch: (state, action) => {
            const {payload} = action;
            state.searchItems = payload;
        },
        filterCategory: (state, action) => {
           const { payload }: { payload: string } = action;
           const index = state.filteredCategories.findIndex((item) => item.id === payload);
           const isNotFound = index === -1;
           if(isNotFound) {
               state.filteredCategories.push({id: payload});
           } else {
               state.filteredCategories.splice(index,1);
           }

            state.filteredProducts = state.filteredCategories.flatMap((category) => {
                return state.searchItems.filter((item: { id: number, title: string, category: string }) => item.category === category.id);
            });

        },

    }
})


export const {addToSearch, filterCategory} = SearchSlice.actions;
export default SearchSlice.reducer;