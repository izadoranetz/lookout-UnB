import * as Location from "expo-location";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView from "react-native-maps";

// vai pro Centro de Brasília se a permissão de localização for negada
const posicao_padrao = { latitude: -15.7801, longitude: -47.9292 };

export default function Mapa() {
  const [posicao, setPosicao] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setPosicao(posicao_padrao);
        return;
      }
      const loc = await Location.getCurrentPositionAsync({});
      setPosicao({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });
    })();
  }, []);

  function opcaoMenu(nome: string) {
    setMenuAberto(false);
    Alert.alert(nome, "Em breve");
  }

  if (!posicao) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" />
        <Text>Obtendo localização...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={{
          ...posicao,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation
        showsMyLocationButton
      />

      <Pressable style={styles.botaoMenu} onPress={() => setMenuAberto(true)}>
        <Text style={styles.botaoMenuTexto}>☰</Text>
      </Pressable>

      <Modal
        visible={menuAberto}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuAberto(false)}
      >
        <Pressable
          style={styles.fundoModal}
          onPress={() => setMenuAberto(false)}
        >
          <View style={styles.menu}>
            <Pressable
              style={styles.item}
              onPress={() => opcaoMenu("Info do usuário")}
            >
              <Text style={styles.itemTexto}>Info do usuário</Text>
            </Pressable>
            <Pressable
              style={styles.item}
              onPress={() => opcaoMenu("Histórico de ocorrências")}
            >
              <Text style={styles.itemTexto}>Histórico de ocorrências</Text>
            </Pressable>
            <Pressable style={styles.item} onPress={() => opcaoMenu("Sair")}>
              <Text style={[styles.itemTexto, { color: "#e53935" }]}>Sair</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  centro: { flex: 1, alignItems: "center", justifyContent: "center", gap: 8 },
  botaoMenu: {
    position: "absolute",
    top: 56,
    left: 16,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  botaoMenuTexto: { fontSize: 22 },
  fundoModal: { flex: 1, backgroundColor: "rgba(0,0,0,0.3)" },
  menu: {
    marginTop: 108,
    marginLeft: 16,
    width: 240,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 8,
    elevation: 6,
  },
  item: { paddingVertical: 14, paddingHorizontal: 16 },
  itemTexto: { fontSize: 16 },
});
