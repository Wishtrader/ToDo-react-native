import React from 'react'
import {View, StyleSheet, TextInput, Button} from 'react-native'

export const AddToDo = props => {
  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button color='#8870FF' title='Add ToDo' />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  input: {
    width: '70%',
    minHeight: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 3,
    padding: 5
  }
})
