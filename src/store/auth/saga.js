import { call, put, takeEvery } from "redux-saga/effects";
import { loginRequestFailure, loginRequestSuccess } from "./actions";
import { LOGIN_REQUEST } from "./actionTypes";

function* loginSaga(action) {
    try {
      const user = yield call("URL HERE", action.payload, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      const authUser = {
        email: user.user.email,
        token: user.access_token
      };
      localStorage.setItem("authUser", JSON.stringify(authUser));
      action.payload.history("/chat");
      yield put(loginRequestSuccess(user));
    } catch (error) {
      yield put(loginRequestFailure(error?.message));
      console.error("Error")
    }
  }

  function* authenticationSaga() {
    yield takeEvery(LOGIN_REQUEST, loginSaga);
  }

  export default authenticationSaga