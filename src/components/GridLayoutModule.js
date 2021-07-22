import React from 'react';
import {connect} from "react-redux";
import Teams from "./Teams";
import Channels from "./Channels";
import MessagesBox from "./MassagesBox";

const GridLayoutModule = () => {
    return (
        <div className="app-layout">
            <Teams/>
           <Channels/>
           <MessagesBox/>
            <div className="input box">
                <input type="text" placeholder="Have you tried the CSS Grid Layout Module?"/>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(GridLayoutModule)