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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/scale_rocket_rgb.png')
                  : require('../assets/images/scale_rocket_rgb.png')
              }
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Bienvenue sur DevoGOapp</Text>
          </View>
          <View style={styles.container}>
            <UserList data={sampleData} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const sampleData = [
  {
    name: { title: 'mr', first: 'Seb', last: 'Lafose' },
    email: 'sebastien.lafosse@devoteam.com',
    picture: {
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkeV36ELjP5SfdqxHcn30Z_boNXvbw_26RzBuGcztVLywBhpkB',
    },
  },
  {
    name: { title: 'mr', first: 'Cedric', last: 'Thomas' },
    email: 'cedric.thomas@devoteam.com',
    picture: {
      thumbnail: 'http://static8.viadeo-static.com/y88GCyscUL-xxZsfYM9td43HJrM=/300x300/member/002f2jcygtcvy7h%3Fts%3D1517819977000',
    },
  },
  {
    name: { title: 'mr', first: 'Thomas', last: 'Goarant' },
    email: 'thomas.goarant@devoteam.com',
    picture: {
      thumbnail: 'data:image/jpeg;base64,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',
    },
  },
]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
