import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {

    return (

        <View style={styles.container}>

            {/* TODO DESIGN avatar */}
            <Image
                source={{ uri: "https://i.pravatar.cc/100" }}
                style={styles.avatar}
            />

            <View>

                <Text style={styles.small}>
                    Your Location
                </Text>

                <Text style={styles.city}>
                    Savar, Dhaka
                </Text>

            </View>

            {/* TODO DESIGN notification icon */}
            <Text>🔔</Text>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20
    },

    small: {
        color: "gray"
    },

    city: {
        fontWeight: "bold"
    }

});