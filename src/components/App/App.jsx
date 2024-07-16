import { useState, useEffect } from "react";
import contactData from "../../contactData.json";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import s from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(
      window.localStorage.getItem("saved-contacts")
    );
    return savedContacts !== null ? savedContacts : contactData;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [search, setSearch] = useState("");

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <>
      <div className={s.wrapper}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onAddContact={addContact} />
        <SearchBox value={search} onSearch={setSearch} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </div>
    </>
  );
};

export default App;
