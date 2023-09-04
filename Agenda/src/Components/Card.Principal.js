
import React from 'react';
import { Text, View } from "react-native";
import styles from "../utils/styles";
import Ionicons from '@expo/vector-icons/Ionicons';

const CardPrincipal = ({ children, type, title, movePage, principal, updateItem, removeItem, currentItem, }) => {

    const handleEditItem = () => {
        updateItem(currentItem)
    }

    const handleDeleteItem = () => {
        removeItem(currentItem);
    }

    const navigateReminder = () => {
        movePage();
    };

    return (
        <View style={type === 1 ? styles.cardPrincipal1 : type === 2 ? styles.cardPrincipal2 : styles.cardPrincipal3}>
            <View style={type === 1 ? styles.boxTitle1 : type === 2 ? styles.boxTitle2 : styles.boxTitle3}>
                <View style={styles.boxBetween}>
                    <Text style={styles.title}>{title}</Text>
                    {principal && <Ionicons name="expand-outline" size={30} color="black" onPress={navigateReminder}></Ionicons>}
                    {principal ||
                        <View style={styles.boxRow}>
                            <Ionicons name="create" size={30} color="black" onPress={handleEditItem} ></Ionicons>
                            <Ionicons name="trash-sharp" size={30} color="black" onPress={handleDeleteItem}></Ionicons>
                        </View>}
                </View>
            </View>
            {[children]}
        </View>

    )
}
export default CardPrincipal;