import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import RepositoriesContainer from '../containers/RepositoriesContainer';

import Main from '../components/Layout/Main/Main'

const Home = () =>
	<React.Fragment>
		<header>
		<SearchContainer />
		</header>
		<main>
			<Main>
		<RepositoriesContainer />
			</Main>
		</main>
	</React.Fragment>

export default Home;