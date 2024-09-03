<template>
  <div id="header" class="iconfont">
    <div class="header-left" style="display: flex">
      <div class="header-title">
        <h2 class="header-title-logo iconfont">&#xe60f;</h2>
        <h2 class="header-title-text">McBox Plus</h2>
      </div>
      <div class="header-navs">
        <router-link :to="listsx.router" :key="listsx" v-for="listsx in lists">
          <div class="header-navs-nav">
            <b v-html="listsx.iconfont"> </b> {{ listsx.name }}
          </div>
        </router-link>
      </div>
    </div>
    <div class="header-right">
      <div class="header-sets">
        <div v-on:click="tomin()" class="header-sets-set">&#xe64c;</div>
        <div v-on:click="tomax()" v-if="!main_max" class="header-sets-set">
          &#xe651;
        </div>
        <div v-on:click="tounmax()" v-if="main_max" class="header-sets-set">
          &#xe653;
        </div>
        <div v-on:click="toclose()" class="header-sets-set">&#xe65c;</div>
      </div>
    </div>
  </div>
</template>

<script>
const { ipcRenderer } = window.require("electron");
export default {
  data() {
    return {
      lists: [
        { name: "首页", router: "/", iconfont: "&#xe639;" },
        { name: "功能", router: "/functions", iconfont: "&#xe629;" },
        { name: "资源", router: "/resources", iconfont: "&#xe888;" },
        { name: "设置", router: "/set", iconfont: "&#xe63d;" },
        { name: "关于", router: "/about", iconfont: "&#xe622;" },
      ],
      main_max: false,
    };
  },
  mounted() {
    ipcRenderer.on("window-max", () => {
      this.main_max = true;
    });
    ipcRenderer.on("window-unmax", () => {
      this.main_max = false;
    });
  },
  methods: {
    tomin() {
      ipcRenderer.send("window-min");
    },
    tomax() {
      ipcRenderer.send("window-max");
      this.main_max = true;
    },
    tounmax() {
      ipcRenderer.send("window-unmax");
      this.main_max = false;
    },
    toclose() {
      ipcRenderer.send("window-close");
    },
  },
};
</script>

<style lang="scss" scoped>
#header {
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  .header-title {
    display: flex;
    &-logo {
      font-size: 28px;
      font-family: "OPPOSansH";
    }
    &-text {
      font-size: 18px;
      font-family: "OPPOSansH";
    }
  }
  .header-navs {
    display: flex;
    margin: 0 20px;
    &-nav {
      -webkit-app-region: no-drag;
      padding: 0 5px;
    }
  }
  .header-sets {
    display: flex;
    &-set {
      -webkit-app-region: no-drag;
      height: 32px;
      width: 32px;
      line-height: 32px;
      margin: 14px 5px;
      text-align: center;
      border-radius: 5px;
    }
  }
}
</style>