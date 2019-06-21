import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { appConstant } from '../constants'
import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import Landing from './Landing'
import Login from './Login'
import Signup from './Signup'
import './Signup.css'
import Home from './Home'

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

class App extends Component {

  constructor(props) {
        super(props);

        // const { dispatch } = this.props;
        // history.listen((location, action) => {
        //     // clear alert on location change
        //     dispatch(alertActions.clear());
        // });
    }

  onBackButtonEvent(e) {
    e.preventDefault()
    // history.goBack(1)

    // failed to resume component state, force reload
    window.location.reload()
  }

  render() {
    const { alert } = this.props;
    return (
             <div>
                    <div className="app">
                        {alert.message &&
                            <div className={`alert ${alert.type} alert-dismissible`}>
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>{alert.message}</div>
                        }
                        <Switch>
                          <PrivateRoute exact path={appConstant.ROUTE_PATH_HOME} component={Home}/>
                          <Route exact path={appConstant.ROUTE_PATH_LANDING} component={Landing}/>
                          <Route exact path={appConstant.ROUTE_PATH_LOGIN} component={Login}/>
                          <Route exact path={appConstant.ROUTE_PATH_SIGNUP} component={Signup}/>
                          <Route path="*" render={(props) => {
                            return <Redirect to={{ pathname: appConstant.ROUTE_PATH_LANDING, state: { from: props.location } }}/>
                          }}/>
                        </Switch>
                    </div>
             </div>
    )
  }
}

export default connect(mapStateToProps, null)(App)
