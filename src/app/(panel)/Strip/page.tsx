import { Header } from "@/components/header";
import { View, SafeAreaView, ScrollView, Text } from "react-native";
import { ButtonComponent } from "@/components/button/buton";
import { useData } from "@/src/store/data";
import { router } from "expo-router";
import styles from "./styled";
import Card from "@/components/card/card";
import { useQuery } from '@tanstack/react-query';
import { api } from "@/services/api";
import { Data } from "@/types/data";


interface ResponseData {
  data: Data
}
export default function Strip() {
  const strip = useData(state => state.data);

  const { data, isFetching, error } = useQuery({
    queryKey: ['data'],
    queryFn: async () => {
      try {
        if (!strip || Object.keys(strip).length === 0) {
          throw new Error('Dados inválidos');
        }

        const response = await api.post<ResponseData>('/create', {
          name: strip.name,
          destination: strip.destination,
          departureDate: strip.departureDate,
          returnDate: strip.returnDate,
          numberOfTravelers: strip.numberOfTravelers,
          objective: strip.objective
        });

        console.log(response.data.data);
        return response.data.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  });

  console.log(data)



  if (isFetching) {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Card title="Consultando IA" content="IA consultando..." />
          <View style={styles.buttonContainer}>
            <ButtonComponent
              onPress={() => { }}
              style={styles.button}
              width={350}
              title="Próximo"
            />
          </View>
        </ScrollView>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Card title="Error" content="error..." />
          <View style={styles.buttonContainer}>
            <ButtonComponent
              onPress={() => { }}
              style={styles.button}
              width={350}
              title="Próximo"
            />
          </View>
        </ScrollView>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View >
        {data && Object.keys(data).length > 0 && (
          <>
            <Text style={styles.name}>{data.nome}</Text>
            <Text style={styles.object}>{data.objetivo}</Text>

            <Text style={styles.lugaresparavisitar}>Lugares para visitar:</Text>
            <ScrollView>
              <View>
                {data.lugares_para_visitar.map((lugar, index) => (
                  <View key={index}>
                    <View>
                      <Text>{lugar.nome}</Text>
                      <Text>{lugar.atividades}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </>
        )}

      </View>
    </View>
  );
}
