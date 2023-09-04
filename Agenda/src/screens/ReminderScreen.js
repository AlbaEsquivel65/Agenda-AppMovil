
import React, { useContext } from 'react';
import { Text, View ,ScrollView} from "react-native";
import styles from "../utils/styles";
import { ApplicationContext } from '../contexts/ApplicationContext';
import CardPrincipal from '../Components/Card.Principal';
import { map } from "lodash";

const RemiderScreen = (props) => {
    const { listItem, deleteItem } = useContext(ApplicationContext);

    const handleEditItem = (item) => {
        props.navigation.navigate("EditItem", JSON.stringify(item));
    };

    const handleDeleteItem = (item) => {
        //  deleteStudent(student);
        deleteItem(item);

    };
    return (

        <ScrollView style={styles.container}>
            <Text style={styles.header1}>Mis Recordadorios</Text>
            <View>
                {listItem && map((listItem.filter(i => i.typeId === 2)), (item) => (

                    <CardPrincipal key={item.id} type={2} title={item.title} principal={false} updateItem={handleEditItem} removeItem={handleDeleteItem} currentItem={item}>

                        <Text style={styles.titleSecundary}> Descriccion:</Text>
                        <View style={styles.cardSecundary2}>
                            <Text style={styles.textParagraph}> {item.description}</Text>
                        </View>
                        <View style={styles.boxRow}>
                            <View>
                                <Text style={styles.titleSecundary}>Fecha :</Text>
                                <View style={styles.cardSecundary2}>
                                    <Text style={styles.textParagraph}> {item.datetime.split(',')[0]}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.titleSecundary}>Hora:</Text>
                                <View style={styles.cardSecundary2}>
                                    <Text style={styles.textParagraph}> {item.datetime.split(',')[1].split('.')[0]}</Text>
                                    {console.log(item.datetime)}
                                </View>
                            </View>

                        </View>
                        

                    </CardPrincipal>
                ))}
            </View>
        </ScrollView>
    )
}
export default RemiderScreen;