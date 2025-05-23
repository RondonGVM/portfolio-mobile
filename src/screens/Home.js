import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/minha_foto.jpg')} 
        style={styles.image} 
      />
      <Text style={styles.smallText}>2025</Text>
      <Text style={styles.title}>RONDON GUILHERME</Text>
      <Text style={styles.subtitle}>Fullstack Developer</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={styles.buttonText}>About me</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Projetos')}
      >
        <Text style={styles.buttonText}>Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Jogo')}
      >
        <Text style={styles.buttonText}>Play bulls and cows</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,  
    marginBottom: 20,
  },
  smallText: {
    fontSize: 16,
    letterSpacing: 4,
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 4,
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 14,
    letterSpacing: 6,
    marginBottom: 30,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 2
  }
});
