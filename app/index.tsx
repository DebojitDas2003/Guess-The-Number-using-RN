import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [number, setNumber] = useState(0)
  const [option, setOption] = useState(0)
  const [isOptionSelected, setIsOptionSelected] = useState(false)

  const startGame = () => {
    setNumber(Math.floor(Math.random() * 4 + 1))
    setIsOptionSelected(false)
  }

  {
    /*--------------------------------------------------------------------------------Brute Force Method----------------------------------------------------------------------------*/
  }

  // const select1 = () => {
  //   setOption(1)
  //   setIsOptionSelected(true)
  // }
  // const select2 = () => {
  //   setOption(2)
  //   setIsOptionSelected(true)
  // }
  // const select3 = () => {
  //   setOption(3)
  //   setIsOptionSelected(true)
  // }
  // const select4 = () => {
  //   setOption(4)
  //   setIsOptionSelected(true)
  // }

  const selectOption = (selectedOption: number) => {
    setOption(selectedOption)
    setIsOptionSelected(true)
  }

  {
    /*--------------------------------------------------------------------------------Brute Force Method----------------------------------------------------------------------------*/
  }

  // const result = () => {
  //   if (number == option) {
  //     return 'Noice'
  //   } else {
  //     return 'Nope'
  //   }
  // }

  const result = () => {
    return number === option ? 'Noice' : 'Nope'
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guess The Number</Text>
      <TouchableOpacity style={styles.button} onPress={startGame}>
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
      <View style={styles.guessContainer}>
        {/*--------------------------------------------------------------------------------Brute Force Method----------------------------------------------------------------------------*/}

        {/* <View style={styles.optionRow}>
          <TouchableOpacity style={styles.option} onPress={select1}>
            <Text style={styles.optionText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={select2}>
            <Text style={styles.optionText}>2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.optionRow}>
          <TouchableOpacity style={styles.option} onPress={select3}>
            <Text style={styles.optionText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={select4}>
            <Text style={styles.optionText}>4</Text>
          </TouchableOpacity>
        </View> */}

        {/*--------------------------------------------------------------------------------Optimized Method----------------------------------------------------------------------------*/}

        <View style={styles.optionRow}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => selectOption(1)}
          >
            <Text style={styles.optionText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => selectOption(2)}
          >
            <Text style={styles.optionText}>2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.optionRow}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => selectOption(3)}
          >
            <Text style={styles.optionText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => selectOption(4)}
          >
            <Text style={styles.optionText}>4</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>{isOptionSelected && result()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#159159',
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontWeight: '500',
  },
  guessContainer: { width: '100%' },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  option: {
    borderRadius: 40,
    backgroundColor: '#090909',
  },
  optionText: {
    color: 'white',
    paddingHorizontal: 30,
    paddingVertical: 20,
    fontSize: 20,
  },
})

export default App
