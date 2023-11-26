/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  FlatList,
} from 'react-native';
import Form from './src/components/Form';
import Patient from './src/components/Patient';

function App(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const patientToUpdate = (id: any) => {
    const patientUpdate = patients.filter((patientElement: any) => patientElement?.id === id);
    setPatient(patientUpdate[0]);
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

      {patients.length === 0 ? (
        <Text style={styles.noPatients}>No hay pacientes aun</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={patients}
          keyExtractor={(item: any) => item.id}
          renderItem={({item}) => {
            return (
              <Patient
                item={item}
                setIsVisible={setIsVisible}
                patientToUpdate={patientToUpdate}
              />
            );
          }}
        />
      )}
      <Form
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setPatients={setPatients}
        patients={patients}
        patient={patient}
        setPatient={setPatient}
      />
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
  noPatients: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  list: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default App;
