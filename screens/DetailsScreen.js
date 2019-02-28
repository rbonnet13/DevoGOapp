import React from 'react';
import UserList from './../components/UserList';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import UserList from './../components/UserRow';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>Hello</Text>
      </View>
    );
  }
}
