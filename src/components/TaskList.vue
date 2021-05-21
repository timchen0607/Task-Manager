<template>
  <header class="task-header">
    <input type="checkbox" name="" id="" />
    <h2 class="title">Title...Title...Title...</h2>
    <i class="far fa-star"></i>
    <i class="fas fa-feather-alt"></i>
  </header>
  <div class="task-body">
    <div class="inputGroup">
      <label for="" class="inputGroup-title">
        <i class="far fa-calendar-alt"></i>
        Deadline
      </label>
      <div class="inputGroup-content">
        <input type="date" name="" id="" />
        <input type="time" name="" id="" />
      </div>
    </div>
    <div class="inputGroup">
      <label for="" class="inputGroup-title">
        <i class="far fa-file-alt"></i>
        File
      </label>
      <div class="inputGroup-content">
        <input type="file" name="" id="" />
      </div>
    </div>
    <div class="inputGroup">
      <label for="" class="inputGroup-title">
        <i class="far fa-comment"></i>
        Comment
      </label>
      <div class="inputGroup-content">
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  </div>
  <footer class="task-footer">
    <button class="task-footer-cancel">
      <i class="fas fa-times"></i> Cancel
    </button>
    <button class="task-footer-save"><i class="fas fa-check"></i> Save</button>
  </footer>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TaskList",
});
</script>

<style lang="scss"></style>
