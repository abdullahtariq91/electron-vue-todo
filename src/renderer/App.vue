<template>
  <div id="app">
    <div :class="{'nav-open': $sidebar.showSidebar}">
      <router-view></router-view>
      <!--This sidebar appears only for screens smaller than 992px-->
      <side-bar type="navbar" :sidebar-links="$sidebar.sidebarLinks">
        <ul class="nav navbar-nav">
          <li>
            <a class="dropdown-toggle" data-toggle="dropdown">
              <i class="ti-panel"></i>
              <p>Stats</p>
            </a>
          </li>
          <drop-down title="5 Notifications" icon="ti-bell">

            <li><a>Notification 1</a></li>
            <li><a>Notification 2</a></li>
            <li><a>Notification 3</a></li>
            <li><a>Notification 4</a></li>
            <li><a>Another notification</a></li>

          </drop-down>
          <li>
            <a>
              <i class="ti-settings"></i>
              <p>Settings</p>
            </a>
          </li>
          <li class="divider"></li>
        </ul>
      </side-bar>
    </div>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css';
  import './assets/sass/paper-dashboard.scss';
  import './assets/sass/styles.scss';

  export default {
    name: 'evtodo',
  };
</script>

<style>

</style>
