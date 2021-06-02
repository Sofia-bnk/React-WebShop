import { Formik } from "formik";

function Login() {
  return (
    <Formik
      initialValues={{ password: "", userName: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ handleChange, handleSubmit, isSubmitting, values }) => (
        <form onSubmit={handleSubmit}>
          <label>
            Användarnamn
            <input
              name="userName"
              onChange={handleChange}
              type="text"
              value={values.userName}
            />
          </label>
          <label>
            Lösenord
            <input
              name="password"
              onChange={handleChange}
              type="text"
              value={values.password}
            />
          </label>
          <input disabled={isSubmitting} type="submit" />
        </form>
      )}
    </Formik>
  );
}

export default Login;
