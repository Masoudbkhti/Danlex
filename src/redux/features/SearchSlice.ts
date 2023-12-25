import {createSlice} from "@reduxjs/toolkit";
import {PRODUCTS} from "@/lib/data.ts";
import {digitsEnToFa} from "@persian-tools/persian-tools";
import {InitialState} from "@/lib/types.ts";
const productsDetail: Array<{id: number, title: string}> = PRODUCTS.map((item) => ({id:item.id, title: item.title}));
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

            const filteredData  = state.searchItems.filter((item: {id: number, title: string, category: string}) => state.filteredCategories?.map((category) => category === item.category));

            console.log(JSON.stringify(state.filteredCategories),"filteredcategorieeeeeeeeeees")
            console.log(JSON.stringify(filteredData),"filtered Data %%%%%%%")

        },
        filterProduct: (state) => {
            const filteredData  = state.searchItems.filter((item: {id: number, title: string, category: string}) => state.filteredCategories?.map((category) => category === item.category));
            console.log(filteredData,"filtered Data %%%%%%%")
            // if(state.filteredProducts.length === 0) {
            //     state.filteredProducts.push(...filteredData)
            // }
            // const index = JSON.stringify(state.filteredProducts[0].category) === JSON.stringify(filteredData[0].category);
            // if(!index) {
            //     state.filteredProducts.push(...filteredData)
            // }

            // console.log(JSON.stringify(state.filteredProducts),"indexxx")
            //
            //
            // console.log(JSON.stringify(filteredData),"ffffff")



        },
        removeFilterProduct: (state, action) => {
            const {payload} = action;
            const removedProducts = state.filteredProducts.find((item: {id: number, title: string, category: string}) => item.category === payload);
            console.log(payload,"removefilterpayload")
        }

    }
})


export const {addToSearch, filterCategory,removeFilterProduct,filterProduct} = SearchSlice.actions;
export default SearchSlice.reducer;