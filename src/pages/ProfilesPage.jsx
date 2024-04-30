import { NavLink, Outlet } from 'react-router-dom'

const ProfilesPage = () => {
  
  const profiles = [1, 2, 3, 4, 5];

    return (
      <div className='text-2xl m-12 flex gap-2'>
        <div className='text-2xl m-12 flex flex-col gap-2'>
          {profiles.map((profile) => 
            <NavLink 
            key={profile} 
            to={`/profiles/${profile}`}
            className={({isActive}) => { return isActive ? 'text-blue-500' : 'text-grey-500'}}
            >
              Profile {profile}
            </NavLink>
          )}
        </div>
          <Outlet />
      </div>
  )
}

export default ProfilesPage