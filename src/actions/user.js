import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    getLargestInvoice,
    getLargestUnits
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/home');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error("Please first register yourself"));
                    setTimeout(() => {
                        window.location.reload(true);
                    }, 2000);
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                  console.log("user provider",user.provider)
                  if (user.provider === "google"){
                    dispatch(success(user));
                    localStorage.setItem('user', JSON.stringify(user));
                    history.push('/home');
                    window.location.reload(true);
                    dispatch(alertActions.success('Registration successful'));
                  } else {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                  }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getLargestUnits() {
    return dispatch => {
        dispatch(request());

        userService.getLargestUnits()
            .then(
                data => dispatch(success(data)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETLARGESTUNITS_REQUEST } }
    function success(data) { return { type: userConstants.GETLARGESTUNITS_SUCCESS, data } }
    function failure(error) { return { type: userConstants.GETLARGESTUNITS_FAILURE, error } }
}

function getLargestInvoice() {
    return dispatch => {
        dispatch(request());

        userService.getLargestInvoice()
            .then(
                data => dispatch(success(data)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETLARGESTINVOICE_REQUEST } }
    function success(data) { return { type: userConstants.GETLARGESTINVOICE_SUCCESS, data } }
    function failure(error) { return { type: userConstants.GETLARGESTINVOICE_FAILURE, error } }
}
