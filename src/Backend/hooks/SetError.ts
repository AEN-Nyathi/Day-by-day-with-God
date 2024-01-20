import { FirebaseError } from 'firebase/app';

function SetError(dispatch: React.Dispatch<ActionTypes>, error: unknown) {
	if (error instanceof FirebaseError) {
		dispatch({
			type: 'isError',
			data: { state: true, message: error.message },
		});
	} else if (typeof error === 'string') {
		dispatch({
			type: 'isError',
			data: { state: true, message: error },
		});
	} else {
		// Handle other types of errors if needed
		console.error('Unhandled error type:', error);
	}
}

export default SetError;
