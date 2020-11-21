export const createProject = (project) =>{
    return (dispatch, getState) =>{
            //make assync call 
            dispatch({type: 'CREATE_PROJECT', project});
    }
};