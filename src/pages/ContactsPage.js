import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { useGetContactsByNameQuery, useDeleteContactMutation } from '../redux';

function ContactsPage() {
  const { data } = useGetContactsByNameQuery();
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      <Filter />
      {data && <ContactList onDeleteContact={deleteContact} />}
    </>
  );
}

export default ContactsPage;
