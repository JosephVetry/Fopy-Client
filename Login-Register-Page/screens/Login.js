import { View, Text, Pressable, TextInput, TouchableOpacity,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'


export const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [dataInput, setDataInput] = React.useState({
        email : '',
        password : ''
    })
    const dispatch = useDispatch()

    const submitData = async () =>{
        try {
            const { data } = await axios({
                url : `https://fopy.ramais.online/user/login`,
                method : 'POST',
                data : dataInput
            })
            const action = { 
                type : 'LoginSuccess',
                payload : data
            }
            await AsyncStorage.setItem('access_token', data.accessToken)
            navigation.navigate('HomePage')
            dispatch(action)
            const value = await AsyncStorage.getItem('access_token')
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: Styles.white }}>
            <View style={{ flex: 1, marginHorizontal: 22, marginTop : 40 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: Styles.black
                    }}>
                        Hi Welcome Back ! 👋
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: Styles.black
                    }}>Hello again you have been missed!</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Email address</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: Styles.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={Styles.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                            onChangeText={(text) => setDataInput({...dataInput, email : text})}
                            value={dataInput.email}
                            name='email'
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: Styles.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={Styles.black}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                            onChangeText={(text)=>{ setDataInput({...dataInput, password : text})}}
                            value={dataInput.password}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={Styles.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={Styles.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                <Button
                    title="Login"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={submitData}
                />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>

                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: Styles.black }}>Don't have an account ? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: Styles.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Register!</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    white: "#FFFFFF",
    black: "#222222",
    primary: "#0b4580",
    secondary: "#39B68D",
    grey: "#CCCCCC"
})