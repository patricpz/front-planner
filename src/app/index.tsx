import { View, Text, Image } from "react-native";
import { Input } from "@/components/input";
import { MapPin, Calendar as IconCalendar, Settings2, UserRoundPlus, ArrowRight } from "lucide-react-native"
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { useState } from "react";

enum StepForm {
    TRIP_DETAILS = 1,
    ADD_EMAIL = 2
}

export default function Index() {
    const [stepForm, setStepForm] = useState(StepForm.TRIP_DETAILS)
    function handleNextStepForm() {
        if (stepForm === StepForm.TRIP_DETAILS) {
            return setStepForm(StepForm.ADD_EMAIL)

        }
    }
    return (
        <View className="flex-1 items-center justify-center px-5">
            <Image
                source={require('@/assets/logo.png')}
                className="h-8"
                resizeMode="contain"
            />

            <Image
                source={require('@/assets/bg.png')}
                className="absolute"
            />
            <Text className="text-zinc-400 font-regular text-center text-lg mt-3">
                Convide seus amigos e planeje {"\n"}suas viagens
            </Text>

            <View className="w-full bg-zinc-900 p-4 rounded-xl my-8 border border-zinc-800">
                <Input>
                    <MapPin color={colors.zinc[400]} />
                    <Input.Field placeholder="Para Onde?" editable={stepForm === StepForm.TRIP_DETAILS} />
                </Input>

                <Input>
                    <IconCalendar color={colors.zinc[400]} />
                    <Input.Field placeholder="Quando?" editable={stepForm === StepForm.TRIP_DETAILS} />
                </Input>

                {stepForm === StepForm.ADD_EMAIL &&
                    <View>
                        <View className="border-b py-3 border-zinc-800">
                            <Button variant="secondary" onPress={() => setStepForm(StepForm.TRIP_DETAILS)}>
                                <Button.Title>Altere o locas/data</Button.Title>
                                <Settings2 color={colors.zinc[200]} size={20} />
                            </Button>
                        </View>

                        <Input>
                            <UserRoundPlus color={colors.zinc[400]} />
                            <Input.Field placeholder="Quem estara na viagem?" />
                        </Input>
                    </View>
                }



                <Button onPress={handleNextStepForm}>
                    <Button.Title>{stepForm === StepForm.TRIP_DETAILS ? "Continuar" : "Confirma Viagem"}</Button.Title>
                    <ArrowRight color={colors.lime[950]} size={20} />
                </Button>

            </View>
            <Text className="text-zinc-500 font-regular text-center text-base">
                Ao planejar sua viagem pela plann.er voce automaticamente concorda com nossos{" "}
                <Text className="text-zinc-300 underline">
                    temos de uso de politicas de privacidade\
                </Text>
            </Text>
        </View>
    )
}