import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';

export default function ProjetoCard({ nome, descricao, githubLink }) {
  const handlePress = () => {
    Linking.openURL(githubLink);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <View style={styles.divisor} />
      <Text style={styles.descricao}>{descricao}</Text>

      <TouchableOpacity style={styles.githubContainer} onPress={handlePress}>
        <Text style={styles.linkText}>ir para github</Text>
        <Image
          source={require('../../../assets/github-icon.png')}

          style={styles.githubIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#f4f4f4',
    width: '100%',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  divisor: {
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    marginVertical: 10,
  },
  descricao: {
    fontSize: 14,
    marginBottom: 10,
  },
  githubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  linkText: {
    fontSize: 12,
    marginRight: 5,
    fontWeight: 'bold',
  },
  githubIcon: {
    width: 24,
    height: 24,
  },
});
