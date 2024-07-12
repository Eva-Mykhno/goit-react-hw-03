import s from "./Contact.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ name, number }) => {
  return (
    <div className={s.card}>
      <div className={s.info}>
        <p className={s.name}>
          <BsFillPersonFill className={s.icon} />
          {name}
        </p>
        <p className={s.number}>
          <BsFillTelephoneFill className={s.icon} />
          {number}
        </p>
      </div>

      <button className={s.button} type="submit">
        Delete
      </button>
    </div>
  );
};

export default Contact;
