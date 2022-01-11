import React, { useState } from "react";
import Button from "../addusers/components/button";
import SearchBar from "../search-bar/search-bar";
import Card from "../UI/Card";
import DeleteModal from "../UI/delete-modal";

import styles from "./contacts.module.css";

const Contacts = (props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState();

  const deleteModalToggle = (index) => {
    setDeleteIndex(index);
    setShowDeleteModal((prevState) => !prevState);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const confirmDelete = () => {
    props.deleteHandler(deleteIndex);
    setShowDeleteModal((prevState) => !prevState);
  };

  return (
    <Card>
      {showDeleteModal && (
        <DeleteModal
          title="Delete Contact"
          message="Are you sure you want to delete this contact?"
          onConfirm={confirmDelete}
          onClose={closeDeleteModal}
        />
      )}
      <div className={styles.contact__container}>
        <SearchBar onChange={props.onChange} />
        <div>
          {props.data.map((contact, index) => {
            return (
              <div className={styles.contact__details} key={contact.id}>
                <div className={styles.name}>
                  <span>{contact.firstname}</span>
                  <span> {contact.lastname}</span>
                </div>
                <div>
                  <span className={styles.title}>Email: </span>
                  <span>{contact.email}</span>
                </div>
                <div>
                  <span className={styles.title}>Phone: </span>
                  <span>{contact.phone}</span>
                </div>
                <div className={styles.sub__container}>
                  <Button
                    style={{
                      margin: "0 8px",
                      backgroundColor: "transparent",
                      color: "rgb(88, 0, 81)",
                    }}
                    onClick={() => deleteModalToggle(index)}
                    label="Delete"
                  />
                  <Button
                    style={{ margin: "0 8px" }}
                    onClick={() => props.editHandler(contact)}
                    label="Edit Contact"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
export default Contacts;
