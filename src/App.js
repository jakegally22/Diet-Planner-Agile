import './App.css';
import React, {useState, useEffect, useReducer} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Meal from './pages/Meal';
import Search from './pages/Search';
import Food from './pages/Food';
import SignIn from './pages/SignIn';
import InfoSheet from './pages/InfoSheet';
import {dateReducer, resultsReducer, configReducer} from './utils/reducers';
import Settings from './pages/Settings';
import {defaultSettings} from './utils/constants';
import firebase from './firebase';


function App() {

  const [stateDate, dispatchDate] = useReducer(dateReducer, {date: new Date()});
  const [stateResults, dispatchResults] = useReducer(resultsReducer, {results: []});
  const [stateConfig, dispatchConfig] = useReducer(configReducer, {config: defaultSettings});
  const [isSigned, setIsSigned] = useState(!!firebase.auth().currentUser);

  firebase.auth().onAuthStateChanged(() => {
    setIsSigned(!!firebase.auth().currentUser);
  });

  useEffect(() => {
    let abortController = new AbortController();
    let aborted = abortController.signal.aborted;
    if (isSigned===true ){
      let firestore = firebase.firestore();
      const usersRef = firestore.collection('users').doc(firebase.auth().currentUser.uid).collection('settings').doc('config')
      usersRef.get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
              usersRef.onSnapshot((doc) => {
                aborted = abortController.signal.aborted;
                if (aborted===false){
                  dispatchConfig({type: 'update', payload: doc.data() })
                }
              });
            } else {
              usersRef.set(defaultSettings);
            }
      });
    }
    return () => {
      abortController.abort();
    };
  }, [isSigned]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={() => <Home date={stateDate.date} dispatchDate={dispatchDate} config={stateConfig.config} dispatchConfig={dispatchConfig}/>}/>
          <Route exact path='/meal/:id' component={() => <Meal date={stateDate.date} dispatchDate={dispatchDate} config={stateConfig.config}/>}/>
          <Route exact path='/signin' component={() => <SignIn/>}/>
          <Route exact path='/meal/:id/search' component={() => <Search date={stateDate.date} results={stateResults.results} dispatchResults={dispatchResults}/>}/>
          <Route exact path='/meal/:id/search/:id' component={() => <Food date={stateDate.date}/>}/>
          <Route exact path='/infosheet' component={() => <InfoSheet date={stateDate.date} config={stateConfig.config} />}/>
          <Route exact path='/settings' component={() => <Settings config={stateConfig.config} dispatchConfig={dispatchConfig}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
