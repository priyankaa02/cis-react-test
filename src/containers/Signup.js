import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Signup.css'
import { userActions } from '../actions';
import { GoogleLogin } from 'react-google-login';

// const responseGoogle = (response) => {
//      console.log(response);
// }

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                full_name: '',
                email: '',
                dob: '',
                password: ''
            },
            user1: {
                full_name: '',
                email: '',
                dob: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }


    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.full_name && user.email && user.dob && user.password) {
            dispatch(userActions.register(user));
        }
    }

    responseGoogle = (response) => {
         console.log(response.profileObj);
         if(response && response.profileObj){
           this.setState({
               user1: {
                   full_name: response.profileObj.name,
                   email: response.profileObj.email,
                   provider: 'google',
                   password: '',
                   dob: null
               }
           });
           this.props.dispatch(userActions.register(this.state.user1));
       }
    }


    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
        <div className="limiter">
          <div className="container-signup" align="center">
           <div className="signup-more"></div>
            <div className="wrap-signup">
                <h2 className="main">Create an account</h2>
                <form name="form" className="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.full_name ? ' has-error' : '')}>
                        <input type="text" className="form-control input" placeholder="Full Name" name="full_name" value={user.full_name} onChange={this.handleChange} />
                        {submitted && !user.full_name &&
                            <div className="help-block"> Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <input type="email" className="form-control input" name="email" placeholder="Email" value={user.email} onChange={this.handleChange} />
                        {submitted && !user.email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.dob ? ' has-error' : '')}>
                        <input type="date" className="form-control input" name="dob" placeholder="DOB" value={user.dob} onChange={this.handleChange} />
                        {submitted && !user.dob &&
                            <div className="help-block">DOB is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <input type="password" className="form-control input" name="password" placeholder="Password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="signup-btn btn btn-primary">Register</button>
                        {registering &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                    <div className="googleSignUp">
                       <p> or signup with </p>
                       <br/>
                      <GoogleLogin
                        clientId="488240074963-dtr3upu5ale7sqj4k0opk6p3s5jd4eg5.apps.googleusercontent.com"
                        buttonText=''
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                      />
                    </div>
                    <div className="link1">
                      <Link to="/login" className="btn-link">Already Registered? SignIn</Link>
                    </div>
                </form>
            </div>
          </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

export default connect(mapStateToProps, null)(Signup)
