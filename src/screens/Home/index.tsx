import { useState } from "react";
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { colors } from "../../theme/colors";
import { styles } from "./styles";

export function Home() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.containerBanner}>
          <Image
            source={require("../../../assets/todo-logo.png")}
            style={styles.banner}
          />
        </View>

        <View style={styles.content}>
          <View style={styles.form}>
            <TextInput
              style={[styles.input, isFocused && styles.inputFocused]}
              placeholder="Adicione uma nova tarefa"
              placeholderTextColor={colors["gray-300"]}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.headerList}>
            <View style={styles.headerListItem}>
              <Text
                style={[styles.headerListItemTitle, { color: colors.blue }]}
              >
                Criadas
              </Text>

              <View style={styles.headerListItemCountContainer}>
                <Text style={styles.headerListItemCountItem}>0</Text>
              </View>
            </View>

            <View style={styles.headerListItem}>
              <Text
                style={[styles.headerListItemTitle, { color: colors.purple }]}
              >
                Concluídas
              </Text>

              <View style={styles.headerListItemCountContainer}>
                <Text style={styles.headerListItemCountItem}>0</Text>
              </View>
            </View>
          </View>

          <View style={styles.noneTask}>
            <Image
              source={require("../../../assets/clipboard.png")}
              style={styles.clipboard}
            />

            <Text style={styles.noneTaskText}>
              <Text style={styles.noneTaskTextBold}>
                Você ainda não tem tarefas cadastradas
              </Text>{" "}
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
