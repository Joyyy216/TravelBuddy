import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import SearchScreen from "./screens/SearchScreen";
import SearchResultScreen from "./screens/SearchResultScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

import {
  FavoritesProvider,
  FavoritesContext,
} from "./context/FavoritesContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const PRIMARY_COLOR = "#2563EB";

// ====================
// HOME STACK
// ====================

function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: PRIMARY_COLOR,
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Travel Buddy",
        }}
      />

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "Destination Detail",
        }}
      />
    </Stack.Navigator>
  );
}

// ====================
// SEARCH STACK
// ====================

function SearchStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: PRIMARY_COLOR,
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Search"
        component={SearchScreen}
      />

      <Stack.Screen
        name="SearchResults"
        component={SearchResultScreen}
        options={{
          title: "Search Results",
        }}
      />
    </Stack.Navigator>
  );
}

// ====================
// TAB NAVIGATOR
// ====================

function TabNavigator() {
  const { favorites } =
    useContext(FavoritesContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor:
          PRIMARY_COLOR,

        tabBarInactiveTintColor:
          "#94A3B8",

        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 70,
          paddingBottom: 10,
          paddingTop: 5,
          borderTopWidth: 0,
          elevation: 10,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },

        tabBarIcon: ({
          color,
          size,
        }) => {
          let iconName;

          if (
            route.name === "HomeTab"
          ) {
            iconName = "home";
          } else if (
            route.name ===
            "SearchTab"
          ) {
            iconName = "search";
          } else {
            iconName = "heart";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          title: "Home",
        }}
      />

      <Tab.Screen
        name="SearchTab"
        component={
          SearchStackNavigator
        }
        options={{
          title: "Search",
        }}
      />

      <Tab.Screen
        name="FavoritesTab"
        component={FavoritesScreen}
        options={{
          title: "Favorites",

          tabBarBadge:
            favorites.length > 0
              ? favorites.length
              : null,
        }}
      />
    </Tab.Navigator>
  );
}

// ====================
// MAIN APP
// ====================

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </FavoritesProvider>
  );
}