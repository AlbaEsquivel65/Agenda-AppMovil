
import React, { useContext } from 'react';
import { Text, View, ScrollView } from "react-native";
import styles from "../utils/styles";
import { ApplicationContext } from '../contexts/ApplicationContext';
import CardPrincipal from '../Components/Card.Principal';
import { map } from "lodash";

const ActivityScreen = (props) => {
    const { listItem, deleteItem } = useContext(ApplicationContext);

    const handleEditItem = (item) => {
        props.navigation.navigate("EditItem", JSON.stringify(item));
    };

    const handleDeleteItem = (item) => {
        deleteItem(item);

    };
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header1}>Mis Actividades</Text>
            <View>
                {listItem && map((listItem.filter(i => i.typeId === 3)), (item) => (
                    <CardPrincipal key={item.id} type={3} title={item.title} principal={false} updateItem={handleEditItem} removeItem={handleDeleteItem} currentItem={item}>
                        <Text style={styles.titleSecundary}> Descriccion:</Text>
                        <View style={styles.cardSecundary3}>
                            <Text> {item.description}</Text>
                        </View>
                        <View style={styles.boxRow}>
                            <View>
                                <Text style={styles.titleSecundary}>Fecha :</Text>
                                <View style={styles.cardSecundary3}>
                                    <Text style={styles.textParagraph}> {item.datetime.split(',')[0]}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.titleSecundary}>Hora:</Text>
                                <View style={styles.cardSecundary3}>
                                 <Text style={styles.textParagraph}> {item.datetime.split(',')[1].split('.')[0]}</Text>
                                </View>
                            </View>

                        </View>
                    </CardPrincipal>
                ))}
            </View>
        </ScrollView>
    )
}
export default ActivityScreen;