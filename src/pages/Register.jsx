import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components/index';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const res = await customFetch.post('/auth/local/register', data);
    toast.success('account created successfuly')
    return redirect('/login');
  } catch (error) {
    const errorMessage = error?.responce?.data?.error?.message || 'please double check your credentials'
    toast.error(errorMessage) 
  }

  return null;
};

const Register = (e) => {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginAsGuestUser = async () => {
    try {
      const res = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      navigate('/');
      dispatch(loginUser(res.data));
      toast.success(`Welcome Guest User`);
    } catch (error) {
      toast.error('Guest User login error.Please try again');
    }
  };
 
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
          defaultValue='james333 smith'
        />
        <FormInput
          label='Email'
          name='email'
          type='email'
          defaultValue='james333@gmail.com'
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
        <button
          className='btn btn-secondary btn-block capitalize'
          onClick={e => {
            e.preventDefault() 
            loginAsGuestUser()}}
        >
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
};
export default Register;
