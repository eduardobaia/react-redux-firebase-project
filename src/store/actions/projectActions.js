export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make assync call 
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            //'title': project.title
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        });



        firestore.collection('notifications').add(
            {
                ...project,
                content: 'Added a new project',
                user: profile.firstName + profile.lastName,
                time: new Date()
            }).then(() => {
                dispatch({ type: 'CREATE_NOTIFICATION', project });
            }).catch((err) => {
                dispatch({ type: 'CREATE_NOTIFICATION_ERROR', err });
            });





    }
};