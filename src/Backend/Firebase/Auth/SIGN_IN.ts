export default async function SIGN_IN(
	dispatch: React.Dispatch<ActionTypes>,
	data: { Email: string; Password: string }
) {
	try {
		const { auth, firestore } = await import('../firebase.config');
		if (auth.currentUser) return;
		const { Load } = await import('@Backend/hooks/SetLoading');
		Load(
			dispatch,
			'Signing In With Email And Password, please wait...',
			'Signing up...'
		);

		// Dynamically import Firebase auth and firestore
		const { signInWithEmailAndPassword } = await import('firebase/auth');
		const { user } = await signInWithEmailAndPassword(
			auth,
			data.Email,
			data.Password
		);

		Load(dispatch, 'updating Auth State, please wait...', 'Signing up...');
		const { doc, updateDoc } = await import('firebase/firestore');
		await updateDoc(doc(firestore, 'users', user.uid), {
			isOnline: true,
		});

		// Dynamically import updateStore
		const updateStore = await import('@Backend/IndexedDB/updateStore');
		return await updateStore.default(dispatch);
	} catch (error) {
		// Dynamically import SetError
		const SetError = await import('@Backend/hooks/SetError');
		SetError.default(dispatch, error);
	}
}
