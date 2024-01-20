export default function getStore(ID: 'State'): Promise<unknown> {
	return new Promise((resolve, reject) => {
		(async () => {
			try {
				const openIndexedDB = await import('./IndexedDB');
				const IndexedDB = await openIndexedDB.default();
				const request = IndexedDB.get(ID);
				request.onerror = () => {
					reject(
						request.error || new Error('Error getting data from State')
					);
				};
				request.onsuccess = () => {
					resolve(request.result );
				};
			} catch (error) {
				reject(error);
			}
		})();
	});
}
