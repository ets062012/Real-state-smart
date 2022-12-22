import { useNavigation } from "@react-navigation/native";
import React,{useState} from "react";
import {View,Text,StyleSheet,KeyboardAvoidingView,TextInput,TouchableOpacity,SafeAreaView} from 'react-native';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import Dashboard from "./Dashboard";
// import { collection, doc, addDoc,updateDoc, deleteDoc, getDoc } from "firebase/firestore";
// import { db } from "../components/config";
// import { app } from "../components/config";
// import { auth } from "./firebase";
import SmartHome from '../navigation/SmartHome';
import { auth } from "./firebase";
const LoginScreen=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
const navigation=useNavigation();
//const userRefCollection=collection(db,"users")
// useEffect(()=>{
//     const auth = getAuth();
//    const unsubscribe= onAuthStateChanged(auth, (user) => {
//         if (user) {
//           navigation.navigate("Home");
//           // ...
//         } else {
//           // User is signed out
//           // ...
//         }
//       });

// return unsubscribe;
// },[]
//     )
    const handleSign=()=>{
        const auths = getAuth();
        //console.log("email  "+email+"   pass   "+password)
       createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
        console.log("===================")
        const user = userCredential.user;
        console.log("user   "+user);
      })
  .catch((error) => {
    const errorCode = error.code;
   
    const errorMessage = error.message;
    console.log("error"+errorMessage)
    // ..
  });
    }

    const handleLogin=()=>{

        // const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigation.navigate("Drawer")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });

    }
//     const handleForgott=()=>{
// navigation.navigate("forgot");


//     }
//   const handleSign=()=>{

//     addDoc(collection(db, "users"), {
//       email:email,
//       password: password
   
//     }).then(()=>{
// console.log("data submitted")
//     }).catch((error=>error.message));

//   }
  // const handleUpdate=()=>{
  //   navigation.navigate("Update");
//     updateDoc(doc(db, "users", "fnGvyPP6PwUIMWasXgUS"), {
//       email:email,
//       password: password
   
//     }).then(()=>{
// console.log("data updatted")
//     }).catch((error=>error.message));


  //}
//   const handleDelete=()=>{
// navigation.navigate("Delete")

//   }
//   const handleLogin=()=>{
// navigation.navigate("Home")
//   }
    return(
        <SafeAreaView
        style={styles.container}
        behavior='padding'
        >
            <View style={styles.InputContainer}>
<TextInput placeholder="email" 
value={email}
onChangeText={text=>setEmail(text)}
style={styles.Input}
/>
<TextInput placeholder="password" 
value={password}
onChangeText={text=>setPassword(text)}
style={styles.Input}
secureTextEntry
/>
</View>
<View style={styles.buttonContainer}>
  
<TouchableOpacity onPress={handleLogin} style={styles.button}>


<Text style={styles.buttonText}>LogIn</Text>
</TouchableOpacity>
<TouchableOpacity onPress={handleSign} style={styles.button}>


<Text style={styles.buttonText}>Register</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>{}} style={styles.button}>


<Text style={styles.buttonText}>forgotpassword</Text>
</TouchableOpacity>
{/* <TouchableOpacity onPress={handleUpdate} style={styles.button}>


<Text style={styles.buttonText}>Update</Text>
</TouchableOpacity>
<TouchableOpacity onPress={handleDelete} style={styles.button}>


<Text style={styles.buttonText}>Delete</Text>
</TouchableOpacity> */}

</View>
</SafeAreaView>
    )
 }

 export default LoginScreen;

 const styles=StyleSheet.create(

    {

container:{
    flex:1,
justifyContent:'center',
alignItems:'center'
},
InputContainer:{
    width:'80%'

},
Input:{
backgroundColor:'white',
padding:15,
marginTop:10,
borderRadius:10
},
buttonContainer:{
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:40
},
button:{
backgroundColor:'blue',
alignItems:'center',
width:'30%',
padding:15,
borderRadius:10,
marginTop:10

},
buttonOutline:{
    backgroundColor:'white',
    marginTop:5,
    bordercolor:'black',
    borderRadius:2
},
buttonText:{
color:'white',
fontWeight:'700',
fontSize:16
}

    }
 )