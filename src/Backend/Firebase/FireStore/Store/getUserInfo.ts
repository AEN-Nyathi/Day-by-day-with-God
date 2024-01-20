interface childrenType {
	ID: string;
	JoinedUnder: string;
	Picture: string;
	createdAt: Date;
	name: string;
}

export interface UserInfo {
	Children: childrenType[];
	createdAt: Date;
	ID: string;
	JoinedUnder: string;
	Leaders: string[];
	Friends: string[];
	underMe: string[];
}

export default async function getUserInfo(uid: string): Promise<UserInfo> {
	const { firestore } = await import('../../firebase.config');
	const { doc, onSnapshot } = await import('firebase/firestore');
	const userInfoRef = doc(firestore, 'users', uid, 'More', 'hierarchy');

	return new Promise((resolve, reject) => {
		onSnapshot(
			userInfoRef,
			{ includeMetadataChanges: true },
			(doc) => {
				resolve(doc.data() as UserInfo);
			},
			(error) => {
				reject(error);
			}
		);
	});
}
