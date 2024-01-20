import { FormData } from '@Auth/types';

import { get } from '@Backend/Firebase/FireStore/Document/get';
import { arrayRemove, doc, updateDoc } from 'firebase/firestore';

import { UseFormSetError, UseFormSetValue } from 'react-hook-form';

const VerifiedUser = async (
	person: UserTypes,
	setError: UseFormSetError<FormData>,
	setJoinedUnder: React.Dispatch<React.SetStateAction<UserTypes | null>>,
	JoinedUnder: UserTypes | null,
	setValue: UseFormSetValue<FormData>
) => {
	try {
		const data = await get(`users/${person.ID}/More/hierarchy`);
		if (data) {
			if (data.underMe.length < 4) {
				const leadersPromises = data.Leaders.map(async (Leader: string) => {
					const leaderData = (await get(`users/${Leader}`)) as UserTypes;
					return leaderData.Confirm.includes(person.ID);
				});

				const leaderResults = await Promise.all(leadersPromises);

				if (leaderResults.includes(false)) {
					console.log('User is not confirmed by some leaders.');
					setError('JoinedUnder', {
						type: 'Payment',
						message:
							'This User still has pending payments. if you still want to join under this user then you will have to wait for this user payments to be confirmed by all members',
					});
				} else {
					console.log('All leaders have confirmed the user.');
					setJoinedUnder(person);
					setValue('JoinedUnder', person.ID);
				}
			} else {
				console.log('User has too many subordinates.');
				setError('JoinedUnder', {
					type: 'Full',
					message: `${JoinedUnder?.Name} Already has 4 members.`,
				});
				const { firestore } = await import('@Backend/Firebase/firebase.config');
				await updateDoc(doc(firestore, 'Helper/UsersList'), {
					list: arrayRemove(person),
				});
			}
		} else {
			console.log('No such document!');
			const { firestore } = await import('@Backend/Firebase/firebase.config');
			await updateDoc(doc(firestore, 'Helper/UsersList'), {
				list: arrayRemove(person),
			});
		}
	} catch (error) {
		console.error('Error fetching hierarchy:', error);
	}
};
export default VerifiedUser;
