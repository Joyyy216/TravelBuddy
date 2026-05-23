import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { FavoritesContext } from "../context/FavoritesContext";

export default function DetailScreen({ route }) {
  const { destination } = route.params;

  const {
    addFavorite,
    removeFavorite,
    isFavorite,
  } = useContext(FavoritesContext);

  const favorite = isFavorite(
    destination.id
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: "#F8FAFC",
      }}
    >
      {/* HERO IMAGE */}
      <Image
        source={{ uri: destination.image }}
        style={{
          width: "100%",
          height: 320,
        }}
      />

      {/* CONTENT */}
      <View
        style={{
          marginTop: -25,
          backgroundColor: "#F8FAFC",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          padding: 20,
        }}
      >
        {/* TITLE */}
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#0F172A",
          }}
        >
          {destination.name}
        </Text>

        <Text
          style={{
            color: "#64748B",
            marginTop: 5,
            fontSize: 16,
          }}
        >
          📍 {destination.location}
        </Text>

        {/* RATING BADGE */}
        <View
          style={{
            backgroundColor: "#FEF3C7",
            alignSelf: "flex-start",
            paddingHorizontal: 14,
            paddingVertical: 8,
            borderRadius: 30,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              color: "#B45309",
              fontWeight: "bold",
            }}
          >
            ⭐ {destination.rating}
          </Text>
        </View>

        {/* PRICE */}
        <Text
          style={{
            color: "#2563EB",
            fontSize: 28,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          {destination.price}
        </Text>

        {/* DESCRIPTION */}
        <Text
          style={{
            color: "#475569",
            fontSize: 16,
            lineHeight: 28,
            marginTop: 20,
          }}
        >
          Experience the beauty of{" "}
          {destination.name}. Discover
          breathtaking landscapes,
          delicious local cuisine,
          vibrant culture, and unforgettable
          adventures waiting for you.
        </Text>

        {/* INFO CARD */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            padding: 20,
            marginTop: 25,

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.08,
            shadowRadius: 6,

            elevation: 4,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 15,
              color: "#0F172A",
            }}
          >
            Travel Information
          </Text>

          <Text
            style={{
              fontSize: 15,
              marginBottom: 8,
            }}
          >
            ✈️ Flights Available
          </Text>

          <Text
            style={{
              fontSize: 15,
              marginBottom: 8,
            }}
          >
            🏨 Luxury Hotels Nearby
          </Text>

          <Text
            style={{
              fontSize: 15,
              marginBottom: 8,
            }}
          >
            🍽️ Local Food Tours
          </Text>

          <Text
            style={{
              fontSize: 15,
            }}
          >
            📸 Best Photo Spots
          </Text>
        </View>

        {/* FAVORITE BUTTON */}
        <TouchableOpacity
          onPress={() => {
            favorite
              ? removeFavorite(
                  destination.id
                )
              : addFavorite(
                  destination
                );
          }}
          style={{
            backgroundColor: favorite
              ? "#EF4444"
              : "#2563EB",

            padding: 18,
            borderRadius: 15,
            marginTop: 25,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {favorite
              ? "💔 Remove From Favorites"
              : "❤️ Add To Favorites"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}