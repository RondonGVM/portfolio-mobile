import {  View,Text, StyleSheet, ScrollView } from 'react-native';

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About me</Text>
      <View style={styles.divisor} />
      <Text style={styles.text}>
        Meu nome é Rondon Guilherme e sou um desenvolvedor com experiência em várias áreas da tecnologia.
        Tenho experiência sólida com as linguagens Python e C para desenvolvimento backend, criando aplicações robustas e eficientes.
      </Text>
      <Text style={styles.text}>
        Além disso, possuo conhecimentos em banco de dados, realizando modelagem e consultas otimizadas.
        Também atuo no desenvolvimento front-end, criando interfaces modernas e responsivas.
      </Text>
      <Text style={styles.text}>
        Estou sempre em busca de novos aprendizados e desafios para evoluir minhas habilidades e contribuir com projetos inovadores.
      </Text>
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
    fontSize: 80,
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
}

});
