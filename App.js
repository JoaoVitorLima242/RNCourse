import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Teste dois</Text>
      </View>
      <Text style={styles.dummyText}>Teste</Text>
      <Button title='tap new!!!'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dummyText: {
    padding: 10,
    borderWidth: 1, 
    borderColor: 'red',
    margin: 10
  }
});
