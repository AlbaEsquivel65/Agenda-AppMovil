
import React, { useContext } from 'react';
import { Text, View, ScrollView } from "react-native";
import styles from "../utils/styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { ApplicationContext } from '../contexts/ApplicationContext';
import CardPrincipal from '../Components/Card.Principal';
import { map } from "lodash";

const TaskScreen = (props) => {
    const { listItem, deleteItem, editToItemStatus } = useContext(ApplicationContext);
    const handleEditItem = (item) => {
        props.navigation.navigate("EditItem", JSON.stringify(item));
    };

    const handleDeleteItem = (item) => {
        deleteItem(item);

    };

    const handleEditStatus = (item) => {
        editToItemStatus(item)
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header1}>Mis Tareas</Text>
            <View>
                {listItem && map((listItem.filter(i => i.typeId === 1)), (item) => (
                    <CardPrincipal key={item.id} type={1} title={item.title} principal={false} updateItem={handleEditItem} removeItem={handleDeleteItem} currentItem={item}>
                        <Text style={styles.titleSecundary}> Descriccion:</Text>
                        <View style={styles.cardSecundary1}>
                            <Text> {item.description}</Text>
                        </View>
                        <Text style={styles.titleSecundary}>Estado:</Text>
                        <View style={styles.cardSecundary1}>
                            <Text> {item.statusId === 1 ? 'En progreso' : 'Completado'}</Text>
                            <Ionicons name={item.statusId === 1 ?'radio-button-off': 'checkmark-circle-sharp'} size={28} color={item.statusId === 1 ? 'black' : 'green'} onPress={() => handleEditStatus(item)}></Ionicons>
                        </View>
                    </CardPrincipal>
                ))}
            </View>
        </ScrollView>
    )
}
export default TaskScreen;