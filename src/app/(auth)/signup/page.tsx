import colors from "@/constants/colors";
import { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { supabase } from '../../../lib/supabase'
export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleLogin () {
        setLoading(true)

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    name: name
                }
            }
        })

        if (error) {
            Alert.alert('Cadastro realizado com sucesso', error.message)
            setLoading(false)
            return;
        }
        setLoading(false)

        router.replace('/(auth)/signin/page')
    }




    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={styles.header}>
                            <Button style={styles.buttonBack} onPress={() => { router.back() }}>
                                <Ionicons name="arrow-back" size={24} color={colors.white} />
                            </Button>
                            <Text style={styles.slogan}>Criar conta</Text>
                        </View>
                        <View style={styles.form}>

                            <View>
                                <Text style={styles.label}>
                                    Nome completo
                                </Text>
                                <TextInput
                                    placeholder="Digite seu nome completo"
                                    style={styles.input}
                                    value={name}
                                    onChangeText={setName}
                                />
                            </View>

                            <View>
                                <Text style={styles.label}>
                                    Email
                                </Text>
                                <TextInput
                                    placeholder="Digite seu email"
                                    style={styles.input}
                                    value={email}
                                    onChangeText={setEmail}
                                />
                            </View>

                            <View>
                                <Text style={styles.label}>
                                    Senha
                                </Text>
                                <TextInput
                                    placeholder="Digite sua senha"
                                    style={styles.input}
                                    secureTextEntry
                                    value={password}
                                    onChangeText={setPassword}
                                />

                            </View>

                            <Button style={styles.button} mode="contained" onPress={handleLogin}>
                                {loading ? 'Carregando...' : 'Cadastrar' }
                            </Button>
                        </View>
                        <Text>Login</Text>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 34,
        backgroundColor: colors.zinc,
    },
    header: {
        paddingLeft: 14,
        paddingRight: 14,
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        marginBottom: 8
    },
    slogan: {
        fontSize: 34,
        color: colors.white,
        marginBottom: 34,
    },
    form: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingTop: 34,
        paddingLeft: 14,
        paddingRight: 14,
    },
    label: {
        fontSize: 16,
        color: colors.black,
        marginBottom: 4,
    },
    input: {
        backgroundColor: colors.white,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.gray,
        marginBottom: 16,
        padding: 2,
    },
    button: {
        marginTop: 34,
        backgroundColor: colors.green
    },
    link: {
        marginTop: 16,
        textAlign: 'center'
    },
    linkText: {
        color: colors.black
    },
    buttonBack: {
        marginTop: 34,
        backgroundColor: 'rgba(255, 255, 255, 0.55)',
        alignSelf: 'flex-start',
        borderRadius: 8,
        marginBottom: 8
    }
});