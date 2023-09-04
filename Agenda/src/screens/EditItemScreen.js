import React, { useContext, useState } from 'react';
import { Text, View } from "react-native";
import styles from "../utils/styles";
import NewItemForm from "../Components/NewItemForm";
import { ApplicationContext } from '../contexts/ApplicationContext';

const EditItemScreen = (props) => {
  const { id, editToItem } = useContext(ApplicationContext);
  [type, setType] = useState(JSON.parse(props.route.params).typeId)

  const handleSubmit = (item) => {
    if (item) {
      editToItem(item);
      props.navigation.navigate("DashboardTab", {
        screen: "Dashboard",
        params: {
          redirectionTime: (new Date()).toISOString(),
        }
      });
    }
  };
  const handleCancel =()=>{
     if(type===1){
      props.navigation.navigate("Task");
     }else if(type===2){
      props.navigation.navigate("Reminder");
     }else{
      props.navigation.navigate("Activity");
     }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Editar Elemento</Text>
      <NewItemForm
        onSubmit={handleSubmit}
        itemData={JSON.parse(props.route.params)}
        id={id}
        type={type}
        onCancel={handleCancel}
      />
    </View>
  );
};
export default EditItemScreen;