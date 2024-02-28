import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getPerformance } from 'firebase/performance';
import { getAnalytics } from 'firebase/analytics';
// import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
	databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

// if (!import.meta.env.NODE_ENV || import.meta.env.NODE_ENV === 'development') {
// 	window.FIREBASE_APPCHECK_DEBUG_TOKEN =
// 		import.meta.env.VITE_FIREBASE_APPCHECK_DEBUG_TOKEN;
// }

const app = initializeApp(firebaseConfig);
// const provider = new ReCaptchaV3Provider(
// 	import.meta.env.VITE_FIREBASE_APPCHECK_KEY
// );

// export const appCheck = initializeAppCheck(app, {
// 	provider,
// 	isTokenAutoRefreshEnabled: true,
// });
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const perf = getPerformance(app);
export const analytics = getAnalytics(app);
export const RealTimeDatabase = getDatabase(app);
