import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CategoryCardProps = {
    title: string;
    iconSource?: any;
    backgroundSource?: any;
    selected?: boolean;
    onPress?: () => void;
};

export default function CategoryCard({ title, iconSource, backgroundSource, selected, onPress }: CategoryCardProps) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <View style={[styles.card, selected ? styles.cardSelected : styles.cardDefault]}>
                {selected && backgroundSource ? <Image source={backgroundSource} style={styles.background} /> : null}
                {iconSource ? <Image source={iconSource} style={[styles.icon, selected ? styles.iconSelected : styles.iconDefault]} /> : <Text style={[styles.defaultIcon, selected && styles.iconSelected]}>🍔</Text>}
                <Text style={[styles.title, selected ? styles.titleSelected : styles.titleDefault]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 78,
        height: 92,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 14,
        overflow: "hidden",
        marginRight: 8,
    },
    cardDefault: {
        backgroundColor: "#f6f7fb",
        borderWidth: 1,
        borderColor: "#e5e8ee"
    },
    cardSelected: {
        backgroundColor: "#0cd187"
    },
    background: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    icon: {
        width: 34,
        height: 34,
        marginBottom: 4,
        resizeMode: "contain"
    },
    iconDefault: {
        tintColor: "#1d1f25"
    },
    iconSelected: {
        tintColor: "#ffffff"
    },
    defaultIcon: {
        fontSize: 24,
        marginBottom: 4
    },
    title: {
        fontSize: 11,
        fontWeight: "700"
    },
    titleDefault: {
        color: "#1d1f25"
    },
    titleSelected: {
        color: "#ffffff"
    }
});