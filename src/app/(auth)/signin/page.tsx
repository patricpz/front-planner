import colors from "@/constants/colors";
import { useState } from "react";
import { Text, View, StyleSheet, Alert, } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Link, router } from "expo-router";
import { supabase } from "@/src/lib/supabase";

export default function SingIn() {
    const [text, setText] = useState('')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSignin() {
        setLoading(true)

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) {
            console.log(error)
            Alert.alert('error', error.message)
            setLoading(false)
            return;
        }
        setLoading(false)

        router.replace('/(panel)/startScreen/page')
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logoText}>
                    Dev <Text style={{ color: colors.green }}>App</Text>
                </Text>
                <Text style={styles.slogan}>O futuro aqui</Text>
            </View>
            <View style={styles.form}>
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

                <Button style={styles.button} mode="contained" onPress={handleSignin}>
                    {loading ? 'Entrando...' : 'Entrar'}
                </Button>

                <Link href="/(auth)/signup/page" style={styles.link}>
                    <Text style={styles.linkText}>Criar conta</Text>
                </Link>
            </View>
            <Text>Login</Text>
        </View>
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
    }
});