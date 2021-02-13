const initState = {
    authError: null
};


const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log("ERRU")
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCESS':
            console.log("Sucesso kari");
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCESS':
            console.log("sign ou t com suxeso");
            return state;

        default:
            return state;
    }
}

export default authReducer