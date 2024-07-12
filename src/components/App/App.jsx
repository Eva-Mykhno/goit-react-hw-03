import { useState } from "react";
import initialContact from "../../contactData.json";
import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";
import s from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState(initialContact);
  return (
    <>
      <div>
        <h1 className={s.title}>Phonebook</h1>
        {/* <ContactForm /> */}
        {/* <SearchBox /> */}
        <ContactList contacts={contacts} />
      </div>
    </>
  );
};

export default App;
