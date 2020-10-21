   ////////HOOKS CODE///////////////
import React from 'react';
import './App.css';
import ShoppingCart from './components/shopping-cart';

function App() {
	return (
		<div className="App">
			<div className="container">
				<ShoppingCart />
			</div>
		</div>
	);
}

export default App;


    ///////REDUX CODE///////////////
// import React from 'react';
// import store from './store'
// import './App.css';

// import { Provider } from 'react-redux';
// import Posts from './components/posts';
// import PostForm from './components/postForm';

// function App() {
// 	return (
// 		<Provider store={store}>
// 			<div className="App">
// 				<hr/>
// 				<PostForm />
// 				<hr/>
// 				<Posts />
// 			</div>
// 		</Provider>
// 	);
// }

// export default App;
