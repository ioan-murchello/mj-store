import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components/index";

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='POST'
        className='card w-96 p-8 bg-base-100 shadow-md flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput
          label='Your Name'
          name='name'
          type='text'
          defaultValue='Jhon Jhonson'
        />
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
          <SubmitBtn text='Register' />
        </div>
        <button className='btn btn-secondary btn-block capitalize'>
          Guest User
        </button>
        <p className='text-center'>
          Allready a member ?{' '}
          <Link className='ml-2 link link-hover link-primary' to='/login'>
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
}
export default Register