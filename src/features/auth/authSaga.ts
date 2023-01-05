import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { login, loginFailed, LoginPayload, loginSuccess, logout } from './authSlice';
import { myHistory } from 'components/History';

function* handleLogin(payload: LoginPayload) {
    try {
        yield delay(500);
        localStorage.setItem('access_token', 'fake_token');
        yield put(
            loginSuccess({
                id: 1,
                name: 'Trieu Tam',
            })
        );
        yield fork(myHistory.push, '/admin/dashboard');
    } catch (error: any) {
        yield put(loginFailed(error.message));
    }
}

function* handleLogout() {
    yield delay(500);
    localStorage.removeItem('access_token');
    yield put(logout());
    yield fork(myHistory.push, '/login');
}

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = localStorage.getItem('access_token');

        if (!isLoggedIn) {
            const action: PayloadAction<LoginPayload> = yield take(login.type);
            yield fork(handleLogin, action.payload);
        }

        yield take(logout.type);
        yield call(handleLogout);
    }
}

export default function* authSaga() {
    yield fork(watchLoginFlow);
}
