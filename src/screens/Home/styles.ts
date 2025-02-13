import { StyleSheet } from "react-native";

import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["gray-700"],
  },
  containerBanner: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    marginBottom: 70,
  },
  banner: {
    width: 110,
    height: 32,
  },
  content: {
    flex: 1,
    backgroundColor: colors["gray-600"],
    paddingHorizontal: 24,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    gap: 5,
    marginTop: -30,
    marginBottom: 32,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: colors["gray-500"],
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "transparent",
  },
  inputFocused: {
    borderColor: colors.purple,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: colors["blue-dark"],
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  headerList: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  headerListItem: {
    flexDirection: "row",
    gap: 8,
  },
  headerListItemTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  headerListItemCountContainer: {
    width: "auto",
    height: "auto",
    backgroundColor: colors["gray-400"],
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  headerListItemCountItem: {
    fontSize: 12,
    fontWeight: "700",
    color: colors["gray-200"],
  },
  noneTask: {
    alignItems: "center",
    gap: 16,
    marginTop: 20,
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  clipboard: {
    width: 56,
    height: 56,
  },
  noneTaskText: {
    fontSize: 14,
    color: colors["gray-300"],
  },
  noneTaskTextBold: {
    fontWeight: "700",
  },
  tasksContainer: {
    marginTop: 20,
  },
});
