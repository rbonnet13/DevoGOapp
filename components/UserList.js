import React from 'react'
import { FlatList, Text, TouchableHighlight, Alert } from 'react-native'
import UserRow from './UserRow'


const _renderItem = ({ item }) => (
  <TouchableHighlight
      onPress={() => this. <UserRow
    name={item.name.last}
    firstName={item.name.first}
    picture={item.picture.thumbnail}
    email={item.email}
  />
  </TouchableHighlight>
)

export default (UserList = props => (
  <FlatList
    data={props.data}
    renderItem={_renderItem}
    keyExtractor={item => item.email}
  />))
