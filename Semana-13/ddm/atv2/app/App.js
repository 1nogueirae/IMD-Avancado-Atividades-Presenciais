import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  inputDescricao: {
    height: 80,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
    textAlignVertical: 'top',
  },
  listaTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
  },
  tarefaCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  tarefaTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tarefaDescricao: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  tarefaData: {
    fontSize: 12,
    color: '#999',
  },
});

function FormTarefa({ onAdicionar }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');

  function handleAdicionar() {
    if (!titulo.trim()) return;

    onAdicionar({ titulo, descricao, data });

    setTitulo('');
    setDescricao('');
    setData('');
  }

  return (
    <View>
      <Text style={styles.h1}>Lista de Tarefas</Text>

      <Text style={styles.inputLabel}>Título:</Text>
      <TextInput
        style={styles.input}
        placeholder="Título da tarefa"
        value={titulo}
        onChangeText={setTitulo}
      />

      <Text style={styles.inputLabel}>Descrição:</Text>
      <TextInput
        style={styles.inputDescricao}
        placeholder="Descrição da tarefa"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      <Text style={styles.inputLabel}>Data:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 30/05/2026"
        value={data}
        onChangeText={setData}
      />

      <Button title="Adicionar Tarefa" onPress={handleAdicionar} />
    </View>
  );
}

function TarefaItem({ tarefa }) {
  return (
    <View style={styles.tarefaCard}>
      <Text style={styles.tarefaTitulo}>{tarefa.titulo}</Text>
      {tarefa.descricao ? (
        <Text style={styles.tarefaDescricao}>{tarefa.descricao}</Text>
      ) : null}
      {tarefa.data ? (
        <Text style={styles.tarefaData}>📅 {tarefa.data}</Text>
      ) : null}
    </View>
  );
}

export default function App() {
  const [listaTarefas, setListaTarefas] = useState([]);

  function adicionarTarefa({ titulo, descricao, data }) {
    setListaTarefas(listaAtual => [
      ...listaAtual,
      {
        id: Math.random().toString(),
        titulo,
        descricao,
        data,
      },
    ]);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FormTarefa onAdicionar={adicionarTarefa} />

        <Text style={styles.listaTitulo}>
          Tarefas ({listaTarefas.length})
        </Text>

        <FlatList
          data={listaTarefas}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TarefaItem tarefa={item} />}
          ListEmptyComponent={
            <Text style={{ color: '#aaa', textAlign: 'center' }}>
              Nenhuma tarefa adicionada ainda.
            </Text>
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}