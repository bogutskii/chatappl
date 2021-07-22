import React from 'react';
import {connect} from "react-redux";

const Teams = (props) => {
    return (
        <div className="teams box">Teams

            <ul>
                {props.userList.map(user=> <li>{user}</li>)}

            </ul>
        </div>

    );
};



const mapStateToProps = (state) => ({
    userList: state.userList
});

const mapDispatchToProps = (dispatch) => ({
    // changeCreateModal: (value) =>
    //   dispatch({
    //     type: 'CHANGE_CREATE_MODAL',
    //     payload: {
    //       value: value,
    //     },
    //   }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams)