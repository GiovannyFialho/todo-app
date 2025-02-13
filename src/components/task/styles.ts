import { StyleSheet } from "react-native";

import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: colors["gray-500"],
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors["gray-500"],
  },
  checkboxChecked: {
    backgroundColor: colors["purple-dark"],
    borderColor: colors["purple-dark"],
  },
  text: {
    flex: 1,
    fontSize: 14,
    fontWeight: "400",
    color: colors["gray-100"],
  },
  textCompleated: {
    textDecorationLine: "line-through",
    color: colors["gray-300"],
  },
  trash: {
    width: 24,
    height: 24,
  },
});
