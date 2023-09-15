import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/confeite2.jpg')} />
      <View style={styles.textos}>
      <Text style={styles.paragraph}>
        Açaí com confeitos
      </Text>
      <Text style={styles.paragraph}>
        R$ 12,00
      </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flexDirection: 'row',
    backgroundColor: '#B03171',
    marginTop: 20,
    borderRadius: 20,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  logo: {
    height: 128,
    width: 128,
  },

  textos: {
    justifyContent: 'center',
  }
});
