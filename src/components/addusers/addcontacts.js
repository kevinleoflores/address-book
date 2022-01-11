import React, { Fragment, useState, useEffect } from "react";
import InputFields from "./components/inputFields";
import Button from "./components/button";
import Card from "../UI/Card";
import styles from "./addcontacts.module.css";

const AddUsers = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const firstNameChangeHandler = (event) => {
    setFirstName(() => {
      return event.target.value;
    });
  };
  const lastNameChangeHandler = (event) => {
    setLastName(() => {
      return event.target.value;
    });
  };
  const emailChangeHandler = (event) => {
    setEmail(() => {
      return event.target.value;
    });
  };
  const phoneChangeHandler = (event) => {
    setPhone(() => {
      return event.target.value;
    });
  };

  const saveHandler = () => {
    if (props.isEdit) {
      const editedContact = props.data.map((contact) => {
        if (contact.id === props.toEdit.id) {
          return {
            ...contact,
            firstname: firstName,
            lastname: lastName,
            email: email,
            phone: phone,
          };
        }
        return contact;
      });
      props.saveHandler(editedContact);
    } else {
      const newContact = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        phone: phone,
        id: Math.random().toString(),
      };
      props.saveHandler(newContact);
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  useEffect(() => {
    if (props.isEdit) {
      setFirstName(props.toEdit.firstname);
      setLastName(props.toEdit.lastname);
      setEmail(props.toEdit.email);
      setPhone(props.toEdit.phone);
    }
  }, [props.isEdit]);
  return (
    <Card>
      <div className={styles.input__container}>
        <InputFields
          id="firstname"
          label="First Name"
          type="text"
          onChange={firstNameChangeHandler}
          value={firstName}
        />
        <InputFields
          id="lastname"
          label="Last Name"
          type="text"
          onChange={lastNameChangeHandler}
          value={lastName}
        />
        <InputFields
          id="email"
          label="Email"
          type="email"
          onChange={emailChangeHandler}
          value={email}
        />
        <InputFields
          id="phone"
          label="Phone Number"
          type="number"
          onChange={phoneChangeHandler}
          value={phone}
        />
        <Button label="Save" onClick={saveHandler} style={{ marginTop: 8 }} />
      </div>
    </Card>
  );
};
export default AddUsers;
