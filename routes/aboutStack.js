import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import About from '../components/about';


const screens = {
    About: {
        screen: About
    }
}
const AboutStack = createStackNavigator(screens);

export default createAppContainer(AboutStack);