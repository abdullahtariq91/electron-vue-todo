<template>
    <div class="row">
      <div class="col-md-4 col-xs-12">
        <task-list :myProp="name1">

        </task-list>
      </div>
      <div class="col-md-4 col-xs-12">
        <task-list :myProp="name2">

        </task-list>
      </div>
      <div class="col-md-4 col-xs-12">
        <task-list :myProp="name3">

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
    data() {
      return {
        name1: 5,
        name2: 15,
        name3: 30,
      };
    },
  };
</script>

<style>

</style>
