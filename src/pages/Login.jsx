import { Form, Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { SubmitBtn } from '../components';

const Login = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='POST'
        className='card w-96 p-8 bg-base-100 shadow-md flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput
          label='Email'
          name='email'
          type='email'
          defaultValue='test@test.com'
        />
        <FormInput
          label='Password'
          name='password'
          type='password'
          defaultValue='secret'
        />

        <div className='mt-4 grid place-items-center'>
          <SubmitBtn text='Login' />
        </div>
        <button className='btn btn-secondary btn-block capitalize'>Guest User</button>
        <p className='text-center'>
          Not a member yet?{' '}
          <Link className='ml-2 link link-hover link-primary' to='/register'>
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
