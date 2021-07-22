import React from 'react';
import {connect} from "react-redux";

const Channels = (props) => {
    return (
        <div className="channels box">Channels

            <ul>
                {props.channels.map(channel=> <li>{channel}</li>)}
            </ul>
        </div>

    );
};



const mapStateToProps = (state) => ({
    channels: state.channels
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

export default connect(mapStateToProps, mapDispatchToProps)(Channels)