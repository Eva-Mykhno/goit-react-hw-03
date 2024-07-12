import { useState } from "react";
import initialContact from "../../contactData.json";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";

import s from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState(initialContact);
  const [search, setSearch] = useState("");
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className={s.wrapper}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox value={search} onSearch={setSearch} />
        <ContactList contacts={visibleContacts} />
      </div>
    </>
  );
};

export default App;
