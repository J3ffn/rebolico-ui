import styles from "./Login.module.css";

import Form from "components:molecules/Form/Form";
import PageTemplate from "components:templates/PageTemplate/PageTemplate";
import { Link } from "react-router-dom";

const http = "http://localhost:8080;";

const Login = () => {
  function submit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const content = {
      username: "jeff@email.com",
      password: "1234",
    };

    console.log("CLICOU");
  }

  return (
    <PageTemplate>
      <div className={styles.loginContainer}>
        <div className={styles.loginContent}>
          <h2 className={styles.title}>LOGIN</h2>
          <div className={styles.CredentialBox}>
            <Form
              element={<Link to="/register">Forgot your passowrd?</Link>}
              inputs={[
                {
                  label: "E-mail",
                  attributes: {
                    name: "email",
                    type: "email",
                    placeholder: "Digite seu e-mail...",
                  },
                },
                {
                  label: "Password",
                  attributes: {
                    name: "password",
                    type: "password",
                    placeholder: "Digite sua senha...",
                  },
                },
              ]}
              buttonProps={{
                buttonText: "LOGIN",
                atributes: {
                  style: {},
                  onClick: submit,
                },
              }}
            />
            {/* <Link to="/register">Forgot your passowrd?</Link> */}
          </div>
          <Link
            to="/register"
            style={{
              display: "flex",
              width: "max-content",
              alignSelf: "end",
            }}
          >
            Don't have account ↗
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Login;
