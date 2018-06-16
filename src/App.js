import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';

//This is the main view
export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
        <ScrollView>
          <Image source={pic} style={{width: 193, height: 110}}/>

          <Text>Open up src/App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Also, you suck. Like, big time.</Text>
          <Text>Nuh, uh. You do.</Text>
          <Text style={styles.bigblue}>Shake your phone to open the developer menu. This sucks.</Text>

          {/* Renders Greeting with input name, defined below. */}
          <Greeting name="Bobi" />
          <Greeting name="Blob" />
          <Greeting name="Ping" />

          <Time style={styles.bigblue} text="WABBA" />

          <Button
            onPress={() => {
              Alert.alert("You tapped button!");
            }}
            title="Press Me"
          />
          
          {/* flex:1 means fill all space. */}
          {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
          <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} /> */}

          <PizzaTranslator />
        </ScrollView>
      </View>
    );
  }
}

/**
 * Props are properties. 
 * 
 */
class PizzaTranslator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style = {{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && 'pizza').join(' ')}
        </Text>
      </View>
    );
  }
}

// This is what a Greeting looks like. Finds name and inserts here.
// props are given by the JSX. 
class Greeting extends React.Component {
  render() {
    return(
      <Text>Hi {this.props.name}!</Text>
    );
  }
}

var d;
var startTime;
var currentTime;
var lapTime;
var recordedLaps = new Array();
var timerID;

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: 0 };
    //this.state = {isShowingText: true};

    d = new Date();
    startTime = d.getTime();

    setInterval(() => {
      this.setState(previousState => {
        d = new Date();
        return { currentTime: d.getTime() - startTime };
      });
    }, 10);

  }

  render() {
    //let display = this.state.isShowingText ? this.props.text : "NO";
    let display = this.state.currentTime;
    return (
      <Text style={styles.bigblue}>{display}</Text>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
