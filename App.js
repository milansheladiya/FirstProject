import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import StarterScreen from "./src/screens/StarterScreen";
import ListScreen from "./src/screens/ListScreen";
import AnimalList from "./src/screens/AnimalList";
import ListOfScreen from "./src/screens/ListOfScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import RandomDominos from "./src/screens/RandomDominos";
import ColorAddRemoveScreen from "./src/screens/ColorAddRemoveScreen";
import ColorCounter from "./src/Components/ColorCounter";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Starter: StarterScreen,
    List: ListScreen,
    Animal: AnimalList,
    Screen: ListOfScreen,
    Image: ImageScreen,
    Counter : CounterScreen,
    Color : ColorScreen,
    Domino : RandomDominos,
    ColorAddRemove : ColorAddRemoveScreen,
    ColorCounter : ColorCounter,
    Text : TextScreen,
    Box : BoxScreen,
  },
  {
    initialRouteName: "Box",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);



export default createAppContainer(navigator);
