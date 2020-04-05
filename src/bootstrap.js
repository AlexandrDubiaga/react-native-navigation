import * as Font from "expo-font";
export async function bootstrap() {
   return await Font.loadAsync({
      "sans-regular": require("../assets/fonts/OpenSans-Regular.ttf"),
      "sans-bold": require("../assets/fonts/OpenSans-Bold.ttf")
    });
  }