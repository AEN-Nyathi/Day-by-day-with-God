
export default async function SIGN_UP(
	dispatch: React.Dispatch<ActionTypes>,
	data: {
		Email: string;
		Password: string;
		Name: string;
		Image: FileList;
		JoinedUnder: string;
	}
) {
	try {
		// Dynamically import Firebase auth and storage
		const { auth,  } = await import('../../firebase.config');
		if (auth.currentUser) return;

		const { createUserWithEmailAndPassword, updateProfile } = await import(
			'firebase/auth'
		);
	
		const { user } = await createUserWithEmailAndPassword(
			auth,
			data.Email,
			data.Password
		);
	

		await updateProfile(user, {
			displayName: data.Name,
		});

	
	} catch (error) {
		const SetError = await import('@Backend/hooks/SetError');
		SetError.default(dispatch, error);
	}
}
