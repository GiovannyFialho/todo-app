import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { colors } from "../../theme/colors";

import { Task, type TaskProps } from "../../components/task";

import { styles } from "./styles";

export function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskName, setTaskName] = useState<string>("");

  function handleAddTask() {
    Keyboard.dismiss();

    setTasks((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        text: taskName,
        checked: false,
      },
    ]);
    setTaskName("");
  }

  function handleCompleteTask(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }

  function handleRemoveTask(id: string) {
    Alert.alert("Remover", `Você tem certeza que deveja remover esse item?  `, [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prev) => prev.filter((task) => task.id !== id));
        },
      },
      { text: "Não", style: "cancel" },
    ]);
  }

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
              value={taskName}
              onChangeText={setTaskName}
            />

            <TouchableOpacity style={styles.button} onPress={handleAddTask}>
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
                <Text style={styles.headerListItemCountItem}>
                  {tasks.length}
                </Text>
              </View>
            </View>

            <View style={styles.headerListItem}>
              <Text
                style={[styles.headerListItemTitle, { color: colors.purple }]}
              >
                Concluídas
              </Text>

              <View style={styles.headerListItemCountContainer}>
                <Text style={styles.headerListItemCountItem}>
                  {tasks.filter((task) => task.checked === true).length}
                </Text>
              </View>
            </View>
          </View>

          <FlatList
            keyExtractor={(item) => item.id}
            data={tasks}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
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
            )}
            renderItem={({ item }) => (
              <View style={styles.tasksContainer}>
                <Task
                  id={item.id}
                  text={item.text}
                  checked={item.checked}
                  onCheck={() => handleCompleteTask(item.id)}
                  onRemove={() => handleRemoveTask(item.id)}
                />
              </View>
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
