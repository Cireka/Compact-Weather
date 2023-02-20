import "@/styles/globals.css";
import WeatherDataProvider from "Components/Context/WeatherDataProvider";

export default function App({ Component, pageProps }) {
  return (
    <WeatherDataProvider>
      <Component {...pageProps} />
    </WeatherDataProvider>
  );
}
