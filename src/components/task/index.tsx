import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { colors } from "../../theme/colors";

import { styles } from "./styles";

export interface TaskProps {
  id: string;
  text: string;
  checked: boolean;
  onCheck?: () => void;
  onRemove?: () => void;
}

export function Task({ onCheck, text, checked, onRemove }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkbox, checked && styles.checkboxChecked]}
        onPress={onCheck}
      >
        {checked && <MaterialIcons name="check" size={15} color="#fff" />}
      </TouchableOpacity>

      <Text style={[styles.text, checked && styles.textCompleated]}>
        {text}
      </Text>

      <TouchableOpacity onPress={onRemove} style={styles.trash}>
        <Ionicons name="trash-sharp" size={24} color={colors["gray-300"]} />
      </TouchableOpacity>
    </View>
  );
}
