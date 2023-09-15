import { Text, SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Confete from './components/confetes.js';
import Bolo from './components/morango';
import Botao from './components/botao';
import Banana from './components/banana';
import Kiwi from './components/kiwi';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style={styles.caixa}>
      <Text style={styles.logo}>
        Joy Doces :)
      </Text>
      <Text style={styles.paragraph}>
        Sabores e preços
      </Text>
    </View>
      <Card style={styles.card}>
        <Confete />
        <Bolo />
        <Banana />
        <Kiwi />
      </Card>

      <Botao />
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  card: {
    backgroundColor: '#800080',
  },

  caixa: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  logo: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 15,
    padding: 12,
    color: '#B03171',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  }
});
