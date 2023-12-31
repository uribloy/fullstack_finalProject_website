import { useEffect, useState } from "react";
import usersServices from "../services/usersService";

export const useMe = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMe = async () => {
      const { data } = await usersServices.myProfile();
      setUser(data);
    };
    getMe();
  }, []);

  return user;
};

export default useMe;
