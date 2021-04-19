import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {Button} from '../components/Button';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome(){

    const [visible, setVisible] = useState(false);

    function handleVisibility(){
        setVisible(true)
    }

    function handleInvisibility(){
        setVisible(false)
    }

    return(

        <SafeAreaView style={style.conteiner}>
            <Text style={style.title}> 
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil 
            </ Text>

            {
                visible &&
                <Image source={wateringImg} style={style.image}/>
            }

            <Text style={style.subTitle}> 
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title="Mostrar Imagem" onPress={handleVisibility}/>
            <Button title="Ocultar Imagem" onPress={handleInvisibility}/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({

    conteiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading, 
        marginTop: 38
    },

    subTitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },

    image: {
        width: 292,
        height: 284,
    },

});