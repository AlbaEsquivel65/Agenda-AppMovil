import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DashboardScreen from "../screens/DashboardScreen";
import EditItemScreen from "../screens/EditItemScreen";
import ReminderScreen from "../screens/ReminderScreen";
import TaskScreen from "../screens/TaskScreen";
import ActivityScreen from "../screens/ActivityScreen";
const Stack = createNativeStackNavigator();

const DashboardTab = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={DashboardScreen}
        options={{ title: 'Bienvenido/a' }}
        name="Dashboard"
      />

      <Stack.Screen
        component={EditItemScreen}
        options={{ title: 'Editar elemento' }}
        name="EditItem"
      />

       <Stack.Screen
        component={ReminderScreen}
        options={{ title: 'Recordatorios' }}
        name="Reminder"
      />
      <Stack.Screen
        component={TaskScreen}
        options={{ title: 'Tareas' }}
        name="Task"
      />
        <Stack.Screen
        component={ActivityScreen}
        options={{ title: 'Actividades' }}
        name="Activity"
      />

    </Stack.Navigator>
  );
};

export default DashboardTab;