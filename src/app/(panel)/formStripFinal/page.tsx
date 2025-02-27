import { Header } from "@/components/header";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import styles from "./styled";
import { TextInput } from "react-native-paper";
import Input from "@/components/input/input";
import { set, useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonComponent } from "@/components/button/buton";
import { useData } from "@/src/store/data";
import { router } from "expo-router";


const schema = z.object({
    departureDate: z.string().min(1, 'A data de partida é obrigatória'),
    returnDate: z.string().min(1, 'A data de retorno é obrigatória'),
    numberOfTravelers: z.string().min(1, 'O numero de passageiros é obrigatório'),
    objective: z.string().min(1, 'O objetivo é obrigatório'),

})

type FormData = z.infer<typeof schema>;

export default function FormStripFinal() {


    const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });
    const setPageTwo = useData(state => state.setPageTwo)

    const handleCreate = (data: FormData) => {
        setPageTwo({
            departureDate: data.departureDate,
            returnDate: data.returnDate,
            numberOfTravelers: data.numberOfTravelers,
            objective: data.objective
        })
        router.push('/(panel)/Strip/page')
    }
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <View style={styles.container}>
            <Header step="Passo 2" title="Finalizando" backDestination="/(panel)/formStrip/page" />
            <ScrollView>
                <Text style={styles.label}>
                    Data de partida
                </Text>
                <Input
                    name="departureDate"
                    control={control}
                    placeholder="Digite seu nome"
                    keyboardType="default"
                    rules={{ required: 'O email é obrigatório' }}
                    containerStyle={styles.inputContainer}
                    error={errors.departureDate?.message}
                />
                <Text style={styles.label}>
                    Data de retorno
                </Text>
                <Input
                    name="returnDate"
                    control={control}
                    placeholder="Digite seu nome"
                    keyboardType="default"
                    rules={{ required: 'O email é obrigatório' }}
                    containerStyle={styles.inputContainer}
                    error={errors.returnDate?.message}
                />
                <Text style={styles.label}>
                    Numero de acompanhantes
                </Text>
                <Input
                    name="numberOfTravelers"
                    control={control}
                    placeholder="Digite seu nome"
                    keyboardType="numeric"
                    rules={{ required: 'O email é obrigatório' }}
                    containerStyle={styles.inputContainer}
                    error={errors.numberOfTravelers?.message}
                />
                <Text style={styles.label}>
                    Objetivo
                </Text>
                <Input
                    name="objective"
                    control={control}
                    placeholder="Digite seu nome"
                    keyboardType="default"
                    rules={{ required: 'O email é obrigatório' }}
                    containerStyle={styles.inputContainer}
                    error={errors.objective?.message}
                />
                <View style={styles.buttonContainer}>
                    <ButtonComponent
                        onPress={handleSubmit(handleCreate)}
                        style={styles.button}
                        width={350}
                        title="Proximo"
                    />
                </View>



            </ScrollView>
        </View>
    )
}