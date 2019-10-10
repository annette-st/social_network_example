import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios' // импортируем все что экспортировано в библиотеке и все экспорты будут
// упакованы в один объект axios
import userPhoto from '../../assets/img/photoNull.jpg'

let UsersFuncComp = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
                //     [
                //     {id: 1, photoUrl: 'https://l-userpic.livejournal.com/120638981/60235744', followed: true, status: 'status1', fullname: 'name1 sur1', location: {city: 'city1', country: 'country1'}},
                //     {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8tW9z8pJerCjodflHzpkvL6Rj3t62Ol0WlqXoEraliuDUhnqy', followed: false, status: 'status2', fullname: 'name2 sur2', location: {city: 'city2', country: 'country2'}},
                //     {id: 3, photoUrl: 'http://img.draugas.lt/forumas/veidukai/973676.gif', followed: false, status: 'status3', fullname: 'name3 sur3', location: {city: 'city3', country: 'country3'}}
                // ]);
                // })
            })
        }
    };


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map( u => <div key={u.id}>
                   <span>
                       <div>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.usersPhoto}/>
                       </div>
                       <div>
                           {u.followed
                               ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                               : <button onClick={() => props.follow(u.id)}>Follow</button>}
                       </div>
                   </span>
                   <span>
                       <span>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                       </span>
                       <span>
                           <div>{"u.location.city"}</div>
                           <div>{"u.location.country"}</div>
                           <div></div>
                       </span>
                   </span>
                </div>)
            }
        </div>
    );
}

export default UsersFuncComp;