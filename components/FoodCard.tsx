import { Image, StyleSheet, View } from "react-native";

type FoodCardProps = {
    image: any;
};

export default function FoodCard({ image }: FoodCardProps) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({

    card: {
        width: 130,
        height: 120,
        marginRight: 12,
        borderRadius: 12,
        overflow: "hidden"
    },

    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    }
});