import colors from "@/constants/colors";
import { useState } from "react";
import { Text, View, StyleSheet, Alert, } from "react-native";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import { Link, router } from "expo-router";
import { supabase } from '../lib/supabase'

export default function Index() {

    return (
        <View style={styles.container}>
            <ActivityIndicator size={44} color={colors.green} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.zinc,
        justifyContent: 'center',
        alignItems: 'center'
    },
});