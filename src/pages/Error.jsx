import { Link, useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  console.log(error)

  if (error && error.status === 404) {
    return (
      <main className='grid min-h-screen place-items-center px-8'>
        <div className='text-center'>
          <p className='text-9xl font-semibold text-primary'>404</p>
          <h1 className='mt-4 text-9xl font-bold tracking-tight sm:text-5xl'>
            page not found
          </h1>
          <p className='mt-6 text-lg leading-7'>
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className='mt-6'>
            <Link to='/'>back home</Link>
          </div>
        </div>
      </main>
    );
  }
  return (
     <main className="flex justify-center items-center flex-col space-y-4 min-h-screen">
      <h3 className="text-3xl">There waw an error...</h3>
      <Link className="btn btn-primary capitalize" to='/'>back home</Link>
     </main>
  )
}
export default Error