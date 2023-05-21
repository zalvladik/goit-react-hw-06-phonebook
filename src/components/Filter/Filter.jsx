import {Text,InputText} from './FilterStyled'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { filterContacts } from '../redux/filterListReducer'

const Filter = () => {

    const dispatch = useDispatch()
    const contactsList = useSelector(state=>state.contacts)
  
    const [filterValue, setFilterValue] = useState('')

    useEffect(() => {
        dispatch(filterContacts({contacts:contactsList, filterValue:filterValue}))
    },[ filterValue, contactsList, dispatch])
  
    const filterName = (event) =>{
      setFilterValue(event.currentTarget.value)
    }

     return(
            <>
            <Text>Find contacts by name</Text>
            <InputText
            onChange={filterName}
            name="filter"
            value={filterValue}
            />
            </>
        )
}

export default Filter