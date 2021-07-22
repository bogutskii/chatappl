import React from 'react';
import {connect} from "react-redux";

const MessagesBox = (props) => {
    return (
        <div>
        <div className="header box">Header</div>
    <div className="messages box">
        <ul className="message-list">
            {props.messages.map(msg=> <li>{msg.textmsg}</li>)}
        </ul>
    </div>
        </div>
    );
};



const mapStateToProps = (state) => ({
    messages: state.messages
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

export default connect(mapStateToProps, mapDispatchToProps)(MessagesBox)