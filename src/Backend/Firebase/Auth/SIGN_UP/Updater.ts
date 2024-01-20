import { doc, writeBatch, arrayUnion, Timestamp } from 'firebase/firestore';


const Updater = async (
	dispatch: React.Dispatch<ActionTypes>,
	JoinedUnder: string
) => {
	try {
		const { auth, firestore } = await import('../../firebase.config');
		if (!auth.currentUser) throw { message: 'No user' };

		const batch = writeBatch(firestore);
		const searchListRef = doc(firestore, 'Helper', 'UsersList');
		batch.update(searchListRef, {
			list: arrayUnion({
				ID: auth.currentUser.uid,
				Name: auth.currentUser.displayName,
				Picture: auth.currentUser.photoURL,
				createdAt: Timestamp.fromDate(new Date()),
			}),
		});

		const MyRef = doc(firestore, 'users', auth.currentUser.uid);
		batch.set(MyRef, {
			ID: auth.currentUser.uid,
			PicturePath: '',
			Picture: auth.currentUser.photoURL,
			Name: auth.currentUser.displayName,
			YourEmail: auth.currentUser.email,
			Confirm: [],
			JoinedUnder: JoinedUnder,
			Theme: {
				Color: '4 0 255',
				Transparency: 0.25,
				Mode: 'dark',
				HexColor: '#0400ff',
			},
			Leaders: [],
			createdAt: Timestamp.fromDate(new Date()),
			Bank: {
				Name: '',
				AccountNumber: '',
				BankName: '',
				BranchCode: '',
				PhoneNumber: '',
			},
		});

		const childrenRef = doc(
			firestore,
			'users',
			auth.currentUser.uid,
			'More',
			'hierarchy'
		);
		batch.set(childrenRef, {
			JoinedUnder: JoinedUnder,
			ID: auth.currentUser.uid,
			createdAt: Timestamp.fromDate(new Date()),
			Children: [],
			underMe: [],
			Friends: [],
			Leaders: [],
		});

		await batch.commit();
	} catch (error) {
		const SetError = await import('@Backend/hooks/SetError');
		SetError.default(dispatch, error);
	}
};
export default Updater;
