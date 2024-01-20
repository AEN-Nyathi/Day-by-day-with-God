import { User } from 'firebase/auth';

export default async function authenticateUser(): Promise<User | null> {
	const { auth } = await import('../firebase.config');
	const { onAuthStateChanged } = await import('firebase/auth');

	return new Promise((resolve, reject) => {
			onAuthStateChanged(
				auth,
				(user) => {
					resolve(user);
					if (!user) localStorage.removeItem('CurrentUserID');
				},
				(error) => {
					reject(new Error('Failed to retrieve authenticated user ' + error));
				}
			);
	});
}
