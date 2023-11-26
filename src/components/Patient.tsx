/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {DateTimeFormatOptions} from '../../interfaces/DateTimeFormatOptions.interface';

const Patient = ({
  item,
  setIsVisible,
  patientToUpdate,
}: {
  item: any;
  setIsVisible: any;
  patientToUpdate: any;
}) => {
  const {patient, date, id } = item;

  const formatDate = (dateToFormat: any) => {
    const newDate = new Date(dateToFormat);

    const options: DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return newDate.toLocaleDateString('es-ES', options);
  };
  return (
    <View style={style.container}>
      <Text style={style.label}>Paciente:</Text>
      <Text style={style.text}>{patient} - {id}</Text>
      <Text style={style.date}>{formatDate(date)}</Text>
      <View style={style.containerButtons}>
        <Pressable
          style={[style.btn, style.btnUpdate]}
          onPress={() => {
            setIsVisible(true);
            patientToUpdate(id);
          }}>
          <Text style={style.btnText}>Editar</Text>
        </Pressable>

        <Pressable style={[style.btn, style.btnDelete]}>
          <Text style={style.btnText}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    borderBottomColor: '#94A3B8',
    borderBottomWidth: 1,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  text: {
    color: '#6D28D9',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  date: {
    color: '#374151',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnUpdate: {
    backgroundColor: '#F59E0B',
  },
  btnDelete: {
    backgroundColor: '#EF4444',
  },
  btnText: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#FFF',
  },
});
export default Patient;
