import * as Font from "expo-font";
import { DB } from "./db";
export async function bootstrap() {
  try {
    await Font.loadAsync({
      "sans-regular": require("../assets/fonts/OpenSans-Regular.ttf"),
      "sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    });
    dbConnect();
    console.log("Database start!");
  } catch (e) {
    console.log("Error " + e);
  }
}

export async function dbConnect() {
  return await DB.init();
}
