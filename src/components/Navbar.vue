<template>
  <nav>
    <v-app-bar color="red" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Agasoko</span>
        <span> Online</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-menu offset-y>
                    <template V-slot:activator="{on}">
                        <v-btn
                             text 
                             v-on="on"
                             >
                            <v-icon left>Expand_more</v-icon>
                            <spn>Menu</spn>
                        </v-btn>
                    </template>
                    <v-list flat>
                        <v-list-item v-for="link in links" :key="link.text" router :to="link.router" active-class="border">
                            <v-list-item-title>{{link.text}}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>-->

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text> Menu </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            link
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text>
        <span>Exit</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark app class="red darken-4">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <v-img src="/img1.jpg"></v-img>
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">Username</p>
        </v-flex>
        <v-flex class="mt-4 mb-4 popup-component-container">
          <component-popup />
        </v-flex>
      </v-layout>
      <v-list flat>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          active-class="border"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import ComponentPopup from "./component-popup.vue";

export default {
  name: "Navbar",
  data: () => ({
    drawer: true,
    links: [
      { icon: "dashboard", text: "Dashboard", route: "/" },
      { icon: "folder", text: "Project", route: "/projects" },
      { icon: "person", text: "Team", route: "/team" },
    ],

    //     links: [
    //     { title: 'Click Me' },
    //     { title: 'Click Me' },
    //     { title: 'Click Me' },
    //     { title: 'Click Me 2' },
    //   ],
  }),
  components: {
    ComponentPopup,
  },
};
</script>
<style scoped>
.border {
  border-left: 4px solid #0ba;
}
</style>