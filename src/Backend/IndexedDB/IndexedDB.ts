export default function openIndexedDB(): Promise<IDBObjectStore> {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open('App', 1);
		request.onerror = () => reject(new Error('Failed to open IndexedDB'));
		request.onupgradeneeded = () => {
			request.result.createObjectStore('State', {
				keyPath: 'ID',
			});
			
		};

		request.onsuccess = () => {
			const transaction = request.result.transaction(['State'], 'readwrite');
			resolve(transaction.objectStore('State'));
		}
	});
}
