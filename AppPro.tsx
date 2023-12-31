/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet, Platform, ScrollView} from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App(): JSX.Element {
  const charmanderData = {
    name: 'Charmander',
    image: require('./assets/charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['Water', 'Rock'],
  };

  const squirtleData = {
    name: 'Squirtle',
    image: require('./assets/squirtle.png'),
    type: 'water',
    hp: 44,
    moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
    weaknesses: ['Electric', 'Grass'],
  };

  const bulbasurData = {
    name: 'Balbasaur',
    image: require('./assets/bulbasaur.png'),
    type: 'Grass',
    hp: 45,
    moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
    weaknesses: ['Fire', 'Ice', 'Flying'],
  };

  const pikachuData = {
    name: 'Pikachu',
    image: require('./assets/pikachu.png'),
    type: 'Electric',
    hp: 35,
    moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
    weaknesses: ['Ground'],
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
