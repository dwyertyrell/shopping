import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet } from 'react-native';
import { db, getAuthInstance } from './firebase';

// Create the navigator
const Stack = createNativeStackNavigator();

// import ShoppingLists from './components/ShoppingLists.js'
// import Welcome from './components/Welcome.js';

const App = () => {
    // Using lazy initialization for Firebase Auth
    const auth = getAuthInstance();
    
    console.log('db', db);
    console.log('auth', auth);

return (
    // <NavigationContainer>
    //   <Stack.Navigator 
    //   initialRouteName = 'Welcome'
    //   >
    //     <Stack.Screen
    //       name="Welcome">
    //       {props => <Welcome auth={auth} />}
    //     </Stack.Screen>


    //     <Stack.Screen
    //       name="ShoppingLists">
    //       {props => <ShoppingLists db={db} {...props} />}
    //    </Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style = {styles.container}>

    <Text >Hello rtgtrWorld</Text>
  </View>
);

  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;




// import { Text, View, StyleSheet } from 'react-native';

// const App = () => {
// //   const firebaseConfig 
// console.log('hello')

// return (
  // <View style = {styles.container}>

  //   <Text >Hello World</Text>
  // </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// export default App;

