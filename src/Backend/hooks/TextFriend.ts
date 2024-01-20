import { NavigateFunction } from 'react-router-dom';

const TextFriend = async (
	user: UserTypes,
	Person: UserTypes,
	Friends: UserTypes[],
	navigate: NavigateFunction
) => {
	navigate(`/Messages/Friends `, {
		state: {
			Doc_ID: user.ID > Person.ID ? user.ID + Person.ID : Person.ID + user.ID,
			person: Person,
			back: 'Chats',
		},
	});

	if (!Friends.some((person) => person.ID === Person.ID)) {
		console.log('select Person ', true);
		const { firestore } = await import('@Backend/Firebase/firebase.config');
		const { doc, updateDoc, arrayUnion } = await import('firebase/firestore');

		await updateDoc(doc(firestore, 'users', user.ID, 'More', 'hierarchy'), {
			Friends: arrayUnion(Person.ID),
		});

		await updateDoc(doc(firestore, 'users', Person.ID, 'More', 'hierarchy'), {
			Friends: arrayUnion(user.ID),
		});
	} else {
		console.log('select Person ', false);
	}
};
export default TextFriend;
