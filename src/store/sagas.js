import { all, fork } from "redux-saga/effects"

import authenticationSaga from "./auth/saga"

export default function* rootSaga() {
    yield all([
      fork(authenticationSaga)
    ])
  }