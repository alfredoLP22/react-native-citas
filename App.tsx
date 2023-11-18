import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  Pressable,
  Modal,
} from 'react-native';
import Form from './src/components/Form';

function App(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [clients, setClients] = useState([]);

  const addAppointment = () => {
    console.log('diste click');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Administrador de citas {''}
        <Text style={styles.boldTitle}>Veterinaria</Text>
      </Text>
      <Pressable
        // delayLongPress={1500}
        onPress={() => setIsVisible(!isVisible)}
        style={styles.btnNewAppointment}>
        <Text style={styles.btnTextNewAppointment}>Nueva cita</Text>
      </Pressable>
      <Form isVisible={isVisible}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  boldTitle: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNewAppointment: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextNewAppointment: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});

export default App;
