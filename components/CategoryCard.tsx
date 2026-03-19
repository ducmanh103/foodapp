import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CategoryCardProps = {
    title: string;
    iconSource?: any;
    backgroundSource?: any;
    selected?: boolean;
    onPress?: () => void;
};

export default function CategoryCard({ title, iconSource, backgroundSource, selected, onPress }: CategoryCardProps) {
    const renderContent = () => (
        <>
            {iconSource ? <Image source={iconSource} style={[styles.icon, selected ? styles.iconSelected : styles.iconDefault]} /> : <Text style={[styles.defaultIcon, selected ? styles.iconSelected : {}]}>🍔</Text>}
            <Text style={[styles.title, selected ? styles.titleSelected : styles.titleDefault]}>{title}</Text>
        </>
    );

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            {selected && backgroundSource ? (
                <ImageBackground 
                    source={backgroundSource} 
                    style={[styles.card, styles.cardSelected]} 
                    imageStyle={styles.backgroundImage}
                >
                    {renderContent()}
                </ImageBackground>
            ) : (
                <View style={[styles.card, styles.cardDefault]}>
                    {renderContent()}
                </View>
            )}
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
        marginRight: 8,
    },
    backgroundImage: {
        borderRadius: 14,
    },
    cardDefault: {
        backgroundColor: "#f6f7fb",
        borderWidth: 1,
        borderColor: "#e5e8ee"
    },
    cardSelected: {
        backgroundColor: "#0cd187"
    },
    icon: {
        width: 34,
        height: 34,
        marginBottom: 4,
        resizeMode: "contain"
    },
    iconDefault: {
        // removed tintColor to keep original image colors
    },
    iconSelected: {
        // removed tintColor to keep original image colors
    },
    defaultIcon: {
        fontSize: 24,
        marginBottom: 4
    },
    title: {
        fontSize: 11,
        fontWeight: "700",
        zIndex: 1
    },
    titleDefault: {
        color: "#1d1f25"
    },
    titleSelected: {
        color: "#ffffff"
    }
});