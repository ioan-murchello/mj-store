import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { SubmitBtn } from '../components';
import { customFetch } from '../utils';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();

    const data = Object.fromEntries(formData);
    console.log(data,'dasta')
    try {
      const res = await customFetch.post('/auth/local', data); 
      store.dispatch(loginUser(res.data))
      return redirect('/')
    } catch (error) {
      const errorMessage = error?.responce?.data?.error?.message || 'please double check your credential'
      toast.error(errorMessage)
      return null
    }

  };

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginAsGuestUser = async () => {
    try {
      const res = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret'
      }) 
      navigate('/')
      dispatch(loginUser(res.data))
      toast.success(`Welcome Guest User`)
    } catch (error) {
      toast.error('Guest User login error.Please try again')
    }
  }
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='POST'
        className='card w-96 p-8 bg-base-100 shadow-md flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput label='Email' name='email' type='email' />
        <FormInput label='Password' name='password' type='password' />

        <div className='mt-4 grid place-items-center'>
          <SubmitBtn text='Login' />
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
