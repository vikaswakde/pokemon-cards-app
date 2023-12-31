import { View, Text } from 'react-native';

export default function Greet({ name }): JSX.Element {
    return (
        <View>
            <Text>Hello, {name}</Text>
        </View>
    );
}
