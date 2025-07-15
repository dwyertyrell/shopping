// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { getAuth } from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from "firebase/auth"; // <-- CHANGE HERE!

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; // <-- NEW IMPORT!


// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import ShoppingLists from './components/ShoppingLists.js'
import Welcome from './components/Welcome.js';

const App = () => {
  const firebaseConfig = {
  apiKey: "AIzaSyBA1vWZKnkddD5n1N88_mta_Rf4gPiDmFI",
  authDomain: "chat-app-d1777.firebaseapp.com",
  projectId: "chat-app-d1777",
  storageBucket: "chat-app-d1777.firebasestorage.app",
  messagingSenderId: "915890104856",
  appId: "1:915890104856:web:2d29a82b446e4ae830b16d",
  measurementId: "G-7FW2XLWSZ8"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  
    // Initialize Firebase Auth with React Native persistence!
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  

 return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName = 'Welcome'
      >
        <Stack.Screen
          name="Welcome">
          {props => <Welcome auth={auth} />}
        </Stack.Screen>


        <Stack.Screen
          name="ShoppingLists">
          {props => <ShoppingLists db={db} {...props} />}
       </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

