import React from "react";

const UserContext = () => {
  const [logged, setLogged] = React.useState<boolean>(false);
  const [data, setData] = React.useState<object>();

  return { logged, setLogged, data, setData };
};

export default UserContext;
