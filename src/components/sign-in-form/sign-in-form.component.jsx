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

function SignIn() {
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
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
