import { useRef, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text,
} from 'react-native';
import {
  CameraView,
  useCameraPermissions,
} from 'expo-camera';
import {
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';

export default function App() {
  const [permission, requestPermission] =
    useCameraPermissions();

  const [facing, setFacing] = useState('back');
  const [flash, setFlash] = useState('off');

  const cameraRef = useRef(null);

  const tirarFoto = async () => {
    if (!cameraRef.current) return;

    try {
      const foto =
        await cameraRef.current.takePictureAsync();

      Alert.alert(
        'Foto tirada!',
        `Imagem salva em:\n${foto.uri}`
      );

      console.log(foto);
    } catch (error) {
      console.log(error);
    }
  };

  // Ainda carregando as permissões
  if (!permission) {
    return <View style={{ flex: 1 }} />;
  }

  // Sem permissão
  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          Precisamos da sua permissão para usar a câmera.
        </Text>

        <TouchableOpacity
          style={styles.permissionButton}
          onPress={requestPermission}
        >
          <Text style={{ color: 'white' }}>
            Permitir acesso
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={StyleSheet.absoluteFillObject}
        facing={facing}
        flash={flash}
      />

      <View style={styles.topButtons}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() =>
            setFlash(
              flash === 'off' ? 'on' : 'off'
            )
          }
        >
          <Ionicons
            name={
              flash === 'off'
                ? 'flash-off'
                : 'flash'
            }
            size={30}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() =>
            setFacing(
              facing === 'back'
                ? 'front'
                : 'back'
            )
          }
        >
          <MaterialIcons
            name="flip-camera-ios"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.captureButton}
          onPress={tirarFoto}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  permissionText: {
    marginBottom: 20,
    textAlign: 'center',
  },

  permissionButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },

  topButtons: {
    position: 'absolute',
    top: 60,
    left: 20,
    flexDirection: 'row',
    gap: 15,
  },

  iconButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 30,
  },

  bottom: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
  },

  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: '#ccc',
  },
});