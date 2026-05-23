import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SearchScreen({
  navigation,
}) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      navigation.navigate(
        "SearchResults",
        { query }
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F8FAFC",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
          color: "#0F172A",
        }}
      >
        Search Destination
      </Text>

      <TextInput
        placeholder="Where do you want to go?"
        value={query}
        onChangeText={setQuery}
        style={{
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 12,
          fontSize: 16,
        }}
      />

      <TouchableOpacity
        onPress={handleSearch}
        style={{
          backgroundColor: "#2563EB",
          padding: 15,
          borderRadius: 12,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
}