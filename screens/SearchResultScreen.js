import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import destinations from "../data/destinations";

export default function SearchResultScreen({
  route,
  navigation,
}) {
  const { query } = route.params;

  const results = destinations.filter(
    (item) =>
      item.name
        .toLowerCase()
        .includes(query.toLowerCase())
  );

  if (results.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F8FAFC",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#64748B",
          }}
        >
          😢 Destinasi tidak ditemukan
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={{
        flex: 1,
        backgroundColor: "#F8FAFC",
      }}
      showsVerticalScrollIndicator={false}
      data={results}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() =>
            navigation.navigate(
              "Detail",
              {
                destination: item,
              }
            )
          }
          style={{
            backgroundColor: "#FFFFFF",
            marginHorizontal: 15,
            marginTop: 15,
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

          <View
            style={{
              padding: 15,
            }}
          >
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
  );
}