import {UlContacts,LiContacts,LiButton} from './ContactsListStyled'
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from '../redux/contactsReducer'

const ContactsList = () => {
    
    const dispatch = useDispatch()
    const contactsList = useSelector(state=>state.contacts)
    const filterList = useSelector(state=>state.filter)

    const deleteName = (event) =>{
        console.log('deleteButtton')
        const newState = contactsList.filter(option => option.id !== `${event.currentTarget.id}`)   
        dispatch(deleteContact(newState))
      }

    return(
        <UlContacts>
        {filterList.map(event =>(
            <LiContacts key={nanoid()}>{event.name}: {event.number}
            <LiButton id={event.id} onClick={deleteName}>Delete</LiButton>
            </LiContacts>
            
        ))}
    </UlContacts>
    )
}



export default ContactsList