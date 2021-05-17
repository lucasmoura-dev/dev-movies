import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const TechList: React.FC = () => {
  const [techs, setTechs] = useState<string[]>([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <View>
      <FlatList
        data={techs}
        keyExtractor={tech => tech}
        renderItem={({item}) => <Text>{item}</Text>}
      />
      <TextInput
        testID="tech-input"
        value={newTech}
        onChangeText={setNewTech}
      />
      <TouchableOpacity onPress={handleAdd}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TechList;
