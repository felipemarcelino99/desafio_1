import React, {useState} from 'react'
import { View, Text } from 'react-native'

function Usuario(props) {
  const {data} = props;
  return (
    <View style={{flex: 1}}>
        <Text style={{color: '#FFF', fontSize: 20, }}>Cargo: {data.cargo}</Text>
        <Text style={{color: '#FFF', fontSize: 20, }}>Nome: {data.nome}</Text>
    </View>
  )
}

export default Usuario