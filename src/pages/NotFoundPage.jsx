import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col gap2'>
        404 Not Found
        <Link to="/">Go back to the homepage from Link</Link>
        <a href="/">Go back to the homepage from a</a>
    </div>
  )
}

export default NotFoundPage