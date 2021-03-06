<template>
  <div class="container">
    <TaskNew :createTask="createTask"></TaskNew>
    <draggable
      :list="tasks"
      item-key="id"
      handle=".task-header-grab"
      ghost-class="task-ghost"
    >
      <template #item="{ element }">
        <TaskItem
          v-show="filter(element.completed)"
          :task="element"
          :updateState="updateState"
          :updateTask="updateTask"
          :delTask="delTask"
        ></TaskItem>
      </template>
    </draggable>
    <footer class="overview">
      <h3
        class="overview-text"
        v-text="tasks.filter((x) => !x.completed).length + ' Tasks Left'"
      ></h3>
    </footer>
  </div>
</template>

<script>
import { defineComponent, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import draggable from "vuedraggable";
import TaskNew from "@/components/TaskNew.vue";
import TaskItem from "@/components/TaskItem.vue";
import LS from "@/modules/localStorage";

export default defineComponent({
  name: "MyTasks",
  components: { draggable, TaskNew, TaskItem },
  setup() {
    const filter = (completed) => {
      let flagA = route.name === "MyTasks";
      let flagB = route.name === "InProgress" && completed === false;
      let flagC = route.name === "Completed" && completed === true;
      return flagA || flagB || flagC;
    };
    const route = useRoute();
    const tasks = reactive(LS.getData("Tasks"));
    const Idx = (value) => tasks.map((x) => x.id).indexOf(value);
    const Sort = () => tasks.sort((a, b) => b.pinning - a.pinning);

    const createTask = (task) => {
      task.id = Math.max(...tasks.map((x) => x.id)) + 1;
      tasks.unshift(task);
    };
    const updateState = (id, target) =>
      (tasks[Idx(id)][target] = !tasks[Idx(id)][target]);
    const updateTask = (id, task) => {
      let ts = tasks[Idx(id)];
      [ts.date, ts.time, ts.comment] = [task.date, task.time, task.comment];
    };
    const delTask = (id) => tasks.splice(Idx(id), 1);

    watch(
      tasks,
      () => {
        Sort();
        LS.setData("Tasks", tasks);
      },
      { deep: true }
    );
    return {
      filter,
      tasks,
      createTask,
      updateState,
      updateTask,
      delTask,
    };
  },
});
</script>
