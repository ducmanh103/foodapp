import { Image, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function ExploreScreen() {
  return (
    // Bọc SafeAreaView ngoài cùng để xử lý tai thỏ và thanh trạng thái
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.headerTitle}>Shopping Cart</Text>
          <Text style={styles.trashIcon}>🗑️</Text>
        </View>

        {/* Bao bọc toàn bộ khối Nền, Card và Bánh để dễ quản lý tọa độ */}
        <View style={styles.mainWrapper}>

          {/* LỚP 1 (Dưới cùng): Ảnh nền Rectangle 35 */}
          <Image
            source={require("../../assets/images/Rectangle 35.png")}
            style={styles.heroBackground}
          />

          {/* LỚP 2 (Giữa): Thẻ Card - đẩy lên trên 20px để đè vào ảnh nền */}
          <View style={styles.card}>
            <Text style={styles.productTitle}>BURGER</Text>
            <Text style={styles.productPrice}>$28</Text>

            <View style={styles.rowSpaceBetween}>
              <Text style={styles.rating}>⭐ 4.9 (3k+ Rating)</Text>
              <View style={styles.qtyBox}>
                <Text style={styles.qtyAction}>−</Text>
                <Text style={styles.qtyValue}>2</Text>
                <Text style={styles.qtyAction}>+</Text>
              </View>
            </View>

            <View style={styles.addressRow}>
              <View style={styles.addressLeft}>
                <Text style={styles.addressTitle}>Delivery Address</Text>
                <Text style={styles.addressText}>Dhaka, Bangladesh</Text>
              </View>
              <View style={styles.addressAction}>
                <Text>✎</Text>
              </View>
            </View>

            <View style={styles.paymentRow}>
              <Text style={styles.paymentLabel}>Payment Method</Text>
              <Pressable style={styles.pillButton}>
                <Text style={styles.pillText}>Change</Text>
              </Pressable>
            </View>

            <View style={styles.summarySection}>
              <Text style={styles.summaryTitle}>Checkout Summary</Text>
              <View style={styles.summaryLine}>
                <Text style={styles.summaryText}>Subtotal (2)</Text>
                <Text style={styles.summaryText}>$56</Text>
              </View>
              <View style={styles.summaryLine}>
                <Text style={styles.summaryText}>Delivery Fee</Text>
                <Text style={styles.summaryText}>$6.20</Text>
              </View>
              <View style={styles.summaryLineBold}>
                <Text style={styles.summaryBold}>Payable Total</Text>
                <Text style={styles.summaryBold}>$62.20</Text>
              </View>
            </View>

            <Pressable style={styles.confirmButton}>
              <Text style={styles.confirmText}>Confirm Order</Text>
            </Pressable>
          </View>

          {/* LỚP 3 (Trên cùng): Ảnh bánh Group 33670 - đẩy xuống 30px */}
          <View style={styles.burgerWrapper}>
            <Image
              source={require("../../assets/images/Group 33670.png")}
              style={styles.heroOverlay}
              resizeMode="contain"
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Thêm style cho SafeAreaView
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  screen: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15
  },
  backArrow: {
    fontSize: 22
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  trashIcon: {
    fontSize: 22
  },

  // Container bọc toàn bộ khối hiển thị
  mainWrapper: {
    position: 'relative',
    marginBottom: 18,
  },

  // 1. Ảnh nền (Layer dưới cùng)
  heroBackground: {
    width: "100%",
    height: 220,
    borderRadius: 20,
  },

  // 2. Thẻ Card (Layer giữa)
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginTop: -20, // Kéo Card lên trên 20px để đè lên nền
    zIndex: 2,      // Đảm bảo Card nằm trên ảnh nền
    // Đổ bóng
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5
  },

  // 3. Ảnh bánh (Layer trên cùng)
  burgerWrapper: {
    position: "absolute",
    // Toán học cho vị trí top: 
    // Cao nền (220) - Cao bánh (120) = 100 (vị trí sát đáy nền cũ)
    // Cần đẩy xuống 30px -> 100 + 30 = 130px.
    top: 130,
    left: 0,
    right: 0,
    alignItems: "center", // Căn giữa bánh
    zIndex: 10,           // Đảm bảo bánh đè lên cả Card và Nền
    elevation: 10,        // Hỗ trợ hiển thị trên cùng cho Android
  },
  heroOverlay: {
    width: 280,
    height: 120,
  },

  // --- Các style bên trong Card giữ nguyên ---
  productTitle: {
    fontSize: 30,
    fontWeight: "bold"
  },
  productPrice: {
    color: "#3e5cff",
    fontSize: 24,
    fontWeight: "bold",
    position: "absolute",
    right: 16,
    top: 16
  },
  rowSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8
  },
  rating: {
    color: "#333",
    fontSize: 14
  },
  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f3ff",
    borderRadius: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#d1d5ff"
  },
  qtyAction: {
    fontSize: 18,
    color: "#3e5cff",
    paddingHorizontal: 8
  },
  qtyValue: {
    marginHorizontal: 4,
    fontSize: 16,
    fontWeight: "bold"
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dff6f0",
    borderRadius: 14,
    padding: 12,
    marginTop: 14
  },
  addressLeft: {
    flex: 1
  },
  addressTitle: {
    color: "#067b5a",
    fontWeight: "bold"
  },
  addressText: {
    color: "#1d1d1d"
  },
  addressAction: {
    backgroundColor: "#7b95ff",
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  paymentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 14,
    paddingVertical: 8
  },
  paymentLabel: {
    fontSize: 16,
    fontWeight: "bold"
  },
  pillButton: {
    borderColor: "#3e5cff",
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 14
  },
  pillText: {
    color: "#3e5cff",
    fontWeight: "bold"
  },
  summarySection: {
    marginTop: 10
  },
  summaryTitle: {
    fontWeight: "bold",
    marginBottom: 8
  },
  summaryLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2
  },
  summaryText: {
    color: "#555"
  },
  summaryLineBold: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8
  },
  summaryBold: {
    color: "#1d1d1d",
    fontWeight: "bold"
  },
  confirmButton: {
    marginTop: 16,
    backgroundColor: "#3e5cff",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center"
  },
  confirmText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  }
});