import "@/styles/globals.css";
import WeatherDataProvider from "Components/Context/WeatherDataProvider";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <WeatherDataProvider>
      <ThemeProvider defaultTheme="dark" themes={["dark", "light"]}>
        <Component {...pageProps} />
      </ThemeProvider>
    </WeatherDataProvider>
  );
}
