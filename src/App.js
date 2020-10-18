import React from 'react';
import store from './store'
import './App.css';

import { Provider } from 'react-redux';
import Posts from './components/posts';
import PostForm from './components/postForm';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<hr/>
				<PostForm />
				<hr/>
				<Posts />
			</div>
		</Provider>
	);
}

export default App;
