export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make assync call 
        const firestore = getFirestore();
        firestore.collection('projects').add({
            //'title': project.title
            ...project,
            authorFistName: 'Eduardo',
            authorLastName: 'baiaaaa',
            authorId: 123456,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        });

    }
};