import React,{useState} from 'react'
import {Container,Form,Button,Text,InputText} from './ContactFormStyled';
import { addContact } from '../redux/contactsReducer'
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from "react-redux";

const NewPhoneBookContainer = () =>{
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const contactsList = useSelector(state=>state.contacts)
    const dispatch = useDispatch()

    const currentName = (event) =>{
        const {name,value} = event.currentTarget
        
        switch(name){
            case 'name':
        return setName(value)
            case 'number':
        return setNumber(value)
            default:
        return console.log('Wrong qwery')
        }
    }

    const addNewContact = (event) => {
        event.preventDefault()
        if(contactsList.find(option => option.name.toLowerCase() === `${name}`.toLowerCase())){
          return alert(`${name} is already in contact`)
        }
    
        if(contactsList.find(option => option.number === `${number}`)){
          return alert(`${number} is already in contact`)
        }
        
        const newContact = {id: `${nanoid()}`, name:`${name}`, number:`${number}`}
        dispatch(addContact({newContact:newContact}))
        event.currentTarget.reset()
    }

    return (
        <Container>
        <Form onSubmit={addNewContact}>
        <Text>Name</Text>
        <InputText
        onChange={currentName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
        <Text>Number</Text>
        <InputText
        onChange={currentName}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        <Button type='submit'>Add contact</Button>
        </Form>
        
        </Container>
    )
}

export default NewPhoneBookContainer;
