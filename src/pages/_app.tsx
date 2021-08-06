import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../lib/themeConfig"
import { useEffect } from "react";
import "balloon-css";
import vwoSdk from "vwo-node-sdk";
import { userStorageService, uuidv4 } from "../lib/vwo";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");
  const [isMounted, setIsMounted] = useState(false)
  const [userId, setUserId ] = useState('');

  useEffect(() => {
    vwoSdk.getSettingsFile('60781', 'ea87170ad94079aa190bc7c9b85d26fb', userStorageService).then(settingsFile => {
      var vwoClientInstance = vwoSdk.launch({
        settingsFile,
        userStorageService
      })

      const storedUserId = localStorage.getItem('vwo-userid');
      const userSearchParam = location.search.split('&').find(item => item.indexOf('userId') > -1);
      let finalUserId = userId;

      if (userSearchParam) {
        finalUserId = userSearchParam.split('=')[1];
        setUserId(finalUserId);
      } else if (storedUserId) {
        finalUserId = storedUserId || finalUserId;
      } else {
        finalUserId = uuidv4();
        localStorage.setItem('vwo-userid', finalUserId);
      }

      const variationName = vwoClientInstance.activate('DEV_TEST_2', finalUserId);

      pageProps.userId = finalUserId;
      pageProps.variationName = variationName;

      if (variationName === 'Control') {
        setTheme('light');
      } else if (variationName === 'Variation-1') {
        setTheme('dark');
      } else {
        setTheme('light');
      }

      setIsMounted(true)

    });
  }, [])

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  );
}
