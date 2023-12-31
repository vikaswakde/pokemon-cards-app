import { View, Text, StyleSheet } from 'react-native';
// add two props to box() component, --> children and styles
export default function Box({ children, style }) {
    return (
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'black',
        padding: 20,
        height: 100, 
        width: 100,
        // flexGrow: 1,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
});
