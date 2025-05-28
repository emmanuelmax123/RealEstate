import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-2xl color-slate-500">
        Welcome to Brain Rot
      </Text>

      <Text className="font-bold text-lg color-green-600">Welcome</Text>

      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link
        href={{
          pathname: "/properties/[id]",
          params: { id: "1" },
        }}
      >
        Property
      </Link>
    </View>
  );
}
