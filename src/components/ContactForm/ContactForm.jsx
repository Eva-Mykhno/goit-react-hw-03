import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is required!"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("This field is required!"),
});

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (data, actions) => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={contactSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label className={s.label}>
          <p className={s.title}>Name</p>
          <Field
            className={s.input}
            type="text"
            name="name"
            placeholder="Add name..."></Field>
          <ErrorMessage name="name" component="p" className={s.error} />
        </label>
        <label className={s.label}>
          <p className={s.title}>Number</p>
          <Field
            className={s.input}
            type="text"
            name="number"
            placeholder="Add number..."></Field>
          <ErrorMessage name="number" component="p" className={s.error} />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
