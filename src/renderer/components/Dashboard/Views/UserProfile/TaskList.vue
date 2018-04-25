<template>
  <div class="card card-user">
    <div class="image">
      <img src="static/img/background.jpg" alt="...">
    </div>
    <div class="content">
      <div class="author">
        <!-- <img class="avatar border-white" src="static/img/faces/face-2.jpg" alt="..."> -->
        <div class="avatar border-white margin-center background-white">
          <h1>Hey</h1>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-8">
          <fg-input type="text"
            placeholder="5 minute task">
          </fg-input>
        </div>
        <div class="col-xs-2 text-right">
          <button class="btn btn-sm btn-sm-height btn-success btn-icon">
            <i class="fa fa-plus"></i>
          </button>
        </div>
        <div class="col-xs-2 text-right">
          <button class="btn btn-sm btn-sm-height btn-info btn-icon">
            <i class="fa fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <fg-input-small type="text" placeholder="Note"></fg-input-small>
        </div>
      </div>
      <ul class="list-unstyled team-members">
        <li>
          <div class="row" v-for="member in members">
            <hr>
            <div class="col-xs-8 text-bolded">
              {{member.name}}
              <br>
              <span class="text-muted">
                <small>{{member.status}}</small>
              </span>
            </div>
            <div class="col-xs-2 text-right">
              <button class="btn btn-sm btn-sm-height btn-success btn-icon">
                <i class="fa fa-check"></i>
              </button>
            </div>
            <div class="col-xs-2 text-right">
              <button class="btn btn-sm btn-sm-height btn-warning btn-icon">
                <i class="fa fa-minus"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <hr>

    <div class="text-center">
      <div class="row">
        <div v-for="(info,index) in details" :class="getClasses(index)">
          <h5>{{info.title}}
            <br>
            <small>{{info.subTitle}}</small>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: [
      'myProp',
    ],
    data() {
      return {
        details: [
          {
            title: '12',
            subTitle: 'Files',
          },
          {
            title: '2GB',
            subTitle: 'Used',
          },
          {
            title: '24,6$',
            subTitle: 'Spent',
          },
        ],
        members: [
          {
            image: 'static/img/faces/face-0.jpg',
            name: 'Dj Khaled',
            status: 'Offline',
          },
          {
            image: 'static/img/faces/face-1.jpg',
            name: 'Creative Tim',
            status: 'Available',
          },
          {
            image: 'static/img/faces/face-1.jpg',
          },
        ],
      };
    },
    methods: {
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
    },
  };
</script>

<style>

</style>
