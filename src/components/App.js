import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import {initializeStore} from "../reducers/store";
import {INITIALSTATE} from "../constants/InitialState";
import "primeflex/primeflex.css";
import '../global_styles/App.scss';
import Footer from './Footer/Footer';
import Home from '../pages/Home';
import Repository from '../pages/Repository'


const store = initializeStore({...INITIALSTATE});

const App = () => {

    return (
        <Provider store={store}>
            <Router>
                <Switch>

                    <Route exact path="/" component={Home}/>

                    <Route exact path="/?name=:queryInput" component={Home}/>
                    {/*<Route path="/bar" children={<Bar />} />*/}

                    {/*<Route exact path="/repo/:owner/:name" component={Repository}/>*/}
                    <Route exact path="/repo/:owner/:name" children={<Repository/>}/>

                </Switch>
            </Router>
            <footer>
                <Footer/>
            </footer>
        </Provider>
    );
};

export default App;
