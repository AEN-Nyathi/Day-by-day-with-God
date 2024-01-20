export const get = async (path: string) => {
	const { getDoc, doc } = await import('firebase/firestore');
	const { firestore } = await import('@Backend/Firebase/firebase.config');
	const documentData = await getDoc(doc(firestore, path));

	if (documentData.exists()) {
		return documentData.data();
	}

	return null;
};

// export function getOnChange(path: string): DocumentData | undefined {
// 	const [data, setData] = useState<DocumentData | undefined>(undefined);

// 	useEffect(() => {
// 		const unsubscribe = onSnapshot(doc(database, path), (snapshot) => {
// 			setData(snapshot.data());
// 		});

// 		return () => unsubscribe(); // Corrected the return statement
// 	}, [path]);

// 	return data;
// }
