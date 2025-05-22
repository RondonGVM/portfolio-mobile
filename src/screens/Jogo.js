import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const gerarNumeroSecreto = () => {
  let numeros = new Set();
  while (numeros.size < 4) {
    numeros.add(Math.floor(Math.random() * 10));
  }
  return Array.from(numeros).join('');
};

const Jogo = () => {
  const [numeroSecreto, setNumeroSecreto] = useState(gerarNumeroSecreto());
  const [palpite, setPalpite] = useState('');
  const [historico, setHistorico] = useState([]);
  const [jogoEncerrado, setJogoEncerrado] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    console.log('Número secreto:', numeroSecreto);
  }, [numeroSecreto]);

  const verificarPalpite = () => {
    if (palpite.length !== 4 || new Set(palpite).size !== 4) {
      Alert.alert('Erro', 'Digite um número de 4 dígitos únicos!');
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (palpite[i] === numeroSecreto[i]) {
        bulls++;
      } else if (numeroSecreto.includes(palpite[i])) {
        cows++;
      }
    }

    setHistorico([`${palpite} - Bulls: ${bulls}, Cows: ${cows}`, ...historico]);

    if (bulls === 4) {
      setMensagem('Parabéns! Você acertou o número!');
      setJogoEncerrado(true);
    }

    setPalpite('');
  };

  const desistir = () => {
    Alert.alert('Você desistiu!', `O número secreto era: ${numeroSecreto}`);
    setJogoEncerrado(true);
  };

  const jogarNovamente = () => {
    setNumeroSecreto(gerarNumeroSecreto());
    setPalpite('');
    setHistorico([]);
    setJogoEncerrado(false);
    setMensagem('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bulls and Cows</Text>

      {!jogoEncerrado && (
        <>
          <TextInput
            style={styles.input}
            value={palpite}
            onChangeText={setPalpite}
            maxLength={4}
            keyboardType="numeric"
            placeholder="Digite seu palpite"
          />
          <View style={styles.buttonContainer}>
            <Button title="Enviar Palpite" onPress={verificarPalpite} />
            <Button title="Desistir" onPress={desistir} color="red" />
          </View>
        </>
      )}

      {jogoEncerrado && (
        <View>
          <Text style={styles.message}>{mensagem}</Text>
          <Button title="Jogar Novamente" onPress={jogarNovamente} />
        </View>
      )}

      <Text style={styles.subtitle}>Histórico:</Text>
      <FlatList
        data={historico}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.historyItem}>{item}</Text>}
      />

      <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Jogo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
  },
  historyItem: {
    fontSize: 16,
    marginVertical: 2,
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'green',
  },
});
