import { all, call, takeLatest } from "@redux-saga/core/effects";
import { auth,CreateUserProfileDocument,Googleprovider } from "../../firebase/firebase";

export function* fetchMenu(){
    yield auth.signInWithPopup(Googleprovider)
    yield call(CreateUserProfileDocument);
}

export function* FetchMenuSaga(){
    yield takeLatest('Google_SignIn_Start',fetchMenu)
}