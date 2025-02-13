import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { colors } from "../../theme/colors";

import { styles } from "./styles";

interface TaskProps {
  status?: boolean;
  text: string;
}

export function Task({ status = false, text }: TaskProps) {
  const [checked, setChecked] = useState(status);

  const handleToggleCheck = () => setChecked(!checked);
  const handleDelete = () => alert("Tarefa excluída!");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkbox, checked && styles.checkboxChecked]}
        onPress={handleToggleCheck}
      >
        {checked && <MaterialIcons name="check" size={15} color="#fff" />}
      </TouchableOpacity>

      <Text style={[styles.text, checked && styles.textCompleated]}>
        {text}
      </Text>

      <TouchableOpacity onPress={handleDelete} style={styles.trash}>
        <Ionicons name="trash-sharp" size={24} color={colors["gray-300"]} />
      </TouchableOpacity>
    </View>
  );
}
