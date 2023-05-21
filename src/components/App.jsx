import ContactForm from './ContactsForm/ContactForm'
import Filter from './Filter/Filter'
import ContactsList from './ContactsList/ContactsList'
import {Container} from './AppStyled'
import { useSelector } from 'react-redux'

const NewApp = () => {

  const contactsList = useSelector(state=>state.contacts)

      return(
        <Container>
        <h1>PhoneBook</h1>
        <ContactForm
        />
        
        <h2>Contacts</h2>
        <Filter
        />
        {contactsList && 
        <ContactsList
        /> }
        </Container>
    )
}

export default NewApp;