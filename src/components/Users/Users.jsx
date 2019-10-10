import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/img/photoNull.jpg'

class Users extends React.Component {
    constructor(props) { // если внутри только super(props), то прописывать конструктор не обязательно
        super(props);
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCountPage(response.data.totalCount);
        })
    }

    setCurrentPage = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>

                <div>
                    {
                    pages.map(p => {
                        return <span onClick={ (e) => this.setCurrentPage(p)} className={this.props.currentPage === p && s.selectedPage}>{p}</span>
                    })
                }
                </div>

                {
                this.props.users.map( u => <div key={u.id}>
                   <span>
                       <div>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.usersPhoto}/>
                       </div>
                       <div>
                           {u.followed
                               ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                               : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
        )
    }
}

export default Users;