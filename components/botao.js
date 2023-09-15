import { Text, View, StyleSheet, Button } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Button
        title="Peça seu bolo : )"
        color="#f50aa0"
        accessibilityLabel="Botão para pedir bolo"
/>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    margin: 60,
    borderRdius: 20,
    marginTop: 30,
    alignSelf: 'center',
  },
});
