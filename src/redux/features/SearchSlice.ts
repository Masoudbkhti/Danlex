import {createSlice} from "@reduxjs/toolkit";
import {PRODUCTS} from "@/lib/data.ts";
import {digitsEnToFa} from "@persian-tools/persian-tools";
const productsDetail: Array<{id: number, title: string}>=  PRODUCTS.map((item) => ({id:item.id, title: item.title}))
const SearchSlice = createSlice({
    name:"Search",
    initialState:{
        searchItems: []


    },
    reducers:{
        addToSearch: (state, action) => {
            const {payload} = action;
            const filteredProducts = productsDetail.filter((item) => {
                const searchTerm = digitsEnToFa(payload.toLocaleLowerCase());
                const productTitle = digitsEnToFa(item.title.toLocaleLowerCase());
                return productTitle.includes(searchTerm);
            });
            const index = state.searchItems.findIndex((item) => item.id === fi)
            filteredProducts.map((item) => state.searchItems.push(item))
}
    }
})


export const {addToSearch} = SearchSlice.actions;
export default SearchSlice.reducer;