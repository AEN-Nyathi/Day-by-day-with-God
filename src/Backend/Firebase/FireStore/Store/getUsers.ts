export default async function getUsers(
	ToFetch: string[]
): Promise<UserTypes[]> {
	const { firestore } = await import('../../firebase.config');
	const { collection, onSnapshot, query, where } = await import(
		'firebase/firestore'
	);

	const UsersQuery = query(
		collection(firestore, 'users'),
		where('ID', 'in', ToFetch)
	);

	return new Promise((resolve, reject) => {
		onSnapshot(
			UsersQuery,
			{ includeMetadataChanges: true },
			(querySnapshot) => {
				const users: UserTypes[] = [];
				querySnapshot.forEach((doc) => {
					users.push(doc.data() as UserTypes);
				});
				resolve(users);
			},
			(error) => {
				reject(error);
			}
		);
	});
}
