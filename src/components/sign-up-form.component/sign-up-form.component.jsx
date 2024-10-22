import { useState } from 'react';
import FormInput from '../form-input/form-input.component';


const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  return (
    <div>
      <h2>Don't have an account?</h2>
      <form>
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
