// Arquivo responsável por registrar e configurar a navegação por ABAS
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Home from '../screens/Home';
import Product from '../screens/Product';

const Bottom = createBottomTabNavigator


export function BottomRoutes() {

    return (
        <Bottom.Navigator>
            <Bottom.Screen
                name="home"
                component={Home}
            />
            <Bottom.Screen
                name="product"
                component={Product}
                />
            </Bottom.Navigator>
    )
}