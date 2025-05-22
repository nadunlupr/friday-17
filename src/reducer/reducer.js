export default function reducer(state, action) {
    switch (action.type) {
        case 'increment_age':
            return {
                ...state,
                age: state.age + action.payload.age
            }
        case 'set_name':
            return {
                ...state,
                name: 'my name'
            }
    }
}


////////////////
// action = {
//     type: '',
//     payload: {
//         age: 5
//     }
// }