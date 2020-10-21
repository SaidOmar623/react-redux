import TYPES from '../reducers/types'

export function fetchPosts() { 
    return function (dispatch) { 
        fetch('http://localhost:3001/posts')
        .then(res => res.json())
        .then(data => 
            dispatch({
                type: TYPES.FETCH_POST,
                payload: data
            })
        )
        // const {data} = await axios.get('http://localhost:3001/posts');
        // dispatch({
        //     type: TYPES.FETCH_POST,
        //     payload: data
        // })
    }
 }

 export function addPost(post) {
     return function(dispatch){
        fetch('http://localhost:3001/posts',{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(post)
        })
        .then(res=>res.json())
        .then(data=>
            dispatch({
                type: TYPES.ADD_POST,
                payload: data
            })
        );
     }
     
 }