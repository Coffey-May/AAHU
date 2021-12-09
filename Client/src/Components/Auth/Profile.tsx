import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const { user } = useAuth0()
    return (
        <div >

            {!user ? null : <h3 style={{ margin: '0 auto', paddingTop: '5px' }}>Welcome, {JSON.stringify(user.name, null, 2)}...</h3>}
        </div>
    )
}

export default Profile
