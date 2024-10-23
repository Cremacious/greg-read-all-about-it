import SignUp from "../../components/sign-up-form/sign-up-form.component";
import SignIn from "../../components/sign-in-form/sign-in-form.component";

function Authentication() {
  return (
    <div>
      <h1>Authentication</h1>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Authentication;
