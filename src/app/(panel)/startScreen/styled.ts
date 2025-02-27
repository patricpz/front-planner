import colors from "@/constants/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
        paddingLeft: 16,
        paddingRight: 16
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    logoText: {
        marginTop: 20,
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.white
    },
    title: {
        fontSize: 16,
        color: colors.white,
        width: 240,
        textAlign: 'center'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    button: {
        backgroundColor: colors.green,
        borderRadius: 10,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 34,
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default styles;