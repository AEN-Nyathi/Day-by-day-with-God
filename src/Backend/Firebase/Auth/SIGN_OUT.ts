export default async function SIGN_OUT(dispatch: React.Dispatch<ActionTypes>) {
	try {
		// Dynamically import Firebase auth and firestore
		const { auth, firestore } = await import('../firebase.config');
		if (!auth.currentUser) return;

		const UID = auth.currentUser.uid;
		const { Load } = await import('@Backend/hooks/SetLoading');
		const { doc, updateDoc } = await import('firebase/firestore');

		Load(dispatch, 'you are been Sign Out, please wait...', 'Signing out...');
		await updateDoc(doc(firestore, 'users', UID), {
			isOnline: false,
		});

		Load(dispatch, 'almost done, please wait...', 'Signing out...');
		const { signOut } = await import('firebase/auth');
		await signOut(auth);

		const updateStore = await import('@Backend/IndexedDB/updateStore');
		return await updateStore.default(dispatch);
	} catch (error) {
		const SetError = await import('@Backend/hooks/SetError');
		SetError.default(dispatch, error);
	}
}
