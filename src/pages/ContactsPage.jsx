import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { Toaster } from 'react-hot-toast';

import { Container, Title, SubTitle } from '../components/App.styled';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { selectIsLoading } from '../redux/contacts/selectors';
import { selectContacts } from '../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && <p>Request in progress...</p>}
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <b>Your phonebook is empty. Add first contact!</b>
      )}
      {contacts.length > 0 && <ContactList />}

      <Toaster />
    </Container>
  );
};
export default ContactsPage;
