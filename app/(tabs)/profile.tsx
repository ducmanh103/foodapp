import React, { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons"; // Cần cài đặt @expo/vector-icons nếu bạn chưa có

export default function Profile() {
    const [dark, setDark] = useState(false);

    return (
        <View style={styles.container}>
            {/* Khung nền màu vàng nhạt có viền xanh phía trên */}
            <View style={styles.headerBackground} />

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* Thanh điều hướng Header */}
                <View style={styles.headerRow}>
                    <Feather name="arrow-left" size={24} color="#000" />
                    <Text style={styles.headerTitle}>Profile</Text>
                    <View style={{ width: 24 }} /> {/* View rỗng để cân bằng với icon back */}
                </View>

                {/* Khu vực Avatar với các vòng tròn đồng tâm */}
                <View style={styles.avatarSection}>
                    <View style={styles.outerRing}>
                        <View style={styles.innerRing}>
                            <Image
                                source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }} // Thay link ảnh của bạn vào đây
                                style={styles.avatarImage}
                            />
                            {/* Nút Edit */}
                            <View style={styles.editIconContainer}>
                                <Feather name="edit-2" size={12} color="#fff" />
                            </View>
                        </View>
                    </View>
                </View>

                {/* Thông tin người dùng */}
                <Text style={styles.name}>Rakibul Hasan</Text>
                <Text style={styles.email}>rakibhbrand@gmail.com</Text>

                {/* Danh sách Menu */}
                <View style={styles.menuContainer}>
                    <MenuItem icon="home" text="Home" />
                    <MenuItem icon="credit-card" text="My Card" />

                    {/* Item có Switch cho Dark Mood */}
                    <View style={styles.menuItem}>
                        <View style={styles.menuLeft}>
                            <Feather name="moon" size={20} color="#333" />
                            <Text style={styles.menuText}>Dark Mood</Text>
                        </View>
                        <Switch
                            value={dark}
                            onValueChange={setDark}
                            trackColor={{ false: "#d3d3d3", true: "#333" }}
                            thumbColor={"#fff"}
                        />
                    </View>

                    <MenuItem icon="map-pin" text="Truck Your Order" />
                    <MenuItem icon="settings" text="Settings" />
                    <MenuItem icon="help-circle" text="Help Center" />
                </View>

                {/* Nút Log Out */}
                <Pressable style={styles.logoutButton} onPress={() => alert("Logout")}>
                    <Text style={styles.logoutText}>Log Out</Text>
                    <Feather name="log-out" size={20} color="white" style={styles.logoutIcon} />
                </Pressable>

            </ScrollView>
        </View>
    );
}

// Component phụ cho các Menu Item để code gọn hơn
const MenuItem = ({ icon, text }) => (
    <Pressable style={styles.menuItem}>
        <View style={styles.menuLeft}>
            <Feather name={icon} size={20} color="#333" />
            <Text style={styles.menuText}>{text}</Text>
        </View>
        <Feather name="chevron-right" size={20} color="#999" />
    </Pressable>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFEF2", // Màu nền chủ đạo hơi ngả vàng nhạt giống ảnh
    },
    headerBackground: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 190,
        backgroundColor: "#FDFBE3", // Màu vàng sáng hơn cho header
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderWidth: 2,
        borderColor: "#2EB2FF", // Viền màu xanh dương
        borderTopWidth: 0, // Không có viền ở trên cùng
    },
    scrollContent: {
        paddingTop: 50, // Khoảng cách cho thanh trạng thái
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 30,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    avatarSection: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
    },
    outerRing: {
        width: 140,
        height: 140,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
    },
    innerRing: {
        width: 115,
        height: 115,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
        position: "relative", // Để đặt nút edit tuyệt đối so với vòng này
    },
    avatarImage: {
        width: 95,
        height: 95,
        borderRadius: 50,
    },
    editIconContainer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#4F46E5", // Màu xanh tím
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#fff",
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        color: "#1d1d1d",
        marginTop: 5,
    },
    email: {
        fontSize: 14,
        color: "#777",
        textAlign: "center",
        marginTop: 4,
        marginBottom: 30,
    },
    menuContainer: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 18,
    },
    menuLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    menuText: {
        fontSize: 16,
        color: "#333",
        marginLeft: 15,
        fontWeight: "500",
    },
    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5B4FFF",
        paddingVertical: 16,
        borderRadius: 16,
        marginTop: 40,
    },
    logoutText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    logoutIcon: {
        marginLeft: 8,
    }
});