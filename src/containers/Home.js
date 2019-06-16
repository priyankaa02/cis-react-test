import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Signup.css'
import { userActions } from '../actions';
import moment from 'moment';

class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleInvoiceSubmit = (event) => {
         this.props.dispatch(userActions.getLargestInvoice())
    }

    handleUnitsSubmit = (event) => {
         this.props.dispatch(userActions.getLargestUnits());
    }

    render() {
        const { user, users, invoice, units } = this.props;
        console.log("user prop",user)
        console.log("invoice",invoice)
        console.log("invoice",units)
        return (
          <div class="container-fluid home" align="center">
            {user && user.full_name && <div>
                <div class="row">
                  <div class="col-sm-4"/>
                  <div class="col-sm-4 justify-content-center"><h1 className="main1">Welcome {user.full_name}!</h1></div>
                  <div class="col-sm-4"><p>
                        <Link to="/" className="link1 btn-link">Logout</Link>
                    </p></div>
                </div>

                <p>You're Successfully logged in!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                         <div>
                          <div className="card">
                            <div class="card-body">
                              <p className="heading">Full Name: <span className="content">{user.full_name}</span></p>
                              <p className="heading">Email: <span className="content">{user.email}</span></p>
                              { user.dob && <p className="heading">Date of Birth: <span className="content">{moment(user.dob).format("YYYY-MM-DD")}</span></p> }
                              <p className="heading">Last Login: <span className="content">{moment(user.last_login).format("YYYY-MM-DD hh.mm.ss")}</span></p>
                            </div>
                          </div>
                          <br/>
                        </div>
                        )}
                    </ul>
                }

            </div> }

            <button className="btn2 btn btn-primary" onClick={this.handleInvoiceSubmit}>Invoice</button>
            {invoice && invoice.loading && <em>Loading data...</em>}
            {invoice &&  invoice.error && <span className="text-danger">ERROR: {users.error}</span>}
            {invoice &&  invoice.largestInvoice &&
                <ul>
                    {invoice.largestInvoice.map((user, index) =>
                     <div>
                      <div className="card">
                        <div class="card-body">
                          <p className="heading">Name: <span className="content">{user.name}</span></p>
                          <p className="heading">Invoice: <span className="content">{user.total_price}</span></p>
                        </div>
                      </div>
                      <br/>
                    </div>
                    )}
                </ul>
            }
            <button className="btn2 btn btn-primary" onClick={this.handleUnitsSubmit}>Units</button>
            {units && units.loading && <em>Loading data...</em>}
            {units && units.error && <span className="text-danger">ERROR: {users.error}</span>}
            {units && units.largestUnits &&
                <ul>
                    {units.largestUnits.map((user, index) =>
                     <div>
                      <div className="card">
                        <div class="card-body">
                          <p className="heading">Name: <span className="content">{user.name}</span></p>
                          <p className="heading">Units: <span className="content">{user.total_units}</span></p>
                        </div>
                      </div>
                      <br/>
                    </div>
                    )}
                </ul>
            }
          </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication,invoice,units } = state;
    const { user } = authentication;
    return {
        user,
        users,
        invoice,
        units
    };
}

export default connect(mapStateToProps, null)(Home)
