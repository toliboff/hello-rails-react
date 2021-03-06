import React, {useEffect}from "react"
import { useDispatch, useSelector } from 'react-redux';

import { getGreeting } from "../reducers/greetingReducer";

const Greeting = () => {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!message) {
      dispatch(getGreeting());
    }
  }, []);

  const getAnotherGreeting =() => {
    dispatch(getGreeting());
  }

    return (
      <React.Fragment>
        <div className='header'>
          <h1>Greeting of the day</h1>
          <button onClick={()=>getAnotherGreeting()} className='btn'>Get another greeting</button>
        </div>
        <p> { message && message.text }</p>
      </React.Fragment>
    );
  }

export default Greeting
