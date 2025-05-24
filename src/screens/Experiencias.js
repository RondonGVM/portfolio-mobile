import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Experiencias() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Experiências</Text>
      <View style={styles.divisor} />

      <View style={styles.secao}>
        <Text style={styles.subtitulo}>Experiência Acadêmica</Text>
        <Text style={styles.texto}>
          - Graduando em Ciências da Computação na UNICAP{'\n'}
          - Participação em projetos de pesquisa e extensão{'\n'}
          - Desenvolvimento de um jogo RPG em C para disciplina de Estrutura de Dados
        </Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.subtitulo}>Experiência Profissional</Text>
        <Text style={styles.texto}>
          - Freelancer como desenvolvedor web com React{'\n'}
          - Experiência com versionamento utilizando Git
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  secao: {
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    fontSize: 20,
    lineHeight: 20,
  },
   divisor: {
    borderBottomColor: '#000',
    borderBottomWidth: 5,
    marginVertical: 10,
    width: '100%',
  },
});
