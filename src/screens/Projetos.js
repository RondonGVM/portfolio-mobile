import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProjetoCard from "./components/ProjetoCard";

export default function Projetos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Projetos</Text>
      <View style={styles.divisor} />
       <Text style={styles.subtitulo}>Sobre</Text>
      <Text style={styles.descricao}>
        Aqui você encontra minha experiência profissional, com alguns projetos
        que desenvolvi ou participei do desenvolvimento.
      </Text>
      <ProjetoCard
        nome="Jogo RPG interativo em C"
        descricao="Projeto inicialmente feito para a cadeira de estrutura de dados, onde utilizei várias estruturas conhecidas para desenvolver um jogo de RPG interativo, utilizando cada estrutura que aprendi para realizar um papel diferente no jogo."
        githubLink="https://github.com/RondonGVM/Data-Structure-Game"
      />
      <ProjetoCard
        nome="Jogo de palavras em Java"
        descricao="Jogo de palavras em Java utilizando meus conhecimentos de Programação Orientada a Objetos para criar um jogo divertido e lúdico com a temática do rapper americano Kanye West"
        githubLink="https://github.com/RondonGVM/ProjetoPOO"
      />
      <ProjetoCard
        nome="Site para review de filmes e séries"
        descricao="Site para criar reviews de filmes e séries, utilizando conhecimentos de programação web, como estruturação do site através de react e uso de APIs."
        githubLink="https://github.com/pedromota001/omdbAPI-frontend-pwm"
      />
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
  subtitulo: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 5,
  },
  descricao: {
    fontSize: 14,
    marginBottom: 20,
  },
  divisor: {
    borderBottomColor: "#000",
    borderBottomWidth: 5,
    marginVertical: 10,
    width: "100%",
  },
});
