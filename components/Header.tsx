import { Feather } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            {/* Ảnh Avatar */}
            <Image
                source={require("../assets/images/Group 33672.png")}
                style={styles.avatar}
            />

            {/* Vị trí (Location) */}
            <View style={styles.locationContainer}>
                <Text style={styles.smallSubtitle}>Your Location</Text>
                <View style={styles.cityRow}>
                    <Feather name="map-pin" size={16} color="#5B4FFF" style={styles.pinIcon} />
                    <Text style={styles.cityText}>Savar, Dhaka</Text>
                </View>
            </View>

            {/* Nút Chuông thông báo */}
            <View style={styles.notificationWrapper}>
                <View style={styles.notificationCircle}>
                    <Feather name="bell" size={20} color="#333" />
                    <View style={styles.notificationDot} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    locationContainer: {
        alignItems: "center",
    },
    smallSubtitle: {
        color: "#999",
        fontSize: 12,
        marginBottom: 2,
    },
    cityRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    pinIcon: {
        marginRight: 6,
    },
    cityText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#1d1d1d",
    },
    notificationWrapper: {
        justifyContent: "center",
        alignItems: "center",
    },
    notificationCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#FFFEF2",
        borderWidth: 1,
        borderColor: "#E5E5E5",
        justifyContent: "center",
        alignItems: "center",
    },
    notificationDot: {
        position: "absolute",
        top: 10,
        right: 12,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#5B4FFF",
        borderWidth: 1.5,
        borderColor: "#FFF",
    }
});