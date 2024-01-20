export default async function getStore(uid: string): Promise<StoreProps> {
	try {
		const getUserInfo = await import('./getUserInfo');
		const UserInfo = await getUserInfo.default(uid);

		const getUsers = await import('./getUsers');
		const users = await getUsers.default([
			...UserInfo.Children.map((child) => child.ID),
			...UserInfo.Friends,
			UserInfo.JoinedUnder,
			...UserInfo.underMe,
			...UserInfo.Leaders,
			UserInfo.ID,
		]);

		const userFilter = (ids: string[]) =>
			users.filter((user) => ids.includes(user.ID));

		const storeData = {
			Children: userFilter(UserInfo.Children.map((child) => child.ID)),
			UnderMe: userFilter(Array.from(UserInfo.underMe)),
			Friends: userFilter(Array.from(UserInfo.Friends)),
			Leaders: userFilter(Array.from(UserInfo.Leaders)),
			user: users.find((user) => user.ID === UserInfo.ID),
			JoinedUnder: users.find((user) => user.ID === UserInfo.JoinedUnder),
			users,
		};
		return storeData as StoreProps;
	} catch (error) {
		console.error('Error in getStore:', error);
		// You can re-throw the error or handle it appropriately
		throw error;
	}
}
