import React, {Component} from 'react';
import Typist from 'react-typist';
import './App.css';

  // Enigma Process
    //0. Rotate wheels
    //1. Plug Board
    //2. Right Wheel
    //3. Middle Wheel
    //4. Left Wheel
    //5. Reflector
    //6. Left Wheel
    //7. Middle Wheel
    //8. Right Wheel
    //9. PlugBoard
    //10. Output Character

  //Extra Steps
    //Validation
    //Strings

    
class App extends Component {

  constructor() {
    super();
    this.EnigmaString = this.EnigmaString.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      Enigma: "TESTTESTTESTTEST"
    }
  }
    EnigmaString(s){
      let Wheelpositions = [0,0,0];
      let i;
      let encripted = "";
      for(let j = 0; j < s.length; j++){
       i = this.EnigmaMachine(s[j], Wheelpositions);
       encripted += i[1];
       Wheelpositions = i[0];
      }
      this.setState({Enigma:encripted});
    }

    //MotherBoard
    EnigmaMachine(i, Wheelpositions){

    const pairs = [
      {
        p1: 'A',
        p2: 'J'
      },
      {
        p1: 'P',
        p2: 'Q'
      },
      {
        p1: 'I',
        p2: 'T'
      },
      {
        p1: 'Y',
        p2: 'K'
      }
    ]
    const I = ['E','K','M','F','L','G','D','Q','V','Z','N','T','O','W','Y','H','X','U','S','P','A','I','B','R','C','J'];
    const II = ['A','J','D','K','S','I','R','U','X','B','L','H','W','T','M','C','Q','G','Z','N','P','Y','F','V','O','E'];
    const III = ['B','D','F','H','J','L','C','P','R','T','X','V','Z','N','Y','E','I','W','G','A','K','M','U','S','Q','O'];
    const Base = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const ReflectorB = ['Y','R','U','H','Q','S','L','D','P','X','N','G','O','K','M','I','E','B','F','Z','C','W','V','J','A','T'];
    //const ReflectorC = ['F','V','P','J','I','A','O','Y','E','D','R','Z','X','W','G','C','T','K','U','Q','S','B','N','M','H','L'];

      Wheelpositions = this.RotateWheels(Wheelpositions);
      i = this.PlugBoard(i, pairs);
      i = this.WheelRotation(I, Base, Wheelpositions, i, 2, false);
      i = this.WheelRotation(II, Base, Wheelpositions, i, 1, false);
      i = this.WheelRotation(III, Base, Wheelpositions, i, 0, false);
      i = this.Reflector(i, ReflectorB, Base);
      i = this.WheelRotation(III, Base, Wheelpositions, i, 0, true);
      i = this.WheelRotation(II, Base, Wheelpositions, i, 1, true);
      i = this.WheelRotation(I, Base, Wheelpositions, i, 2, true);
      i = this.PlugBoard(i, pairs);
      let Enigma = [Wheelpositions, i];
      return Enigma;
    }

    // ROTATE WHEELS //
    //increment first wheel
    //then increment second wheel
    //then increment third wheel
    //return wheels
    RotateWheels(w){
      w[2]++;

      if(w[2]>26){
        w[2] = 1;
        w[1]++;
      }

      if(w[1]>26){
        w[1] = 1;
        w[0]++;
      }

      if(w[0]>26){
        w[0] = 1;
      }

      return (w);
    }

    // PLUG BOARD //
    // Take Plug Board Array
    // Find 'Plugged' character,
    // return plugged character or original character if it is not plugged
    PlugBoard(i, pairs) {
      try {
        i = pairs.find(p => p.p1 === i).p2;
        return i;
      } catch (e) {}
      try {
        i = pairs.find(p => p.p2 === i).p1;
        return i;
      } catch (e) {}
      return i; 
    }

    //WHEELS//
    //"Rotate" wheel by moving wheel position
    //Does not change rotation of wheel, but rotates wheel by the wheel positions
    WheelRotation (inner, outer, wp, i, wheel, r){
      if(!r){
      for(let j = 1; j < wp[wheel]; j++){
      inner.push(inner.shift());
      }
    }
      return this.WheelOutput(inner, outer, i, r);
    }

    WheelOutput (inner, outer, i, reverse){

      if(reverse){
        let j = outer.indexOf(i);
        return inner[j];
      }
      else{
        let j = inner.indexOf(i);
        return outer[j];
      }
    }

    //Reflector
    Reflector(i, Reflector, Base){
      let j = Base.indexOf(i);
      return Reflector[j];
    }

    submit(e){
      e.preventDefault();
      let string = document.getElementById('enigmaInput').value;
      string = string.toUpperCase();
      string = string.replace(/\s/g, '');
      this.EnigmaString(string);
    }

  render(){
  return (
    <div className="App">
      <div id="enigma">
        <h1>E N I G M A</h1>
        <div id="display-area">
        <form onSubmit={this.submit}>
          <div class="box">
            <textarea id="enigmaInput" cols="50" rows="10"/>
            <input type="submit"/>
          </div>
        </form>
        <div class="box">
          <h2 style={{wordWrap:'break-word', width:'20vw'}}>{this.state.Enigma}</h2>
        </div>
        </div>
      </div>
    </div>
  );
}}

export default App;
