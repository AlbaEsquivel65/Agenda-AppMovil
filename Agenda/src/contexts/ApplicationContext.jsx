import { createContext, useState } from "react";
import dayjs from "dayjs";
import { map } from "lodash";
const initialValue = {};
export const ApplicationContext = createContext(initialValue);

export const ApplicationContextProvider = (props) => {
  const [id, setId] = useState(5)
  const initialItem = [{
    id: 1,
    title: "Graficos",
    description: "Hacer un juego de tateti",
    datetime: dayjs(new Date()).format('YYYY-MM-DD,HH:mm:ss.sss'),
    typeId: 1,
    statusId: 1
  },
  {
    id: 2,
    title: "Compiladores",
    description: "Hacer el proyecto de compiladores la parte de analisador semantico",
    datetime: dayjs(new Date()).format('YYYY-MM-DD,HH:mm:ss.sss'),
    typeId: 2,
    statusId: 1
  },
  {
    id: 3,
    title: "Ir al GYM",
    description: "Despues de ir al nutricionista",
    datetime: dayjs(new Date()).format('YYYY-MM-DD,HH:mm:ss.sss'),
    typeId: 3,
    statusId: 1
  }
    ,
  {
    id: 4,
    title: "Estudiar IA",
    description: "Rendir el final de IA",
    datetime: dayjs(new Date()).format('YYYY-MM-DD,HH:mm:ss.sss'),
    typeId: 1,
    statusId: 1
  }
    ,
  {
    id: 5,
    title: "Entregar Ejercios",
    description: "Terminar los ejercicios de logica",
    datetime: dayjs(new Date()).format('YYYY-MM-DD,HH:mm:ss.sss'),
    typeId: 1,
    statusId: 2
  }

  ];

  const [listItem, setListItem] = useState(initialItem);

  const addToItem = (item) => {
    setListItem([...listItem, item]);
    setId(id + 1);
  }

  const editToItem = (item) => {

   let arr = listItem.map(i => i.id === item.id ? item : i)
    setListItem(arr)
  }

  const editToItemStatus = (item) => {
    if (item.statusId === 1) {
      let arr = listItem.map(i => i.id === item.id ? { ...item, statusId: 2 } : i)
      setListItem(arr)
    } else {
      let arr = listItem.map(i => i.id === item.id ? { ...item, statusId: 1 } : i)
      setListItem(arr)
    }
  }




  const deleteItem = (item) => {
    setListItem(listItem.filter((i) => i.id !== item.id));
  };

  const contextApi = {
    id,
    listItem,
    addToItem,
    editToItem,
    deleteItem,
    editToItemStatus,
  };

  return (
    <ApplicationContext.Provider value={contextApi}>
      {props.children}
    </ApplicationContext.Provider>
  );
};