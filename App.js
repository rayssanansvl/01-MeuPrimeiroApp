// Importar os módulos necessários do React e React Native.

import { StyleSheet, Text, View } from "react-native";



// Define o componente principal a aplicação "APP"
// A palavra 'export default' o torna disponível para ser usado em outras partes da aplicação
export default function App(){
    //O componente retorna uma estrutura de UI (Interface do Usuário) em 35X
    return(
        //'View' é um contêiner flexível, equivalente a uma <div>
        <View style={styles.container}>
            {/* 'Text é um componente para a utilização de texto' */}
            <Text style={styles.title}>Meu primeiro App</Text>

            {/* Outro componente de texto */}
            <Text style={styles.subtitle}>Bem-vindo ao React-Native!</Text>
        </View>
    );
}

//Cria um objeto de estilo usando a API 'StyleSheet'
//Isso otimiza o desempenho e facilita a organização dos estilos
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#1e93abff",
        alignItems:"center",
        justifyContent:"center"
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#DCDCDC",
      marginBottom: 20,  
    },
    subtitle:{
        fontSize: 16,
        color: "#d9d9d9",
    },
})
