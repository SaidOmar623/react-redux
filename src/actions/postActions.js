import TYPES from '../reducers/types'

function fetchPosts() { 
    return function (dispatch) { 
        fetch('http://localhost:3001/posts')
        .then(res => res.json())
        .then(data => dispatch({
            type: TYPES.FETCH_POST,
            payload: data
        }))
        // const {data} = await axios.get('http://localhost:3001/posts');
        // dispatch({
        //     type: TYPES.FETCH_POST,
        //     payload: data
        // })
    }
 }