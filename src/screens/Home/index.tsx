import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {
  const participants = ['John Doe', 'Jane Doe', 'Mark Doe', 'Nolan Doe', 'Jack Doe', 'Zoe Doe', 'Noah Doe', 'Peter Doe', 'Josh Doe'];

  function handleParticipantAdd() {
    console.log('Click in add button')
  }

  function handleParticipantRemove(name: string) {
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