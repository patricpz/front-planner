import colors from "@/constants/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        paddingLeft: 16,
        paddingRight: 16
    },
    label: {
        fontSize: 16,
        color: colors.white,
        paddingHorizontal: 16,
        marginBottom: 8
    },
    inputContainer: {
        marginBottom: 20,
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
    buttonContainer: {        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default styles;