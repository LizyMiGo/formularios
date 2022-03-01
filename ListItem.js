import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    margin: 5,
    borderWidth: 1,
    padding: 5,
    fontSize: 17,
  },
});

export default function ListItem({user}) {
  return (
    <View>
      <Text style={styles.item}>
        {user.accountNumber} - {user.name} - {user.age}
      </Text>
    </View>
  );
}
