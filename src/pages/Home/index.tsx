import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import api from '../../api/correiosapi';

interface ContentCep {
  logradouro: string;
  localidade: string;
  uf: string;
}

const Home: React.FC = () => {
  const [cep, setCep] = useState('');
  const [resultCep, setResultCep] = useState<ContentCep>();

  async function cepfind(value: string) {
    const data = await api.get(`${value}/json/`);
    setResultCep(data.data);
  }

  const HandleCepFind = () => {
    cepfind(cep);
  };

  return (
    <SafeAreaView style={styles.constiner}>
      <Text style={styles.title}>CEP Find</Text>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="numeric"
          placeholder="Digite um cep sem hífem "
          value={cep}
          onChangeText={(text) => setCep(text)}
          style={styles.input}
          maxLength={8}
        />
        <TouchableOpacity onPress={HandleCepFind} style={styles.button}>
          <Text style={styles.buttonText}>Pesquisar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.textGroup}>
          <Text style={styles.textTitle}>Rua:</Text>
          <Text style={styles.textContent}>
            {resultCep ? resultCep.logradouro : null}
          </Text>
        </View>
        <View style={styles.textGroup}>
          <Text style={styles.textTitle}>Cidade:</Text>
          <Text style={styles.textContent}>
            {resultCep ? resultCep.localidade : null}
          </Text>
        </View>

        <View style={styles.textGroup}>
          <Text style={styles.textTitle}>Uf:</Text>
          <Text style={styles.textContent}>
            {resultCep ? resultCep.uf : null}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
