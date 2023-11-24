/* eslint-disable prettier/prettier */
import React, { ChangeEvent, useState } from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
  Pressable,
  Alert
} from 'react-native';

import DatePicker from 'react-native-date-picker';

const Form = ({ isVisible, setIsVisible, setPatients, patients }: { isVisible: boolean, setIsVisible: any, setPatients: any, patients: any }) => {
  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [date, setDate] = useState(new Date());
  const [symptoms, setSymptoms] = useState('');
  const [open, setOpen] = useState(false);

  const handleNewAppointment = (e: any) => {
    if ([patient, owner, email, date, symptoms].includes('')) {
      // [{ text: 'Cancelar'}, {text: 'Ok'} ]
      Alert.alert('Error', 'Todos los campos son obligatorios')
      return;
    }

    const newPatient = {
      id: Date.now(),
      patient,
      owner,
      email,
      cellphone,
      date,
      symptoms
    }
    setPatients([...patients, newPatient]);
    setIsVisible(!isVisible);
    setPatient('');
    setOwner('');
    setEmail('');
    setCellphone('');
    setDate(new Date());
    setSymptoms('');
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>
            Nueva <Text style={styles.titleBold}>cita</Text>
          </Text>

          <Pressable style={styles.btnCancel} onPress={() => setIsVisible(!isVisible)}>
            <Text style={styles.btnCancelText}>X cancelar</Text>
          </Pressable>

          <View style={styles.field}>
            <Text style={styles.label}>Nombre paciente</Text>
            <TextInput
              placeholder="Nombre paciente"
              placeholderTextColor={'#666'}
              style={styles.input}
              value={patient}
              onChangeText={setPatient}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Nombre propetario</Text>
            <TextInput
              placeholder="Nombre propetario"
              placeholderTextColor={'#666'}
              style={styles.input}
              value={owner}
              onChangeText={setOwner}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Email propetario</Text>
            <TextInput
              placeholder="Email propetario"
              placeholderTextColor={'#666'}
              style={styles.input}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Telefono propetario</Text>
            <TextInput
              placeholder="Telefono propetario"
              placeholderTextColor={'#666'}
              style={styles.input}
              keyboardType="phone-pad"
              value={cellphone}
              onChangeText={setCellphone}
              maxLength={10}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Fecha de alta</Text>
            <View style={styles.dateContainer}>
              <DatePicker
                date={date}
                onDateChange={setDate}
                locale="es"
                mode="date"
              />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Sintomas paciente</Text>
            <TextInput
              placeholder="Sintomas paciente"
              placeholderTextColor={'#666'}
              style={[styles.input, styles.symptomsInput]}
              value={symptoms}
              onChangeText={setSymptoms}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <Pressable style={styles.btnNewAppointment} onPress={handleNewAppointment} >
            <Text style={styles.btnNewAppointmentText}>Agregar paciente</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
  },
  titleBold: {
    fontWeight: '900',
  },
  field: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
  },
  symptomsInput: {
    height: 100,
  },
  dateContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  btnCancel: {
    marginVertical: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFF'
  },
  btnCancelText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  btnNewAppointment: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNewAppointmentText: {
    color: '#5827A4',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});

export default Form;
