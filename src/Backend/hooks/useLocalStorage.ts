import { useCallback, useState, useEffect } from 'react';

export function useLocalStorage(
	key: 'CurrentUserID' | 'WorkerStage'
): [string | undefined, (value: string) => void, () => void] {
	const storage = window.localStorage;
	const [value, setValue] = useState<string | undefined>(() => {
		const storedValue = storage.getItem(key);
		return storedValue ? JSON.parse(storedValue) : undefined;
	});

	useEffect(() => {
		if (value === undefined) {
			storage.removeItem(key);
		} else {
			storage.setItem(key, JSON.stringify(value));
		}
	}, [key, value, storage]);

	const remove = useCallback(() => setValue(undefined), []);

	return [value, setValue, remove];
}
