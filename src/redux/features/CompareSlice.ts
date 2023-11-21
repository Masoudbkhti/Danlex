import {createSlice} from "@reduxjs/toolkit";


const CompareSlice = createSlice({
    name: "Compare",
    initialState: {

        products: [
          {
           }
        ],
    },
    reducers:{
            addToCompare: (state, action)=>{
                    const {payload} = action;
                    const index = state.products.findIndex(item => item.id === payload.id)
                    const isNotFound = index === -1;
                    if (state.products.length < 5) {
                        if (isNotFound) {
                            state.products.push({...payload, isDuplicate: false})

                        } else {
                            state.products[index].isDuplicate = true;
                        }
                    } else {
                        return;
                }
            },
        removeCompare: (state, action) => {
            const {payload} = action;
            const index = state.products.findIndex(item  => item.id === payload)
            state.products.splice(index, 1)

        }
    }

})

export const {addToCompare,removeCompare} = CompareSlice.actions;
export default CompareSlice.reducer;