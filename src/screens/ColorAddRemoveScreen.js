// import React, { useState } from "react";
import React, { useReducer } from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import ColorCounter from "../Components/ColorCounter";

// step 3
const reducer = (state, action) => {
  // state === {red=number, green=number, blue=number}
  // action === {colorToChnage:'red' || 'green' || 'blue', amount: 15 | -15}

  switch(action.colorToChange)
  {
      case 'red':
          return (state.red + action.amount > 255 || state.red + action.amount < 0) ? 
          state :
          {...state, red:state.red + action.amount};
     case 'green':
          return (state.green + action.amount > 255 || state.green + action.amount < 0) ? 
          state : 
          {...state, green:state.green + action.amount};
     case 'blue':
          return (state.blue + action.amount > 255 || state.blue + action.amount < 0) ? 
          state : 
          {...state, blue:state.blue + action.amount};
    default:

    
  }
};

const ColorAddRemoveScreen = () => {
const COLOR_INCREMENT = 15;

// const [ red, setRed ] = useState(0);
// const [ blue, setBlue ] = useState(0);
// const [ green, setGreen ] = useState(0);



const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0}); // 1 step  - dispatch = anyname - reducer=function that we created
const {red, green, blue} = state;

const setColor = (color, change) => {
    // if(color === 'red'){
    //     if(red + change > 255 || red + change > 0){
    //         return;
    //     }
    //     else
    //     {
    //         return color + change;
    //     }
    // }

    switch(color){
        case 'red':
            (red + change > 255 || red + change < 0) ?  null : setRed(red + change);
            break;
        case 'green':
            (green + change > 255 || green + change < 0) ?  null : setGreen(green + change);
        case 'blue':
            (blue + change > 255 || blue + change < 0) ?  null : setBlue(blue + change);
        default:
            return;
    }

    console.log(red);


};

return (
    <View>

        {/* <ColorCounter color="Red" 
        onIncrease={() => setRed(red + COLOR_INCREMENT)} 
        onDecrease={() => setRed(red - COLOR_INCREMENT)}/> */}
    <Text> {red} + {green} + {blue} </Text>
    {/* <ColorCounter color="Red" 
        onIncrease={() => setColor("red", COLOR_INCREMENT)} 
        onDecrease={() => setColor("red", (-1 * COLOR_INCREMENT))}/> */}

    <ColorCounter color="Red" 
        onIncrease={() => dispatch({colorToChange:'red', amount:COLOR_INCREMENT})}  // step 4 of use reducer
        
        onDecrease={() => dispatch({colorToChange:'red', amount:(-1 * COLOR_INCREMENT)})}/>

        <ColorCounter color="Blue" 
        onIncrease={() => dispatch({colorToChange:'blue', amount:COLOR_INCREMENT})} 
        onDecrease={() => dispatch({colorToChange:'blue', amount:(-1 * COLOR_INCREMENT)})}/>

        <ColorCounter color="Green" 
        onIncrease={() => dispatch({colorToChange:'green', amount:COLOR_INCREMENT})} 
        onDecrease={() => dispatch({colorToChange:'green', amount:(-1 * COLOR_INCREMENT)})}/>

        <View style={{height: 150, 
            width:150, 
            backgroundColor: `rgb(${red}, ${green}, ${blue})`, alignItems:"center"}}>
        </View>

    </View>
);

};

const styles = StyleSheet.create({});


export default ColorAddRemoveScreen;