import { createSlice } from '@reduxjs/toolkit'
const initialStateValue={name:'sethu',age:0,email:'sethukoodaranhi@gmail.com'}
 export const userSlice=createSlice({

    name:"user",   //slice name
    initialState:{
        // value:{
        //     name:'sethu',
        //     age:0,
        //     email:'sethukoodaranhi@gmail.com'
        // }
        value:initialStateValue
    },
    reducers:{ 
          login:(state,action)=>{
            state.value=action.payload
          },            
          logout:(state,action)=>{
              state.value=initialStateValue
          }
    }
})
export const {login}=userSlice.actions    //assign actions and export
export const {logout}=userSlice.actions
export default userSlice.reducer       

