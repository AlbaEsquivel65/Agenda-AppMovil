import React, { useContext, useState } from 'react';
import { Text, View, Pressable } from "react-native";
import styles from "../utils/styles";
import NewItemForm from "../Components/NewItemForm";
import { ApplicationContext } from '../contexts/ApplicationContext';

const NewItemScreen = (props) => {
  //console.log("NEWITEM SCREEN PROPS", { props });

  const [showForm, setShowForm] = useState(false);
  const [type, setType] = useState(0);
  const { id, addToItem } = useContext(ApplicationContext);



  const handleSubmit = (item) => {
    if (item) {
      addToItem(item);
      props.navigation.navigate("DashboardTab", {
        screen: "Dashboard",
        params: {
          redirectionTime: (new Date()).toISOString(),
        }
      });
    }
  };
  const handleCancel = () => {
    setShowForm(false);
    setType(0);
  }
  const showFormTask = () => {
    setType(1);
    setShowForm(true);
  }
  const showFormReminder = () => {
    setType(2);
    setShowForm(true);

  }
  const showFormActivity = () => {
    setType(3);
    setShowForm(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header1}>{(type === 0) ? 'Crear Nuevo Elemento' : (type === 1) ? 'Crear Nueva Tarea' : (type === 2) ? 'Crear Nuevo Recordatorio' : 'Crear Nueva Actividad'}</Text>

      {showForm ||
        <View>
          <Pressable style={styles.buttonReminder2} onPress={showFormReminder}>
            <Text style={styles.textButton}>Recordatorios</Text>
          </Pressable>
          <Pressable style={styles.buttonTask1} onPress={showFormTask} >
            <Text style={styles.textButton}>Tareas</Text>
          </Pressable>
          <Pressable style={styles.buttonActivity3} onPress={showFormActivity} >
            <Text style={styles.textButton}>Actividades</Text>
          </Pressable>
        </View>}


      {showForm &&
        <NewItemForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          id={id}
          type={type}
        />}
    </View>
  );
};

export default NewItemScreen;