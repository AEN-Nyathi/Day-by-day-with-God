import { UserInfo } from '../../FireStore/Store/getUserInfo';
import { Transaction } from 'firebase/firestore';

const Add_Leader = async (
	dispatch: React.Dispatch<ActionTypes>,
	transaction: Transaction,
	Document: UserInfo,
	JoinedUnder: string
) => {
	try {
		const { auth, firestore } = await import('../../firebase.config');
		if (!auth.currentUser) throw { message: 'No user' };

		const { Load } = await import('@Backend/hooks/SetLoading');
		Load(dispatch, `Add ${Document.ID} as Leader`, 'Signing up...');
		const { Timestamp, arrayUnion, doc } = await import('firebase/firestore');

		const MyRef = doc(firestore, 'users', auth.currentUser.uid);
		const MyRefMore = doc(
			firestore,
			'users',
			auth.currentUser.uid,
			'More',
			'hierarchy'
		);

		const MyDetails = {
			JoinedUnder: JoinedUnder,
			ID: auth.currentUser.uid,
			name: auth.currentUser.displayName,
			Picture: auth.currentUser.photoURL,
			createdAt: Timestamp.fromDate(new Date()),
		};

		const Ref = doc(firestore, 'users', Document.ID, 'More', 'hierarchy');

		transaction.update(Ref, {
			Children: arrayUnion(MyDetails),
		});
		transaction.update(MyRefMore, {
			Leaders: arrayUnion(Document.ID),
		});
		transaction.update(MyRef, {
			Leaders: arrayUnion(Document.ID),
		});
	} catch (error) {
		const SetError = await import('@Backend/hooks/SetError');
		SetError.default(dispatch, error);
	}
};
export default Add_Leader;
