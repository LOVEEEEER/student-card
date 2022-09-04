import React from "react";
import EditForm from "../../ui/EditForm/EditForm";

const EditPage = () => {
  return (
    <>
      <main className="edit">
        <section className="edit-form">
          <div className="container edit-form__container">
            <h1>Создать</h1>
            <EditForm />
          </div>
        </section>
      </main>
    </>
  );
};

export default EditPage;
