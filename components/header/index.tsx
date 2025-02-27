import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Pressable } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from "@/constants/colors";
import { router, useNavigation } from "expo-router";

interface HeaderProps {
    step: string;
    title: string;
    backDestination?: string;
}

export function Header({ step, title, backDestination = "/(panel)/startScreen/page" }: HeaderProps) {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.row}>
                    <Pressable
                        //@ts-ignore
                        onPress={() => { router.push(backDestination) }}
                        style={{ padding: 0, borderColor: '#000' }}
                    >
                        <Feather name="arrow-left" size={24} color={colors.black} />
                    </Pressable>
                    <Text style={styles.title}>
                        {step} <Feather name="loader" size={16} color={colors.black} />
                    </Text>
                </View>
                <Text style={styles.subtitle}>{title}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginBottom: 10,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 10 : 10,
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
    },
    row: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 20,
        color: colors.black,
    },
    subtitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.black,
    }
});
