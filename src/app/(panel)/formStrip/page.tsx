import { Header } from "@/components/header";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import styles from "./styled";
import { TextInput } from "react-native-paper";
import Input from "@/components/input/input";
import { set, useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonComponent } from "@/components/button/buton";
import { router } from "expo-router";
import { useData } from "@/src/store/data";


const schema = z.object({
    name: z.string().min(1, 'O nome é obrigatório'),
    destination: z.string().min(1, 'A destino é obrigatório'),
})

type FormData = z.infer<typeof schema>;

export default function FormStrip() {


    const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const setPageOne = useData(state => state.setPageOne)
    const handleCreate = (data: FormData) => {
        setPageOne({
            name: data.name,
            destination: data.destination
        })
        router.push('/(panel)/formStripFinal/page')
    }

    return (
        <View style={styles.container}>
            <Header step="Passo 1" title="Vamos comecar" backDestination="/(panel)/startScreen/page" />
            <ScrollView>
                <Text style={styles.label}>
                    Nome
                </Text>
                <Input
                    name="name"
                    control={control}
                    placeholder="Digite seu nome"
                    keyboardType="default"
                    rules={{ required: 'O email é obrigatório' }}
                    containerStyle={styles.inputContainer}
                    error={errors.name?.message}
                />
                <Text style={styles.label}>
                    Destino
                </Text>
                <Input
                    name="destination"
                    control={control}
                    placeholder="Digite seu nome"
                    keyboardType="default"
                    rules={{ required: 'O email é obrigatório' }}
                    containerStyle={styles.inputContainer}
                    error={errors.destination?.message}
                />
                <View style={styles.buttonContainer}>
                    <ButtonComponent
                        onPress={handleSubmit(handleCreate)}
                        style={styles.button}
                        title="Proximo"
                        width={350}
                    />
                </View>
            </ScrollView>
        </View>
    )
}