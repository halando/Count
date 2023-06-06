import React from 'react';
import { StyleSheet,
   Text,
    View,
    TextInput,
    Button } from 'react-native';

export default function App() {
  const[count,setCount] = React.useState(10);
  function doit(){
 let sum = Number(count) +1;
 setCount(sum);

  }
  return (
    <View style={styles.container}>
      <Text style ={styles.elso}>Számláló</Text>
      <Button title='Számol'  onPress={doit}/>
      <View>
        <Text style ={styles.elso}>
         {count} 
        </Text>
        </View>
        <Button title="Nulla"  onPress={() => setCount(0)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008',
    alignItems: 'center',
    justifyContent: 'center',

  },
  elso:
  {
    color:'#fff',
    fontSize: 70,
  },
  input: {
    backgroundColor: 'lightblue',
    width:'90%',
  },
});
