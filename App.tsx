import React from 'react';
// import { Welcome } from './src/pages/Welcome';
// import { UserIdentification } from './src/pages/UserIdentification';
import { Confirmation } from './src/pages/Confirmation';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';

export default function App(){

  const [ fonstLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });
  //enquanto as fontes nao forem carregadas, segura o app na tela de inicialização ate elas serem carregadas
  if(!fonstLoaded)
    return <AppLoading />

  return (
    // <Welcome />
    // <UserIdentification />
    <Confirmation/>
  );
}