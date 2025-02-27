import { LugaresParaVisitarProps } from '@/types/data';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardProps {
  title?: string;
  content?: string;
  destino?: string;
  data_de_partida?: string;
  data_de_retorno?: string;
  objetivo?: string;
  numero_de_pessoas?: number;
  lugares_para_visitar?: { nome: string; atividades: string[] }[];
}

export default function Card({ 
  title = 'Default Title', 
  content = 'No content available',
  destino,
  data_de_partida,
  data_de_retorno,
  numero_de_pessoas,
  objetivo,
  lugares_para_visitar = [],
}: CardProps) {
  return (
    <View style={styles.card}>
      {title && <Text style={styles.title}>{title}</Text>}
      {content && <Text style={styles.content}>{content}</Text>}
      <Text>Destino: {destino}</Text>
      <Text>Data de partida: {data_de_partida}</Text>
      <Text>Data de retorno: {data_de_retorno}</Text>
      <Text>Objetivo: {objetivo}</Text>
      <Text>Número de pessoas: {numero_de_pessoas}</Text>
      
      <Text style={styles.subtitle}>Lugares para visitar:</Text>
      {lugares_para_visitar.length > 0 ? (
        lugares_para_visitar.map((lugar, index) => (
          <View key={index}>
            <Text style={styles.item}>- {lugar.nome}</Text>
            {lugar.atividades.length > 0 ? (
              lugar.atividades.map((atividade, i) => (
                <Text key={i} style={styles.atividade}>  * {atividade}</Text>
              ))
            ) : (
              <Text style={styles.atividade}>  Nenhuma atividade cadastrada</Text>
            )}
          </View>
        ))
      ) : (
        <Text style={styles.item}>Nenhum lugar cadastrado</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  content: {
    fontSize: 16,
    color: '#666',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#444',
  },
  item: {
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
  },
  atividade: {
    fontSize: 12,
    color: '#666',
    marginLeft: 16,
  },
});
