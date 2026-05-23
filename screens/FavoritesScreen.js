import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { FavoritesContext } from "../context/FavoritesContext";

export default function FavoritesScreen() {
  const {
    favorites,
    removeFavorite,
  } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent:
            "center",
          alignItems: "center",
          backgroundColor:
            "#F8FAFC",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#64748B",
          }}
        >
          ❤️ No Favorites Yet
        </Text>

        <Text
          style={{
            color: "#94A3B8",
            marginTop: 10,
          }}
        >
          Add destinations you love
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={{
        backgroundColor: "#F8FAFC",
      }}
      data={favorites}
      keyExtractor={(item) =>
        item.id
      }
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor:
              "#FFFFFF",
            marginHorizontal: 15,
            marginTop: 15,
            padding: 15,
            borderRadius: 15,

            elevation: 3,
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
              color: "#2563EB",
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            {item.price}
          </Text>

          <TouchableOpacity
            onPress={() =>
              removeFavorite(item.id)
            }
            style={{
              backgroundColor:
                "#EF4444",
              padding: 12,
              borderRadius: 10,
              marginTop: 12,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Remove Favorite
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}