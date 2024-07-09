import { useState } from "react";
import { CREATE_USER } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
import styles from "./createUser.module.scss";

export const CreateUser = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER);
  console.log(error);//

  return (
    <div className={styles.createUser}>
      <input
        type="text"
        placeholder="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="username"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button
        onClick={() => {
          createUser({
            variables: {
              name: name,
              username: userName,
              password: password,
            },
          });
        }}
      >
        Create User
      </button>
    </div>
  );
};
