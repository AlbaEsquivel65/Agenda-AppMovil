import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NewItemScreen from "../screens/NewItemScreen";

const Stack = createNativeStackNavigator();

const NewItemTab = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                component={NewItemScreen}
                options={{ title: 'Nuevo Elemento' }}
                name="NewItem"
                >
            </Stack.Screen>
        </Stack.Navigator>
    );

};
export default NewItemTab;