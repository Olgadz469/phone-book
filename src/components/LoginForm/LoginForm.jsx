import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

import {
  Button,
  Label,
  Form,
  Input,
} from '../../components/ContactForm/ContactForm.styled';
import { toast } from 'react-hot-toast';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(logIn({ email: email, password: password }))
      .unwrap()
      .then(() => {
        toast.success('Login successfully');
      })
      .catch(() => {
        toast.error('Some error...');
      });

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input
          type="email"
          name="email"
          placeholder="Email"
          required
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          title="Please enter a valid email address (e.g. example@example.com)."
        />
      </Label>

      <Label>
        Password
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
          pattern="^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{8,20}$"
          title="Password must be 8-20 characters long and contain at least one letter and one digit."
        />
      </Label>

      <Button type="submit">Login</Button>
    </Form>
  );
};
export default LoginForm;
