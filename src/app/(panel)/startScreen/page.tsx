import { StripIcon } from "@/assets/icons/stripIcon";
import colors from "@/constants/colors";
import { useAuth } from "@/src/context/AuthContext";
import { supabase } from "@/src/lib/supabase";
import { router } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "./styled";
import { ButtonComponent } from "@/components/button/buton";

export default function StartTrip() {

    const { setAuth } = useAuth()


    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <StripIcon width={200} height={200} color={colors.green} />
                <Text style={styles.logoText}>
                    <Text style={{ color: colors.green }}>Viajem</Text><Text>.IA</Text>
                </Text>

            </View>
            <Text style={styles.title}>Sua viajem personalizada com inteligência artificial</Text>
            <ButtonComponent
                onPress={() => router.replace('/(panel)/formStrip/page')}
                style={styles.button}
                title="Iniciar Viajem" 
            />
        </View>
    )
}
