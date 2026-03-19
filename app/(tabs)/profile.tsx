import { useAuth } from "@/context/AuthContext";
import { Feather } from "@expo/vector-icons"; 
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
    const [dark, setDark] = useState(false);
    const { user, logout } = useAuth(); // get user from AuthContext

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <View style={styles.container}>
                
                {/* TOP YELLOW BLOCK */}
                <View style={styles.topBlock}>
                    <View style={styles.headerRow}>
                        <Feather name="arrow-left" size={24} color="#1d1d1d" />
                        <Text style={styles.headerTitle}>Profile</Text>
                        <View style={{ width: 24 }} />
                    </View>
                </View>

                {/* BOTTOM YELLOW BLOCK */}
                <View style={styles.bottomBlock}>
                    
                    {/* User Info */}
                    <View style={styles.userInfo}>
                        <Text style={styles.name}>{user?.email ? user.email.split('@')[0] : ""}</Text>
                        <Text style={styles.email}>{user?.email}</Text>
                    </View>

                    {/* Menu */}
                    <View style={styles.menuContainer}>
                        <MenuItem icon="home" text="Home" />
                        <MenuItem icon="credit-card" text="My Card" />

                        {/* Dark Mood Switch */}
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
                    <View style={styles.logoutWrapper}>
                        <Pressable style={styles.logoutButton} onPress={() => {
                            logout();
                        }}>
                            <Text style={styles.logoutText}>Log Out</Text>
                            <Feather name="log-out" size={20} color="white" style={styles.logoutIcon} />
                        </Pressable>
                    </View>

                </View>

                {/* KHU VỰC AVATAR (Nằm giữa rãnh trắng) */}
                <View style={styles.avatarSection}>
                    <View style={styles.outerRing}>
                        <View style={styles.innerRing}>
                            <Image
                                source={require("../../assets/images/Group 33672.png")}
                                style={styles.avatarImage}
                            />
                            {/* Nút Edit */}
                            <View style={styles.editIconContainer}>
                                <Feather name="edit-2" size={12} color="#fff" />
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
}

// Component phụ cho Menu Item
const MenuItem = ({ icon, text }: { icon: any, text: string }) => (
    <Pressable style={styles.menuItem}>
        <View style={styles.menuLeft}>
            <Feather name={icon} size={20} color="#333" />
            <Text style={styles.menuText}>{text}</Text>
        </View>
        <Feather name="chevron-right" size={20} color="#999" />
    </Pressable>
);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#FFFEF2",
    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF", // Màu rãnh trắng phân tách
    },
    topBlock: {
        height: 130,
        backgroundColor: "#FFFEF2", // Màu nền chủ đạo ngả vàng
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    bottomBlock: {
        flex: 1,
        backgroundColor: "#FFFEF2",
        marginTop: 50, // Tạo rãnh trắng
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 65,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1d1d1d",
    },
    avatarSection: {
        position: "absolute",
        top: 85, // Căn giữa avatar ở khoảng trắng 50px (Y=155)
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
    },
    outerRing: {
        width: 140,
        height: 140,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: "#E5E5E5",
        alignItems: "center",
        justifyContent: "center",
    },
    innerRing: {
        width: 115,
        height: 115,
        borderRadius: 57.5,
        borderWidth: 1,
        borderColor: "#E5E5E5",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    avatarImage: {
        width: 95,
        height: 95,
        borderRadius: 47.5,
    },
    editIconContainer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#5B4FFF", // Màu xanh tím theo design
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#fff",
    },
    userInfo: {
        alignItems: "center",
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#1d1d1d",
        marginTop: 5,
    },
    email: {
        fontSize: 14,
        color: "#777",
        textAlign: "center",
        marginTop: 4,
    },
    menuContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        marginTop: 5,
        marginBottom: 10,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 14,
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
    logoutWrapper: {
        marginTop: "auto",
        marginBottom: 10,
    },
    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5B4FFF",
        paddingVertical: 16,
        borderRadius: 16,
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