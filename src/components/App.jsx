import { useEffect, useState } from 'react'
import ContactForm from './ContactsForm/ContactForm'
import Filter from './Filter/Filter'
import ContactsList from './ContactsList/ContactsList'
import {Container} from './AppStyled'
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from './redux/contactsReducer'
import { filterContacts } from './redux/filterListReducer'

const NewApp = () => {
  const dispatch = useDispatch()
  const contactsList = useSelector(state=>state.contacts)
  const filterList = useSelector(state=>state.filter)
  
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    dispatch(filterContacts({contacts:contactsList, filterValue:filterValue}))
  },[ filterValue, contactsList ])

  const addNewContact = (name,number) => {
      if(contactsList.find(option => option.name.toLowerCase() === `${name}`.toLowerCase())){
        return alert(`${name} is already in contact`)
      }
  
      if(contactsList.find(option => option.number === `${number}`)){
        return alert(`${number} is already in contact`)
      }
      
      const newState = {id: `${nanoid()}`, name:`${name}`, number:`${number}`}
      dispatch(addContact(newState))
  }

    const deleteName = (event) =>{
      console.log('deleteButtton')
      const newState = contactsList.filter(option => option.id !== `${event.currentTarget.id}`)   
      dispatch(deleteContact(newState))
    }
  
    const filterName = (event) =>{
      setFilterValue(event.currentTarget.value)
    }

      return(
        <Container>
        <h1>PhoneBook</h1>
        <ContactForm
        newName={addNewContact}
        />
        
        <h2>Contacts</h2>
        <Filter
        filterName={filterName}
        filterValue={filterValue}
        />
        {contactsList && 
        <ContactsList
        deleteName={deleteName}
        events={filterList}
        /> }
        </Container>
    )
}


export default NewApp;