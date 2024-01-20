import { Load } from '@Backend/hooks/SetLoading';

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
		const { auth, storage } = await import('../../firebase.config');
		if (auth.currentUser) return;

		const { createUserWithEmailAndPassword, updateProfile } = await import(
			'firebase/auth'
		);
		const { getDownloadURL, ref, uploadBytes } = await import(
			'firebase/storage'
		);

		Load(
			dispatch,
			'creating User With Email And Password, please wait...',
			'Signing up...'
		);

		const { user } = await createUserWithEmailAndPassword(
			auth,
			data.Email,
			data.Password
		);
		dispatch({
			type: 'isError',
			data: { state: false, message: '' },
		});

		Load(dispatch, 'Up Loading profile Image, please wait...', 'Signing up...');
		const imageRef = ref(storage, `users/${user.uid}`);
		await uploadBytes(imageRef, data.Image[0]);

		Load(dispatch, 'DownLoading, please wait...', 'Signing up...');
		const url = await getDownloadURL(imageRef);
		await updateProfile(user, {
			displayName: data.Name,
			photoURL: url,
		});

		const Updater = await import('@Backend/Firebase/Auth/SIGN_UP/Updater');
		Load(dispatch, 'Updater running, please wait...', 'Signing up...');
		await Updater.default(dispatch, data.JoinedUnder);

		const Transactions = await import(
			'@Backend/Firebase/Auth/SIGN_UP/Transactions'
		);
		Load(dispatch, 'Updater Transactions, please wait...', 'Signing up...');
		await Transactions.default(dispatch, data.JoinedUnder);

		const updateStore = await import('@Backend/IndexedDB/updateStore');
		return await updateStore.default(dispatch);
	} catch (error) {
		const SetError = await import('@Backend/hooks/SetError');
		SetError.default(dispatch, error);
	}
}
