import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <View style={styles.divisor} />

      <Text style={styles.text}>
        Este aplicativo foi desenvolvido utilizando as seguintes tecnologias:
      </Text>

      <Text style={styles.text}>
        React Native: Framework principal para desenvolvimento mobile, permitindo criar o app para Android e iOS com JavaScript e componentes reutilizáveis.
      </Text>

      <Text style={styles.text}>
        Expo: Facilitou o processo de desenvolvimento e testes, com recursos como Hot Reload e empacotamento simplificado.
      </Text>

      <Text style={styles.text}>
        React Navigation: Gerenciou a navegação entre telas através de um Stack Navigator para alternar entre Home, Sobre, Jogo e Projetos.
      </Text>

      <Text style={styles.text}>
        JavaScript: Linguagem principal, com uso de arrow functions, hooks e desestruturação.
      </Text>

      <Text style={styles.text}>
        Componentes Funcionais: Estrutura baseada em componentes funcionais e React Hooks, promovendo código limpo e de fácil manutenção.
      </Text>

      <Text style={styles.text}>
        Estilização Minimalista: Uso de StyleSheet, paleta de cores neutras e foco em alinhamento e espaçamento.
      </Text>

      <Text style={styles.text}>
        Assets Locais: Ícones, fotos e imagens personalizados adicionados na pasta assets e exibidos com o componente Image.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'flex-start',
    alignItems: 'left',
    padding: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  divisor: {
    borderBottomColor: '#000',
    borderBottomWidth: 5,
    marginVertical: 10,
    width: '100%',
  },
});
