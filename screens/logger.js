import React, { Component } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import {
    getAuth, createUserWithEmailAndPassword, onAuthStateChanged,
    signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification
} from "firebase/auth";
import { FontAwesome } from '@expo/vector-icons';
import * as theme from '../theme';
import { app } from "./firebase";


function LoginScreen () {
    // static navigationOptions = {
    //     headerLeft: ({ onPress }) => (
    //         <TouchableWithoutFeedback onPress={() => onPress()}>
    //             <FontAwesome size={theme.sizes.font * 1.5} color={theme.colors.black} name="arrow-left" />
    //         </TouchableWithoutFeedback>
    //     ),
    //     headerLeftContainerStyle: {
    //         paddingLeft: theme.sizes.base * 2
    //     },
    //     headerStyle: {
    //         borderBottomColor: 'transparent',
    //     }
    // };
    const handleSign = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                user.sendEmailVerification({
                    handleCodeInApp: true,
                    url: 'https://fir-auth-b1850.firebaseapp.com'
                });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const handleLogin = () => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigation.navigate("Dashboard", { name: "Dashboard" })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
    // constructor(props) {
    //     super(props);
    //     this.state = { textStyle: styles.textPlaceholder };
    // }

    // onChangeHandle = (password) => {
       // this.setState({ textStyle: txt.length > 0 ? styles.text : styles.textPlaceholder });
       //console.log("fhjdbf   ",password.nativeEvent.text)
    //    this.setState({password:password.nativeEvent.text})
    // }

    // onChangeHandles = (email) => {
        // this.setState({ textStyle: txt.length > 0 ? styles.text : styles.textPlaceholder });
        
    //     this.setState({email:email.nativeEvent.text})
    //  }
    // state = {userName: '',
    //     password:''
    //   };
    //   handleuserChange = (text) => {
    //     this.setState({previousState : text});
    //   };
    //   handlePasswordChange = (text) => {
    //     this.setState({previousState : text});
    //   };
    // render() {
        // const { navigation } = this.props;
        // const name = navigation.getParam('name');
        const { email } = this.state;
        const { password } = this.state;
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior='padding'
            >
                <View style={styles.InputContainer}>
                    <TextInput placeholder="userName"
                        value={email}
                        {...console.log("email   ",email)}
                        onChange={(email)=> this.onChangeHandles(email)}
                        style={styles.Input}
                    />

                    <TextInput placeholder="password"
                        value={password}
                        //onChangeText={this.onChangeHandle}
                        {...console.log("password   ",password)}
                        onChange={(password)=> this.onChangeHandle(password)}
                        style={styles.Input}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonContainer}>

                    <TouchableOpacity onPress={this.handleLogin} style={styles.button}>


                        <Text style={styles.buttonText}>LogIn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handleSign} style={styles.button}>


                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={this.handleForgott} style={styles.button}>


<Text style={styles.buttonText}>forgotpassword</Text>
</TouchableOpacity> */}
                    {/* <TouchableOpacity onPress={handleUpdate} style={styles.button}>


<Text style={styles.buttonText}>Update</Text>
</TouchableOpacity>
<TouchableOpacity onPress={handleDelete} style={styles.button}>


<Text style={styles.buttonText}>Delete</Text>
</TouchableOpacity> */}

                </View>
            </KeyboardAvoidingView>
        )
    }

// }
export default LoginScreen;

const styles = StyleSheet.create(

    {

        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        InputContainer: {
            width: '80%'

        },
        Input: {
            backgroundColor: 'white',
            padding: 15,
            marginTop: 10,
            borderRadius: 10
        },
        buttonContainer: {
            width: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40
        },
        button: {
            backgroundColor: 'blue',
            alignItems: 'center',
            width: '30%',
            padding: 15,
            borderRadius: 10,
            marginTop: 10

        },
        buttonOutline: {
            backgroundColor: 'white',
            marginTop: 5,
            bordercolor: 'black',
            borderRadius: 2
        },
        buttonText: {
            color: 'white',
            fontWeight: '700',
            fontSize: 16
        }

    }
)