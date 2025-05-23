import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

const gerarNumeroSecreto = () => {
  let numeros = new Set();
  while (numeros.size < 4) {
    numeros.add(Math.floor(Math.random() * 10));
  }
  return Array.from(numeros).join('');
};

export default function Jogo() {
  const [numeroSecreto, setNumeroSecreto] = useState(gerarNumeroSecreto());
  const [palpite, setPalpite] = useState('');
  const [historico, setHistorico] = useState([]);
  const [jogoEncerrado, setJogoEncerrado] = useState(false);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    console.log("Número secreto:", numeroSecreto);
  }, [numeroSecreto]);

  const verificarPalpite = () => {
    if (palpite.length !== 4 || new Set(palpite).size !== 4) {
      alert("Digite um número de 4 dígitos únicos!");
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
      setMensagem("Parabéns! Você acertou o número!");
      setJogoEncerrado(true);
    }

    setPalpite('');
  };

  const desistir = () => {
    alert(`O número secreto era: ${numeroSecreto}`);
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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bulls and Cows</Text>
      <View style={styles.divisor} />

      {!jogoEncerrado && (
        <>
          <TextInput
            style={styles.input}
            value={palpite}
            onChangeText={setPalpite}
            maxLength={4}
            keyboardType="numeric"
            placeholder="Digite seu palpite"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.button} onPress={verificarPalpite}>
            <Text style={styles.buttonText}>Enviar Palpite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.desistir]} onPress={desistir}>
            <Text style={styles.buttonText}>Desistir</Text>
          </TouchableOpacity>
        </>
      )}

      {jogoEncerrado && (
        <>
          <Text style={styles.text}>{mensagem}</Text>
          <TouchableOpacity style={styles.button} onPress={jogarNovamente}>
            <Text style={styles.buttonText}>Jogar Novamente</Text>
          </TouchableOpacity>
        </>
      )}

      <Text style={styles.text}>Histórico:</Text>
      {historico.map((item, index) => (
        <Text key={index} style={styles.text}>{item}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  divisor: {
    borderBottomColor: '#000',
    borderBottomWidth: 5,
    marginVertical: 10,
    marginBottom: 20, 
    width: '100%',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  desistir: {
    backgroundColor: '#ff4d4d',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
