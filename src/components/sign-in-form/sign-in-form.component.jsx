import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import {
  createAuthUserEmailPassword,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';

const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFields = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthUserEmailPassword(email, password);
      await createUserDocFromAuth(user, { displayName });
      resetFields();
    } catch (error) {}
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  return (
    <div>
      <h2>Don't have an account?</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          value={displayName}
          type="text"
          onChange={handleChange}
        />
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
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          type="password"
          onChange={handleChange}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
