import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import StarterScreen from "./src/screens/StarterScreen";
import ListScreen from "./src/screens/ListScreen";
import AnimalList from "./src/screens/AnimalList";
import ListOfScreen from "./src/screens/ListOfScreen";
import ImageScreen from "./src/screens/ImageScreen";



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Starter: StarterScreen,
    List: ListScreen,
    Animal: AnimalList,
    Screen: ListOfScreen,
    Image: ImageScreen
  },
  {
    initialRouteName: "Image",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);



export default createAppContainer(navigator);
