import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FiDelete } from 'react-icons/fi';
import { MdContactPhone } from 'react-icons/md';
import { useGetContactsByNameQuery } from '../../redux';
import { getFilter } from '../../redux';
import {
  List,
  Item,
  Text,
  ContactWrapper,
  ChangeColor,
} from './ContactList.styled';

const ContactList = ({ onDeleteContact }) => {
  const { data: contacts } = useGetContactsByNameQuery();
  const filter = useSelector(getFilter);

  const getVisibleContacts = useMemo(() => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  }, [filter, contacts]);

  return (
    <>
      {contacts && (
        <List>
          {getVisibleContacts.map(({ id, name, phone }) => (
            <Item key={id}>
              <ContactWrapper>
                <ChangeColor>
                  <MdContactPhone
                    style={{
                      width: 50,
                      height: 50,
                      marginRight: 20,
                    }}
                  />
                </ChangeColor>
                <Text>{name}:</Text>
                <Text>{phone}</Text>
              </ContactWrapper>
              <ChangeColor>
                <FiDelete
                  onClick={() => {
                    onDeleteContact(id);
                    toast.info(`${name} deleted from contacts.`);
                  }}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                />
              </ChangeColor>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};
