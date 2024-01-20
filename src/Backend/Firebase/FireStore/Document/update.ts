import { DocumentData } from 'firebase/firestore';

const update = async (data: DocumentData, Path: string) => {
	const { doc, updateDoc } = await import('firebase/firestore');
	const { firestore } = await import('@Backend/Firebase/firebase.config');
	await updateDoc(doc(firestore, Path), data);
};
export default update;
