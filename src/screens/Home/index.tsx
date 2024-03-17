import { useState } from 'react'
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Participant exists', 'There is already a participant on the list with that name')
    }

    setParticipants(prevState => [ ...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remove', `Remove participant ${name}?`,[
      {
        text: 'Yes',
        onPress: () => Alert.alert('Removed')
      },
      {
        text: 'Cancel',
        style: 'cancel'
      }
    ])

    console.log(`Click in remove button ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta 4, de março de 2024
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          value={participantName}
          onChangeText={setParticipantName}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Has anyone arrived at the event yet? Add participants to your attendance list
          </Text>
        )}
      />
    </View>
  )
}