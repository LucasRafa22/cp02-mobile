import { Text, StyleSheet } from "react-native";

export default (props) => {
    return (
        <Text style={styles.textoExibicao}>
            {props.nomeCliente} - {props.emailCliente}
        </Text>
    );
}

const styles = StyleSheet.create({
    textoExibicao: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    }
});
