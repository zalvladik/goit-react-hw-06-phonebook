import { contactsReducer } from './contactsReducer'
import { filterListReducer } from './filterListReducer'
import { combineReducers } from '@reduxjs/toolkit'

export const reducer =  combineReducers({ 
        contacts: contactsReducer,
        filter: filterListReducer,
    },
)
