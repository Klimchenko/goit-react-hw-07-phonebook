import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsTelephonePlus } from 'react-icons/bs';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useGetContactsByNameQuery, useAddContactMutation } from '../../redux';
import { Form, Label, Input, InputBottom, Button } from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsByNameQuery();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const normalizedName = name.toLowerCase();
      const isNameInContacts = contacts.some(contact =>
        contact.name.toLowerCase().includes(normalizedName),
      );

      if (isNameInContacts) {
        setName('');
        setPhone('');
        toast.warn(`${name} is already in contacts.`);
      }

      if (!isNameInContacts) {
        setName('');
        setPhone('');
        addContact({ name, phone });
        toast.success(`${name} with tel:${phone} added to contacts.`);
        navigate('/contacts', { replace: true });
      }
    },
    [name, phone, addContact, navigate, contacts],
  );

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>Name</Label>

        <Input
          type="text"
          name="name"
          value={name}
          htmlFor={nameInputId}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <Label htmlFor={numberInputId}>Number</Label>

        <InputBottom
          type="tel"
          name="phone"
          value={phone}
          htmlFor={numberInputId}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button type="submit" disabled={isLoading}>
          <BsTelephonePlus
            style={{
              width: 30,
              height: 30,
            }}
          />{' '}
          Add contact
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
