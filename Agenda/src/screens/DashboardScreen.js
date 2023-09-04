import React, { useContext } from 'react';
import { Text, View, ScrollView } from "react-native";
import styles from "../utils/styles";
import { ApplicationContext } from '../contexts/ApplicationContext';
import { map } from "lodash";
import dayjs from "dayjs";
import CardPrincipal from '../Components/Card.Principal';
import Ionicons from '@expo/vector-icons/Ionicons';

const DashboardScreen = (props) => {
    const { listItem, editToItemStatus } = useContext(ApplicationContext);

    const navigateReminder = () => {
        props.navigation.navigate("Reminder");
    };
    const navigateTask = () => {
        props.navigation.navigate("Task");
    };
    const navigateActivity = () => {
        props.navigation.navigate("Activity");
    };
    const handleEditStatus = (item) => {
        editToItemStatus(item)
    };

    const isNextSevenDays = (curretDate) => {
       let  d = new Date(dayjs(new Date()).format('YYYY-MM-DD'));
        d.setDate(d.getDate() + 7);
       let dateInSeven = dayjs(d).format('YYYY-MM-DD').split('-')[2];
       let today = dayjs(new Date()).format('YYYY-MM-DD').split('-')[2];
        if (Number(curretDate.split('-')[2]) <= Number(dateInSeven) && Number(curretDate.split('-')[2]) >= Number(today)) {
            return true;
        } else {
            return false;
        }
    };
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header1}>Mi Agenda</Text>
            <CardPrincipal type={2} title={"Recordatorios"} movePage={navigateReminder} principal={true}  >
                <Text style={styles.textParagraph}>Proximos 7 dias...</Text>
                {listItem && map((listItem.filter(i => (i.typeId === 2 && isNextSevenDays(i.datetime.split(',')[0])))), (item) => (
                    <View key={item.id} style={styles.cardSecundary2}>
                        <View style={styles.boxRow}>
                            <Ionicons name="notifications" size={25} color="black" />
                            <Text style={styles.textParagraph}> {item.title}</Text>
                        </View>
                        <Text style={styles.textParagraph}> {item.datetime.split(',')[0]}</Text>
                    </View>
                ))}
            </CardPrincipal>
            <CardPrincipal type={1} title={"Tareas"} movePage={navigateTask} principal={true}>
                <Text style={styles.textParagraph}>Pendientes...</Text>
                {listItem && map((listItem.filter(i => (i.typeId === 1 && i.statusId === 1))), (item) => (
                    <View key={item.id} style={styles.cardSecundary1}>
                        <View style={styles.boxRow}>
                            <Ionicons name="document-text" size={25} color="black" />
                            <Text style={styles.textParagraph}> {item.title}</Text>
                        </View>
                        <Ionicons name="radio-button-off" size={25} color="black" onPress={() => handleEditStatus(item)} />
                    </View>
                ))}
            </CardPrincipal>
            <CardPrincipal type={3} title={"Actividades"} movePage={navigateActivity} principal={true}>
                {listItem && map((listItem.filter(i => i.typeId === 3)), (item) => (
                    <View key={item.id} style={styles.cardSecundary3}>
                        <View style={styles.boxRow}>
                            <Ionicons name="clipboard" size={25} color="black" />
                            <Text style={styles.textParagraph}> {item.title}</Text>
                        </View>
                        <Text style={styles.textParagraph}> {item.datetime.split(',')[1]}</Text>
                    </View>
                ))}
            </CardPrincipal>
        </  ScrollView >
    );
};

export default DashboardScreen;