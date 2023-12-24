import {createSlice} from "@reduxjs/toolkit";
import {PRODUCTS} from "@/lib/data.ts";
import {digitsEnToFa} from "@persian-tools/persian-tools";
const productsDetail: Array<{id: number, title: string}> = PRODUCTS.map((item) => ({id:item.id, title: item.title}))
const SearchSlice = createSlice({
    name:"Search",
    initialState:{
        searchItems: [],
        isFilterOn: false,
        filteredProducts: [
            {

            }
        ]


    },
    reducers:{
        addToSearch: (state, action) => {
            const {payload} = action;
            state.searchItems = payload;
        },
        filterCategory: (state, action) => {
            const { payload } = action;
            const filteredData  = state.searchItems.filter((item: {id: number, title: string, category: string}) => item.category === payload.categoryName);
            if(state.filteredProducts.length === 0) {
                state.filteredProducts.push({...filteredData, isFiltered: true})
            }
            const index = JSON.stringify(state.filteredProducts[0].category) === JSON.stringify(filteredData[0].category);
            if(!index) {
                state.filteredProducts.push(...filteredData)
            }

            console.log(JSON.stringify(state.filteredProducts[0].category),"indexxx")


            console.log(JSON.stringify(filteredData),"ffffff")



        },
        removeFilterProduct: (state, action) => {
            const {payload} = action;

            state.isFilterOn = payload;
        }

    }
})


export const {addToSearch, filterCategory,removeFilterProduct} = SearchSlice.actions;
export default SearchSlice.reducer;