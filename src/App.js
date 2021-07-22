import './App.css';
import {connect} from "react-redux";
import GridLayoutModule from "./components/GridLayoutModule";

function App(props) {
  return (
    <div className="App">

        {/*<ul>*/}
        {/*    {props.userList.map(user=> <li>{user}</li>)}*/}

        {/*</ul>*/}

        <GridLayoutModule/>

    </div>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
