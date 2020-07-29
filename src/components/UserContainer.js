import React, { useEffect } from 'react'
import { fetchUsers } from '../redux';
import { connect } from 'react-redux';

function UsersContainer({ userData, fetchUsers }) {

    useEffect(() => {
        fetchUsers()
    }, [])

    return userData.loading ?
        (<h2>Loading...</h2>)
        : userData.error
            ? (<h2>{userData.error}</h2>)
            : (<div>
                <h2>UserLists</h2>
                <div>
                    {userData && userData.users && userData.users.map(user => <p>{
                        user.name
                    }</p>)}
                </div>
            </div>)
}

const mapStateToProps = (state) => {
    return {
        userData: state.users
    }
}

const mapDispactureToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}


export default connect(mapStateToProps, mapDispactureToProps)(UsersContainer)
