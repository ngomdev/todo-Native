import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');

  const [courseGoals, setCourseGoals] = useState([]);

  function goalsInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setCourseGoals(
      (currentCourseGoals) =>
        [...currentCourseGoals,
        {
          text: enteredGoalText,
          id: Math.random().toString()
        }])

  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder=' Your course Goal !'
          onChangeText={goalsInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>

        <FlatList data={courseGoals}
          renderItem={(itemData) => {

            itemData.index
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            )

          }}

          keyExtractor={(item, index) => {
            return item.id;
          }

          }
          alwaysBounceVertical={false} />


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,

    paddingTop: 50,
    paddingHorizontal: 16,

  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5,
    paddingTop: 10
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalText: {
    color: '#fff'

  }

});
