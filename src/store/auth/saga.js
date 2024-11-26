import { call } from "redux-saga/effects";

function* loginSaga(action) {
    const authUser = localStorage.getItem("authUser")
    const data = JSON.parse(authUser)
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
      yield put(loginSuccess(user));
    } catch (error) {
      yield put(loginFailure(error?.message));
      ToastAlert.fire({ icon: ToastAlertIconType.ERROR, title: "Invalid Credientials" });
    }
  }