import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const imagens = {
  'Abaixo do peso': require('./assets/abaixo-peso.png'),
  'Peso normal': require('./assets/peso-normal.png'),
  'Sobrepeso': require('./assets/sobrepeso.png'),
  'Obesidade Grau I': require('./assets/obesidade-grau1.png'),
  'Obesidade Grau II': require('./assets/obesidade-grau2.png'),
  'Obesidade Mórbida': require('./assets/obesidade-morbida.png'),
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imagemImc: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
});

function Form({ peso, setPeso, altura, setAltura, onCalcular }) {
  return (
    <SafeAreaView>
      <Text style={styles.h1}>Calculo de IMC</Text>
      <Text style={styles.inputLabel}>Digitar seu peso:</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <Text style={styles.inputLabel}>Digitar sua altura:</Text>
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button
        title="Calcular IMC"
        onPress={onCalcular}
      />
    </SafeAreaView>
  );
}

function Resultado({ resultado }) {
  if (!resultado) return null;

  const { imc, imc_level } = resultado;
  const imagem = imagens[imc_level];

  return (
    <SafeAreaView>
      <Text style={styles.h1}>Resultado do IMC</Text>
      <Text>Seu IMC é: {imc.toFixed(2)}</Text>
      <Text>Classificação: {imc_level}</Text>
      {imagem && (
        <Image
          source={imagem}
          style={styles.imagemImc}
        />
      )}
    </SafeAreaView>
  );
}

export default function App() {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [resultado, setResultado] = React.useState(null);

  function calcular_imc(peso, altura) {
    const imc = peso / (altura * altura);
    const imc_level = imc < 18.5 ? 'Abaixo do peso' :
      imc < 25 ? 'Peso normal' :
        imc < 30 ? 'Sobrepeso' :
          imc < 35 ? 'Obesidade Grau I' :
            imc < 40 ? 'Obesidade Grau II' :
              'Obesidade Mórbida';
    return { imc, imc_level };
  }

  return (
    <SafeAreaProvider>
      <Form
        peso={peso}
        setPeso={setPeso}
        altura={altura}
        setAltura={setAltura}
        onCalcular={() => {
          const p = parseFloat(peso.replace(',', '.'));
          const a = parseFloat(altura.replace(',', '.'));
          if (!p || !a || isNaN(p) || isNaN(a)) {
            setResultado({ imc: 0, imc_level: 'Entrada inválida' });
            return;
          }
          const r = calcular_imc(p, a);
          setResultado(r);
        }}
      />
      <Resultado resultado={resultado} />
    </SafeAreaProvider>
  );
}