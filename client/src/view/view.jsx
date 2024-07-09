import { CreateUser } from "../components/createUser/createUser";
import { ListUser } from "../components/listUser/listUser";
import { UpdatePassword } from "../components/updatePassword/updatePassword";

const View = () => {
  return (
    <>
      <CreateUser />
      <ListUser />
      <UpdatePassword />
    </>
  );
};

export default View;
