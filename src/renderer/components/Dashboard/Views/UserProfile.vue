<template>
    <div class="row">
      <div class="col-xs-4">
        <task-list>

        </task-list>
      </div>
      <div class="col-xs-4">
        <task-list>

        </task-list>
      </div>
      <div class="col-xs-4">
        <task-list>

        </task-list>
      </div>
    </div>
</template>

<script>
  import TaskList from './UserProfile/TaskList.vue';
  export default {
    components: {
      TaskList,
    },
  };
</script>

<style>

</style>
