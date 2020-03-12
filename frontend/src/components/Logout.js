import React from "react";
import { useMutation } from "react-apollo";
import { useHistory } from "react-router-dom";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import { USER_LOGOUT_MUTATION } from "../reslovers/Mutation";
import { cookies } from "../utils/client-apollo";

const Logout = props => {
  const { push } = useHistory();
  const [logout] = useMutation(USER_LOGOUT_MUTATION, {
    refetchQueries: () => [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <button
      onClick={async () => {
        await cookies.remove("frontend_token");
        await logout();
        await push("/");
      }}
      {...props}
      type="button"
    >
      Logout
    </button>
  );
};

export default Logout;
