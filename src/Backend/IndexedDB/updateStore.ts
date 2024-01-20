export default function updateStore(Data: unknown,
): Promise<unknown> {
	return new Promise((resolve, reject) => {
		(async () => {
			try {
				const openIndexedDB = await import('./IndexedDB');
				const IndexedDB = await openIndexedDB.default();
				const request = IndexedDB.put(Data);
				request.onsuccess = () => {
					resolve(Data);
				};
				request.onerror = () => {
					reject(request.error || new Error('Error updating data on State'));
				};
			} catch (error) {
				reject(error);
			}
		})();
	});
}
