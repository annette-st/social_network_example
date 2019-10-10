import React from 'react';
import connect from "react-redux/es/connect/connect";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountPageAC,
    setUsersAC,
    unfollowAC
} from "../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => { // чтобы компонента отобразила список пользователей
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (p) => {
            dispatch(setCurrentPageAC(p));
        },
        setTotalCountPage: (count) => {
            dispatch(setTotalCountPageAC(count));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);