import { useParams } from "react-router-dom"

const ProfilePage = () => {

  const params = useParams()

  return (
    <h1 className="text-2xl flex flex-col gap-2 m-12">
      Profile Page {params.profileId}
    </h1>
  )
}

export default ProfilePage