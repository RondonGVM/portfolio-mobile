import { View, Text, Image, Linking, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Portfolio</Text>

      <Image source={require('../../assets/minha_foto.jpg')} style={styles.fotoMinha} />

      <Text style={styles.subtitle}>Sobre Mim</Text>
      <Text style={styles.texto}>
        Me chamo Rondon Guilherme, tenho 20 anos e atualmente sou estudante do quinto período de Ciências da Computação pela Universidade Católica de Pernambuco (UNICAP). 
        Possuo experiência em programação back-end e front-end, além de conhecimentos básicos na área de banco de dados...
      </Text>

      <Text style={styles.subtitle}>Competências</Text>
      <View style={styles.logosContainer}>
        <Image source={require('../../assets/mysql-logo.png')} style={styles.logo} />
        <Image source={require('../../assets/python-logo.png')} style={styles.logo} />
        <Image source={require('../../assets/JavaScript-logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.subtitle}>Contato</Text>
      <View style={styles.iconesContatoContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:rondongvm@gmail.com')}>
          <Image source={require('../../assets/email-icon.png')} style={styles.contatoIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/RondonGVM')}>
          <Image source={require('../../assets/github-icon.png')} style={styles.contatoIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Bulls and Cows</Text>
      <TouchableOpacity style={styles.botaoJogar} onPress={() => navigation.navigate('Jogo')}>
        <Text style={styles.botaoTexto}>Jogar Bulls and Cows</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 24, fontWeight: '600', marginTop: 20 },
  texto: { fontSize: 16, marginTop: 10 },
  fotoMinha: { width: 200, height: 200, borderRadius: 100, alignSelf: 'center' },
  logosContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
  logo: { width: 50, height: 50 },
  iconesContatoContainer: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
  contatoIcon: { width: 40, height: 40 },
  botaoJogar: { marginTop: 20, padding: 10, backgroundColor: '#007bff', borderRadius: 5 },
  botaoTexto: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});
