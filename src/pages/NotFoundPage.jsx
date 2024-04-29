import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='m-5 flex flex-col gap-2'>
        404 Not Found
        <Link to="/">Go back to the homepage from Link</Link>
    </div>
  )
}

export default NotFoundPage