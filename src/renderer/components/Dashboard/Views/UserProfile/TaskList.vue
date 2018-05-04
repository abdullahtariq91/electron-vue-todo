<template>
  <div class="card card-user">
    <div class="image">
      <img src="static/img/background.jpg" alt="...">
    </div>
    <div class="content content-min-height">
      <div class="author">
        <!-- <img class="avatar border-white" src="static/img/faces/face-2.jpg" alt="..."> -->
        <vue-circle ref="myUniqueID" class="background-white radius-circle"
          :size="100"
          :progress="0"
          :reverse="false"
          line-cap="round"
          :fill="fill"
          empty-fill="rgba(255,255,255, 0.9)"
          :animation-start-value="0.0"
          :start-angle="0"
          insert-mode="append"
          :thickness="10"
          :show-percent="true">
        </vue-circle>
        <!-- No need for this now if using vue-circle -->
        <!-- <div class="avatar border-white margin-center background-white">
          <h1>{{myProp}}</h1>
        </div> -->
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-10">
          <fg-input type="text"
            :placeholder="myProp + ' minute task'"
            v-model="task.name"
            v-on:keyup.enter="addTask">
          </fg-input>
        </div>
        <div class="col-xs-2 text-right">
          <button v-on:click="addTask" class="btn btn-sm btn-sm-height btn-success btn-icon">
            <i class="fa fa-plus"></i>
          </button>
        </div>
        <!-- Prolly add menu later? -->
        <!-- <div class="col-xs-2 text-right">
          <button v-on:click="updateProgress" class="btn btn-sm btn-sm-height btn-info btn-icon">
            <i class="fa fa-ellipsis-h"></i>
          </button>
        </div> -->
      </div>
      <div class="row">
        <div class="col-xs-12">
          <fg-input-small type="text"
            placeholder="Note"
            v-model="task.note">
          </fg-input-small>
        </div>
      </div>
      <ul class="list-unstyled team-members task-min-height" v-if="showCompleted">
        <li>
          <div class="row" v-for="(task, index) in tasks">
            <hr>
            <div class="col-xs-8 text-bolded">
              {{task.name}}
              <br>
              <span class="text-muted">
                <small>{{task.note}}</small>
              </span>
            </div>
            <div class="col-xs-2 text-right">
              <button v-on:click="completeTask(index)" class="btn btn-sm btn-sm-height btn-success btn-icon">
                <i class="fa fa-check"></i>
              </button>
            </div>
            <div class="col-xs-2 text-right">
              <button v-on:click="removeTask(index)" class="btn btn-sm btn-sm-height btn-danger btn-icon">
                <i class="fa fa-minus"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
      <ul class="list-unstyled team-members task-min-height" v-else>
        <li>
          <div class="row" v-for="(task, index) in completedTasks">
            <hr>
            <div class="col-xs-8 text-bolded">
              {{task.name}}
              <br>
              <span class="text-muted">
                <small>{{task.note}}</small>
              </span>
            </div>
            <div class="col-xs-2 text-right">
              <button v-on:click="undoCompletedTask(index)" class="btn btn-sm btn-sm-height btn-warning btn-icon">
                <i class="fa fa-undo"></i>
              </button>
            </div>
            <div class="col-xs-2 text-right">
              <button v-on:click="removeCompletedTask(index)" class="btn btn-sm btn-sm-height btn-danger btn-icon">
                <i class="fa fa-minus"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="text-center">
      <hr>
      <div class="row" v-on:click="showCompleted = !showCompleted">
        <div class="col-md-5 col-md-offset-1" >
          <h5 v-if="!showCompleted">
            {{info.completed.count}}
            <br>
            <small>
              {{info.completed.name}}
            </small>
          </h5>
          <h5 v-else>
            {{info.pending.count}}
            <br>
            <small>
              {{info.pending.name}}
            </small>
          </h5>
        </div>
        <div class="col-md-5">
          <h5 v-if="!showCompleted">
            {{info.timeSpent.count}}
            <br>
            <small>
              {{info.timeSpent.name}}
            </small>
          </h5>
          <h5 v-else>
            {{info.timeRemaining.count}}
            <br>
            <small>
              {{info.timeRemaining.name}}
            </small>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import VueCircle from 'vue2-circle-progress';
  export default {
    components: {
      VueCircle,
    },
    props: [
      'myProp',
    ],
    data() {
      return {
        fill: { gradient: ['#41b883'] },
        info: {
          progressPercent: 0,
          pending: {
            count: 0,
            name: 'Tasks Pending',
          },
          completed: {
            count: 0,
            name: 'Tasks Completed',
          },
          timeSpent: {
            count: 0,
            name: 'Minutes Spent',
          },
          timeRemaining: {
            count: 0,
            name: 'Minutes Remaining',
          },
        },
        showCompleted: true,
        task: {
          name: '',
          note: '',
        },
        tasks: [],
        completedTasks: [],
      };
    },
    methods: {
      // Event functions for vue-circle
      // progress(event, progress, stepValue) {
      //   console.log(stepValue);
      // },
      // progress_end() {
      //   console.log('Circle progress end');
      // },
      getClasses(index) {
        const remainder = index % 3;
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1';
        } else if (remainder === 2) {
          return 'col-md-4';
        }
        return 'col-md-3';
      },
      getStatusClass(status) {
        switch (status) {
          case 'Offline':
            return 'text-muted';
          case 'Available':
            return 'text-success';
          case 'Busy':
            return 'text-danger';
          default:
            return 'text-success';
        }
      },
      updateProgress() {
        let percentage = 0;
        const completed = this.info.completed.count;
        const pending = this.info.pending.count;
        if (pending === 0 && completed === 0) {
          percentage = 0;
        } else {
          percentage = (completed / (pending + completed)) * 100;
        }
        this.$refs.myUniqueID.updateProgress(percentage);
      },
      addTask() {
        if (this.task.name !== '') {
          this.tasks.push({ name: this.task.name, note: this.task.note });
        }
        this.task.name = '';
        this.task.note = '';
        this.info.pending.count += 1;
        this.info.timeRemaining.count += this.myProp;
        this.updateProgress();
        // add toastr
        // add api call
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
        this.info.timeRemaining.count -= this.myProp;
        this.info.pending.count -= 1;
        this.updateProgress();
        // add toastr
        // add api call
      },
      completeTask(index) {
        this.completedTasks.push(this.tasks[index]);
        this.tasks.splice(index, 1);
        this.info.timeRemaining.count -= this.myProp;
        this.info.timeSpent.count += this.myProp;
        this.info.pending.count -= 1;
        this.info.completed.count += 1;
        this.updateProgress();
        // add toastr
        // add api call
      },
      removeCompletedTask(index) {
        this.completedTasks.splice(index, 1);
        this.info.timeSpent.count -= this.myProp;
        this.info.spent.count -= 1;
        this.info.completed.count -= 1;
        this.updateProgress();
      },
      undoCompletedTask(index) {
        this.tasks.push(this.completedTasks[index]);
        this.completedTasks.splice(index, 1);
        this.info.timeRemaining.count += this.myProp;
        this.info.timeSpent.count -= this.myProp;
        this.info.pending.count += 1;
        this.info.completed.count -= 1;
        this.updateProgress();
        // add toastr
        // add api call
      },
    },
  };
</script>

<style>

</style>
