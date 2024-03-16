import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {

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

      <Participant name="John Doe" onRemove={handleParticipantRemove} />
      <Participant name="Jane Doe" onRemove={handleParticipantRemove} />
      <Participant name="Mark Doe" onRemove={handleParticipantRemove} />
    </View>
  )
}