import { takeEvery, delay, put } from "redux-saga/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { incrementSaga, incrementSagaSuccess } from "./counterSlice"


function* incrementAsyncSaga(action: PayloadAction<number>){
    yield delay(1000)
    yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga () {
    yield takeEvery(incrementSaga.type, incrementAsyncSaga)
}