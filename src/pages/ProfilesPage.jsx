import { Link } from 'react-router-dom'

const ProfilesPage = () => {
  
  const profiles = [1, 2, 3, 4, 5]

    return (

      <div className='text-2xl m-5 flex flex-col gap-2'>
      {profiles.map((profile) => (
        <Link key={profile} to={'/profile/${profile}'}>
          Profile {profile}
        </Link>
      ))}
      </div>
  )
}

export default ProfilesPage