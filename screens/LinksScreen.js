import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Parking',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.welcomeContainer}>
      <Image
        style={styles.stretch}
        source={require('../assets/images/carpark.jpg')}
      />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  stretch: {
    flex: 1,
  }
});
