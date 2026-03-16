import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, TextInput } from "react-native";

export default function SearchBar() {

    return (

        <LinearGradient
            colors={["#5B4FFF", "#7B6CFF"]}

            style={styles.container}
        >

            {/* SEARCH ICON */}
            <Ionicons
                name="search"
                size={20}
                color="white"
            />

            <TextInput
                placeholder="Search your food"
                placeholderTextColor="#ddd"
                style={styles.input}
            />

            {/* FILTER ICON */}
            <Ionicons
                name="options"
                size={20}
                color="white"
            />

        </LinearGradient>

    );

}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderRadius: 30,
        marginTop: 20
    },

    input: {
        flex: 1,
        marginHorizontal: 10,
        color: "white"
    }

});