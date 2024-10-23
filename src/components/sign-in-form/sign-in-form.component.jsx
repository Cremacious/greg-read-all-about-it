import { useState, useContext } from 'react';
import FormInput from '../form-input/form-input.component';
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/users.context';

const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {}
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          value={email}
          type="email"
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          name="password"
          value={password}
          type="password"
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
        <button onClick={signInWithGoogle}>Google Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
