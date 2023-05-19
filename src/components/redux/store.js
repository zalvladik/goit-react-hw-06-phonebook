import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './contactsReducer'
import { filterListReducer } from './filterListReducer'

export const store = configureStore({
    reducer:{
        contacts:contactsReducer,
        filter:filterListReducer,
    }
})

