import {createSlice} from '@reduxjs/toolkit'

const contactsSlice = createSlice({
    name:'contacts',
    initialState: [],
    reducers:{
        addContact(state,action) {
            state.push(action.payload.newContact)
        },
        deleteContact(state,action) {
            return state = action.payload.newState
        },
    }
})

export const { addContact, deleteContact } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer