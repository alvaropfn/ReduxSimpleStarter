import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAtvWs0uEMpwZ8XqyODJka88RW69Ba40cg';

//create new component should produce HTML
class App extends Component{
	constructor(props){
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'HotS'},
		(videos) => {this.setState({videos});
		});
	}

	render(){
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}

//put html genereted into de DOM
ReactDOM.render(
	<App />,
	document.querySelector('.container')
);
