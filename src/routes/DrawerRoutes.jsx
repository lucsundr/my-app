// Arquivo responsável por registrar e configurar a navegação por ABAS
import Home from '../screens/Home';
import Product from '../screens/Product';
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();


export function DrawerRoutes() {

    return (
        <Drawer.Navigator
        initialRouteName="profile"
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#7C3AED",
            tabBarInactiveTintColor: "#9C43AF"
         }}
        >
            <Drawer.Screen
                name="home"
                component={Home}
            />
            <Drawer.Screen
                name="product"
                component={Product}
                />
                <Drawer.Screen
                name="profile"
                component={Profile}
                />
            </Drawer.Navigator>
    )
}