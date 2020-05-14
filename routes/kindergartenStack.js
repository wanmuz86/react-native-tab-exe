import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Kindergarten from '../components/kindergarten';
import KindergartenDetail from '../components/kindergartenDetail';

const screens = {
    Kindergarten: {
        screen: Kindergarten
    }, KindergartenDetail: {
        screen: KindergartenDetail
    },
}
const KindergartenStack = createStackNavigator(screens);

export default createAppContainer(KindergartenStack);
