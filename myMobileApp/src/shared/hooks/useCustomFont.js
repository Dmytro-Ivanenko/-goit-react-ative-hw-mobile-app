// import { useCallback, useEffect, useState } from 'react';
// import * as Font from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

// export const useCustomFonts = () => {
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         await Font.loadAsync({
//           'Roboto-Regular': require('../../../assets/fonts/Roboto-Regular.ttf'),
//           'Roboto-Medium': require('../../../assets/fonts/Roboto-Medium.ttf'),
//           'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
//         });
//       } catch (e) {
//         console.log(e);
//       } finally {
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   return { appIsReady, onLayoutRootView };
// };
