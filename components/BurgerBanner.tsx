import { Image, StyleSheet, View } from "react-native";

export default function BurgerBanner() {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/Group 33660.png")}
                style={styles.bannerImage}
                resizeMode="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        overflow: "hidden", // Giúp bo góc ảnh bên trong nếu cần
    },
    bannerImage: {
        width: "100%",
        height: 180, // Bạn có thể tinh chỉnh chiều cao này cho phù hợp với thiết kế thực tế
    },
});