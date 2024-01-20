import { UserInfo } from '../../FireStore/Store/getUserInfo';

const Transactions = async (
	dispatch: React.Dispatch<ActionTypes>,
	JoinedUnder: string
) => {
	try {
		const { auth, firestore } = await import('../../firebase.config');
		if (!auth.currentUser) throw { message: 'No user' };

		const { runTransaction } = await import('firebase/firestore');
		await runTransaction(firestore, async (transaction) => {
			const Get_User = await import('./Get_User');
			const Add_Leader = await import('./Add_Leader');
			const User1 = (await Get_User.default(
				dispatch,
				transaction,
				JoinedUnder
			)) as UserInfo;
			if (User1) {
				const User2 = (await Get_User.default(
					dispatch,
					transaction,
					User1.JoinedUnder
				)) as UserInfo;
				if (User2) {
					const User3 = (await Get_User.default(
						dispatch,
						transaction,
						User2.JoinedUnder
					)) as UserInfo;
					if (User3) {
						const User4 = (await Get_User.default(
							dispatch,
							transaction,
							User3.JoinedUnder
						)) as UserInfo;
						if (User4) {
							await Add_Leader.default(
								dispatch,
								transaction,
								User4,
								JoinedUnder
							);
						}
						await Add_Leader.default(dispatch, transaction, User3, JoinedUnder);
					}
					await Add_Leader.default(dispatch, transaction, User2, JoinedUnder);
				}
				await Add_Leader.default(dispatch, transaction, User1, JoinedUnder);
				const Under_Me = await import('./Under_Me');
				Under_Me.default(dispatch, transaction, User1);
			}
		});
	} catch (error) {
		const SetError = await import('@Backend/hooks/SetError');
		SetError.default(dispatch, error);
	}
};
export default Transactions;
