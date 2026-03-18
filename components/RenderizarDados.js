import { View, Text, StyleSheet } from "react-native";

export default ({ nome, curso, disciplina, descricao }) => {
    return (
        <View style={styles.resultado}>
            <Text style={styles.label}>ALUNO: <Text style={styles.info}>{nome}</Text></Text>
            <Text style={styles.label}>CURSO: <Text style={styles.info}>{curso}</Text></Text>
            <Text style={styles.label}>DISCIPLINA: <Text style={styles.info}>{disciplina}</Text></Text>
            <Text style={styles.label}>DESCRIÇÃO: <Text style={styles.info}>{descricao}</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    resultado: { 
        marginTop: 25, 
        padding: 20, 
        backgroundColor: '#e8f4fd', 
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3498db'
    },
    label: { 
        fontWeight: 'bold', 
        color: '#2980b9', 
        marginBottom: 4,
        fontSize: 14
    },
    info: { 
        color: '#2c3e50', 
        fontWeight: 'normal' 
    }
});
