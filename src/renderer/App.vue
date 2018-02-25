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

  export default {
    name: 'evtodo',
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }

  .title {
    color: #888;
    font-size: 18px;
    font-weight: initial;
    letter-spacing: .25px;
    margin-top: 10px;
  }

  .items { margin-top: 8px; }

  .item {
    display: flex;
    margin-bottom: 6px;
  }

  .item .name {
    color: #6a6a6a;
    margin-right: 6px;
  }

  .item .value {
    color: #35495e;
    font-weight: bold;
  }
</style>
