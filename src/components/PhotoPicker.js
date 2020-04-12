import * as React from "react";
import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = React.useState(null);

  const getPermissionAsync = async () => {
    if (Constants.platform.android) {
      const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
      );
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return false;
      }
    }
    return true;
  };
  const takeFoto = async () => {
    const hasPermissions = await getPermissionAsync();
    if (!hasPermissions) {
      return;
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9],
    });

    setImage(img.uri);
    onPick(img.uri);
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        marginBottom: 10,
        justifyContent: "center",
      }}
    >
      <Button title="Сделать фото" onPress={takeFoto} />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: 200, marginTop: 10 }}
        />
      )}
    </View>
  );
};
