import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
