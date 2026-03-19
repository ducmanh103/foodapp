import { useState } from "react";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BurgerBanner from "../../components/BurgerBanner";
import CategoryCard from "../../components/CategoryCard";
import FoodCard from "../../components/FoodCard";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { products } from "../../data/data";

export default function HomeScreen() {
  const [cart, setCart] = useState<any[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (food: any) => {
    setCart([...cart, { ...food, qty: 1 }]);
  };

  const categories = [
    { id: 1, title: "PIZZA", iconSource: require("../../assets/images/Group 33652.png") },
    { id: 2, title: "BURGER", iconSource: require("../../assets/images/Group 33654.png") },
    { id: 3, title: "DRINK", iconSource: require("../../assets/images/Group 33653.png") },
    { id: 4, title: "RICE", iconSource: require("../../assets/images/Group 33655.png") },
  ];

  return (
    // Bọc SafeAreaView ngoài cùng để xử lý tai thỏ
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Nền vàng nhạt mở rộng xuống giữa SearchBar */}
        <View style={styles.topBackground} />

        <View style={{ zIndex: 10 }}>
          <Header />

          <View style={styles.searchSection}>
            <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={styles.categoryContent}
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              iconSource={category.iconSource}
              backgroundSource={selectedCategoryId === category.id ? require("../../assets/images/Rectangle 22.png") : undefined}
              selected={selectedCategoryId === category.id}
              onPress={() => setSelectedCategoryId(category.id)}
            />
          ))}
        </ScrollView>

        <View style={styles.bannerSection}>
          <BurgerBanner />
        </View>

        <View style={styles.bannerDotsContainer}>
          {[1, 2, 3].map((dot) => (
            <View
              key={dot}
              style={dot === 3 ? styles.bannerDotActive : styles.bannerDot}
            />
          ))}
        </View>

        <View style={styles.popularHeader}>
          <Text style={styles.popularTitle}>Popular Items</Text>
          <Text style={styles.viewAllText}>View All</Text>
        </View>

        <View style={styles.productListContainer}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <View key={product.id} style={styles.productListItem}>
                <FoodCard image={product.image} />
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productDesc}>{product.description}</Text>
                  <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={{ textAlign: "center", marginTop: 20, color: "#666" }}>
              Không tìm thấy sản phẩm nào.
            </Text>
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Thêm style cho SafeAreaView để xử lý StatusBar trên Android
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    backgroundColor: "#fff" // Changed to match the gap/white rest of screen or #FFFEF2 depending on preference. Wait, rest is #fff
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  topBackground: {
    position: "absolute",
    top: -20,
    left: -20,
    right: -20,
    height: 200, // Tăng thêm 30 độ dài (xuống sâu hơn SearchBar)
    backgroundColor: "#FDFBE3", // Màu nền vàng ngà giống ảnh để phân biệt góc bo
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    zIndex: 0, // Thay đổi zIndex và đặt đè Header/Search zIndex lớn hơn
  },
  searchSection: {
    marginTop: 24,
  },
  categoryScroll: {
    marginTop: 24,
  },
  categoryContent: {
    alignItems: "center",
    gap: 15,
    paddingRight: 20,
  },
  bannerSection: {
    marginTop: 24,
  },
  bannerDotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  bannerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 5
  },
  bannerDotActive: {
    width: 20,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#3E5CFF",
    marginHorizontal: 5
  },
  popularHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 16,
  },
  popularTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1d1d1d"
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3E5CFF",
  },
  popularImageWrapper: {
    width: "100%",
    borderRadius: 16,
    overflow: "hidden",
  },
  popularImageFull: {
    width: "100%",
    height: 180,
    resizeMode: "cover"
  },
  productListContainer: {
    gap: 16,
  },
  productListItem: {
    flexDirection: "row",
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  productInfo: {
    flex: 1,
    paddingLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  productDesc: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3E5CFF",
  }
});