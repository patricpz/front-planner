import React from 'react';
import { View, StyleSheet, Text, KeyboardTypeOptions, ViewStyle, TextStyle, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import colors from '@/constants/colors';

interface InputProps {
    name: string;
    control: any;
    rules?: object;
    error?: string;
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions;
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
}

export default function Input({
    name,
    control,
    rules,
    error,
    placeholder,
    keyboardType = 'default',
    containerStyle,
    inputStyle,
}: InputProps) {
    return (
        <View style={[styles.container, containerStyle]}>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder={placeholder}
                        onBlur={onBlur}
                        value={value}
                        onChangeText={onChange}
                        keyboardType={keyboardType}
                        style={styles.input}
                        accessible={true}
                        accessibilityLabel={placeholder}
                    />
                )}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
    },
    input: {
        height: 44,
        paddingHorizontal: 10,
        borderRadius: 4,
        backgroundColor: colors.white
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    },
    
});
