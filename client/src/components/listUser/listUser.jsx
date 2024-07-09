import { GET_ALL_USERS } from "../../graphql/queries";
import { DELETE_USER } from "../../graphql/mutations";
import { useQuery, useMutation } from "@apollo/client";
import styles from "./listUser.module.scss";

export const ListUser = () => {
  const { data } = useQuery(GET_ALL_USERS);

  const [deleteUser, { error }] = useMutation(DELETE_USER);
  console.log(error);//

  return (
    <div className={styles.listUser}>
      {data &&
        data.getAllUsers.map((user) => {
          return (
            <div key={user}>
              {user.name} / {user.username}
              <button
                onClick={() => {
                  deleteUser({ variables: { id: user.id } });
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
    </div>
  );
};
