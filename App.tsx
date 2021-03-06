import React, { useEffect } from 'react';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';
import { PlantProps } from './src/libs/storage';

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

export default function App(){

  const [ fonstLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      });

      return () => subscription.remove();
  }, [])

  //enquanto as fontes nao forem carregadas, segura o app na tela de inicialização ate elas serem carregadas
  if(!fonstLoaded)
    return <AppLoading />

  return (
    <Routes />
  );
}