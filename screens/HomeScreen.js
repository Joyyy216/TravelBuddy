import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

import destinations from "../data/destinations";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F8FAFC",
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={destinations}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <View
              style={{
                backgroundColor: "#2563EB",
                margin: 15,
                borderRadius: 25,
                padding: 25,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                Travel Buddy ✈️
              </Text>

              <Text
                style={{
                  color: "#DBEAFE",
                  marginTop: 10,
                  lineHeight: 22,
                  fontSize: 15,
                }}
              >
                Temukan destinasi wisata terbaik,
                nikmati pengalaman baru, dan
                wujudkan perjalanan impianmu.
              </Text>
            </View>

            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginHorizontal: 20,
                marginBottom: 15,
                color: "#0F172A",
              }}
            >
              Destinasi Populer
            </Text>
          </>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
              navigation.navigate("Detail", {
                destination: item,
              })
            }
            style={{
              backgroundColor: "#FFFFFF",
              marginHorizontal: 15,
              marginBottom: 20,
              borderRadius: 20,
              overflow: "hidden",

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.12,
              shadowRadius: 8,

              elevation: 6,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: "100%",
                height: 220,
              }}
            />

            <View style={{ padding: 15 }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  color: "#0F172A",
                }}
              >
                {item.name}
              </Text>

              <Text
                style={{
                  color: "#64748B",
                  marginTop: 5,
                }}
              >
                📍 {item.location}
              </Text>

              <Text
                style={{
                  color: "#F59E0B",
                  marginTop: 5,
                  fontWeight: "bold",
                }}
              >
                ⭐ {item.rating}
              </Text>

              <Text
                style={{
                  color: "#2563EB",
                  marginTop: 8,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                {item.price}
              </Text>

              <View
                style={{
                  backgroundColor: "#2563EB",
                  paddingVertical: 12,
                  borderRadius: 12,
                  marginTop: 15,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  Lihat Detail →
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}