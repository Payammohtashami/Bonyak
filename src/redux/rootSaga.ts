import { all, fork } from "redux-saga/effects";


interface ResponseGenerator{
    
}
function* watchers():ResponseGenerator {
  return yield all([]);
}

export default watchers;
