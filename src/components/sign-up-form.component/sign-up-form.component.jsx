import { useState } from 'react';

const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormField);
  const {displayName, email, password, confirmPassword} = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  return (
    <div>
      <h2>Don't have an account?</h2>
      <form>
        <input
          label="Display Name"
          name="displayName"
          value={displayName}
          type="email"
          onChange={handleChange}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
