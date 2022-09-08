import actionTypes from "./actionTypes"

export default {
    request: (params:any, ctx:any) => ({
        type: actionTypes.TOAST_REQUEST,
        params,
        ctx
    }),
    receive: (data:any, ctx:any) => ({
        type: actionTypes.TOAST_RECEIVE,
        data,
        ctx
    }),
    initial: (ctx:any) => ({
        type: actionTypes.TOAST_INITIAL,
        ctx
    }),
    failure: (errorMessage:any) => ({
        type: actionTypes.TOAST_FAILURE,
        errorMessage
    }),
    accept: (accept:any, ctx:any) => ({
        type: actionTypes.TOAST_ACCEPT,
        accept,
        ctx,
    }),
}