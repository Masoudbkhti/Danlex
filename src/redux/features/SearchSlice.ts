import {createSlice} from "@reduxjs/toolkit";
import {PRODUCTS} from "@/lib/data.ts";
import {digitsEnToFa} from "@persian-tools/persian-tools";
const productsTitle = PRODUCTS.map((item)=> item.title)
console.log(productsTitle)

const SearchSlice = createSlice({
    name:"Search",
    initialState:{
        searchItems: [
            {
            }
        ],
    },
    reducers:{
        addToSearch: (state, action) => {
            const {payload} = action;
            const filteredProducts = productsTitle.filter((item) => {
                const searchTerm = digitsEnToFa(payload.toLocaleLowerCase());
                const productTitle = digitsEnToFa(item.toLocaleLowerCase());
                return productTitle.includes(searchTerm);
            });
            console.log(filteredProducts, "filteredproducts")

}
    }
})


export const {addToSearch} = SearchSlice.actions;
export default SearchSlice.reducer;