import React from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons' //-> pra instalar rode: expo install @expo/vector-icons . Isso é uma biblioteca de incones do expo

import { useNavigation } from '@react-navigation/core';
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome(){

    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification');
    }

    return(

        <SafeAreaView style={style.conteiner}>
            <View style={style.wrapper}>
                <Text style={style.title}> 
                    Gerencie{'\n'}
                    suas plantas de{'\n'}
                    forma fácil 
                </ Text>

                <Image 
                    source={wateringImg} style={style.image} resizeMode="contain"
                />
                
                <Text style={style.subTitle}> 
                    Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity style={style.button} activeOpacity={0.6} onPress={handleStart}>
                    
                    <Feather name="chevron-right" style={style.buttonIcon}/>
                    
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({

    conteiner: {
        flex: 1,
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },

    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading, 
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },

    subTitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },

    // o Dimensions ele torna a imagens responsiva a tela que esta sendo exibida. height = altura: dimessinons.pega(janela).largura * 0.7
    image: {
        height: Dimensions.get('window').width * 0.7,
    },

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },

    buttonIcon: { 
        fontSize: 32,
        color: colors.white
    }

});