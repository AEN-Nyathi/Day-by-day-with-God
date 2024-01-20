import { Transaction } from 'firebase/firestore';
import { UserInfo } from '../../FireStore/Store/getUserInfo';

const Under_Me = async (
	dispatch: React.Dispatch<ActionTypes>,
	transaction: Transaction,
	Document: UserInfo
) => {
	try {
		const { auth, firestore } = await import('../../firebase.config');
		if (!auth.currentUser) throw { message: 'No user' };

		const { Load } = await import('@Backend/hooks/SetLoading');
		Load(dispatch, `Adding my info to ${Document.ID}`, 'Signing up...');

		const { doc, arrayUnion } = await import('firebase/firestore');
		const Ref = doc(firestore, 'users', Document.ID, 'More', 'hierarchy');

		transaction.update(Ref, {
			underMe: arrayUnion(auth.currentUser.uid),
		});
	} catch (error) {
		const SetError = await import('@Backend/hooks/SetError');
		SetError.default(dispatch, error);
	}
};
export default Under_Me;
