import { Transaction } from 'firebase/firestore';

const Get_User = async (
	dispatch: React.Dispatch<ActionTypes>,
	transaction: Transaction,
	ID: string
) => {
	try {
		const { firestore } = await import('@Backend/Firebase/firebase.config');
		const { doc } = await import('firebase/firestore');

		const Ref = doc(firestore, 'users', ID, 'More', 'hierarchy');
		const Data = await transaction.get(Ref);
		const { Load } = await import('@Backend/hooks/SetLoading');
		Load(dispatch, `Identifying Your Leader`, 'Signing up...');
		if (Data.exists()) {
			return Data.data();
		}
		return null;
	} catch (error) {
		const SetError = await import('@Backend/hooks/SetError');
		SetError.default(dispatch, error);
	}
};
export default Get_User;
