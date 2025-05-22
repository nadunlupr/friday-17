import { useState, useEffect, useReducer } from 'react';
import reducer from '../../reducer/reducer';
import { store as initialState } from '../../reducer/store';


function Counter(props) {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(0);

    useEffect(() => {
        console.log('inside useEffect');
    }, []);

    const [state, dispatch] = useReducer(reducer, initialState);

    // useEffect(()=, []> {
    //     console.log('inside useEffect dependant on count');
    // }, [count]);

    return (
        <div>
            <button onClick={() => setCount(count => count + 1)}>Count +1</button>
            <button onClick={() => setAge(age => age + 5)}> Age + 5</button>
            <button onClick={() => dispatch({
                type: 'increment_age',
                payload: {
                    age: 10
                }
            })} >Dispatch Action</button>
            <div>
                Count: {count}
            </div>
            <div>
                Age: {age}
            </div>
            <div>
                Age from Reducer: {state.age}
            </div>
            <div>
                Name from Reducer: {state.name}
            </div>
        </div>
    );
}

export default Counter;