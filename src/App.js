import { isEditable } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import AddUsers from "./components/addusers/addusers";
import Contacts from "./components/contacts/contacts";
import DeleteModal from "./components/UI/delete-modal";

const CONTACTS = [
  {
    id: "c1",
    firstname: "Kevin",
    lastname: "flores",
    email: "flores.kevinleo@gmail.com",
    phone: "09999983099",
  },
  {
    id: "c2",
    firstname: "Carlo",
    lastname: "lopez",
    email: "lopez.carlo@gmail.com",
    phone: "09999983087",
  },
];

function App() {
  const [contacts, setContact] = useState(CONTACTS);
  const [searchContact, setSearchContact] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [toEdit, setToEdit] = useState({});

  const saveHandler = (newContact) => {
    if (isEdit) {
      setContact(newContact);
    } else {
      setContact((prevContacts) => {
        return [newContact, ...prevContacts];
      });
    }
    setIsEdit(false);
    setToEdit({});
  };
  const deleteHandler = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContact(newContacts);
  };
  const editHandler = (contact) => {
    setIsEdit(true);
    setToEdit(contact);
  };
  const searchHandler = (event) => {
    const searchedContact = contacts.filter((contact) => {
      return (
        contact.firstname
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        contact.lastname
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        contact.email
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        contact.phone.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
    setSearchContact(searchedContact);
  };

  useEffect(() => {
    setSearchContact(
      contacts.sort((a, b) =>
        a.firstname.toLowerCase().localeCompare(b.firstname.toLowerCase())
      )
    );
  }, [contacts]);

  return (
    <Fragment>
      <AddUsers
        data={contacts}
        saveHandler={saveHandler}
        isEdit={isEdit}
        toEdit={toEdit}
      />
      <Contacts
        data={searchContact}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        onChange={searchHandler}
      />
    </Fragment>
  );
}

export default App;
