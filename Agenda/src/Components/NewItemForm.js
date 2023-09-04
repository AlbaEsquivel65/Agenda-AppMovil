import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { Text, TextInput, View, Pressable, ScrollView } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from "dayjs";
import styles from "../utils/styles";


const NewItemForm = (props) => {
    const status = [{ id: 1, name: 'En progreso' }, { id: 2, name: 'Completado' }];
    // const types = [{ id: 1, name: 'Tarea' }, { id: 2, name: 'Recordatorio' }, { id: 3, name: 'Actividad' }];
    const itemData = props.itemData;

    const [item, setItem] = useState({
        id: props.id,
        title: '',
        description: '',
        datetime: dayjs(new Date()).format('YYYY-MM-DD,HH:mm:ss.sss'),
        typeId: props.type,
        statusId: 1
    }); const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    useEffect(() => {
        if (itemData) {
            setItem({
                title: itemData?.title ?? '',
                description: itemData?.description ?? '',
                datetime: itemData?.datetime ?? dayjs(new Date()).format('YYYY-MM-DD,HH:mm:ss.sss'),
                typeId: itemData?.typeId ?? props.type,
                statusId: itemData?.statusId ?? 1,
            });

        }

    }, [itemData]);

    const handleChangeTitle = (text) => {
        setItem({
            ...item,
            title: text,
        })
    };

    const handleChangeDescription = (text) => {
        setItem({
            ...item,
            description: text,
        })
    };
    // fuente: https://morioh.com/p/838502818d0f
    const handleChangeDateTime = (event, selectedDate) => {
        setShow(false);
        setDate(selectedDate);
        setItem({
            ...item,
            datetime: dayjs(selectedDate).format('YYYY-MM-DD,HH:mm:ss.sss'),
        });
    };

    const handleChangeStatus = (value) => {
        setItem({
            ...item,
            statusId: Number(value),
        });
    };

    const handleSubmit = () => {
        console.log(props.id)
        props.onSubmit({
            ...item,
            id: itemData?.id ?? props.id + 1
        });
        setItem({
            id: props.id,
            title: '',
            description: '',
            datetime: dayjs(new Date()).format('YYYY-MM-DD,HH:mm:ss.sss'),
            typeId: props.type,
            statusId: 1
        })
        props.onCancel()
    }
    const handleCancel = () => {
        props.onCancel()
    }

    return (
        <ScrollView style={(props.type === 1) ? styles.containerForm1 : (props.type === 2) ? styles.containerForm2 : styles.containerForm3}>
            <Text style={styles.header2} >Titulo:</Text>
            <TextInput
                style={styles.input}
                value={item.title}
                onChangeText={handleChangeTitle}
                maxLength={23}
                placeholder="Agregue un titulo...."
            />
            <Text style={styles.header2}>Descricion:</Text>
            <TextInput
                style={styles.input}
                multilinea
                maxLength={80}
                value={item.description}
                onChangeText={handleChangeDescription}
                placeholder="Agregue una descripcion...."
            />
            {(props.type !== 1) &&
                <View >
                    <View>
                      
                        < Pressable style={(props.type === 1) ? styles.buttonForm1 : (props.type === 2) ? styles.buttonForm2 : styles.buttonForm3}
                            onPress={showDatepicker} >
                            <Text style={styles.textButtonForm}>{itemData ? "Editar fecha" : "Agregar fecha"}</Text>
                        </Pressable>

                    </View>
                    <View >
                        
                        < Pressable style={(props.type === 1) ? styles.buttonForm1 : (props.type === 2) ? styles.buttonForm2 : styles.buttonForm3}
                            onPress={showTimepicker} >
                            <Text style={styles.textButtonForm}>{itemData ? "Editar hora" : "Agregar hora"} </Text>
                        </Pressable>
                    </View>
                </View>
            }
            {show && (
                <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={handleChangeDateTime}
                />
            )}
            {(props.type === 1) &&
                <View>
                    <Text style={styles.header2}>Estado:</Text>
                    {status && (
                        <Picker
                            selectedValue={item.statusId}
                            onValueChange={handleChangeStatus}
                        >
                            {status.map(s =>
                                <Picker.Item key={s.id} label={s.name} value={s.id} />
                            )}
                        </Picker>
                    )}
                </View>
            }

            <View style={styles.butttonBox}>
                < Pressable style={(props.type === 1) ? styles.buttonForm1 : (props.type === 2) ? styles.buttonForm2 : styles.buttonForm3}
                    onPress={handleSubmit}>
                    <Text style={styles.textButtonForm}>{itemData ? "Guardar Cambios" : "Agregar"}</Text>
                </Pressable>

                < Pressable style={styles.buttonCancel} onPress={handleCancel}>
                    <Text style={styles.textButtonForm}>Cancelar</Text>
                </Pressable>
            </View>
     </  ScrollView >
    );
};

export default NewItemForm;