<template>
    <v-app id="inspire">

        <navigation-bar></navigation-bar>

        <v-main>
            <v-row>
                <v-col cols="2">
                    <v-navigation-drawer>
                        <side-bar></side-bar>
                    </v-navigation-drawer>
                </v-col>
                <v-col>
                    <v-container>
                        <v-row>
                            <list-form></list-form>
                                <lists v-for="list in allLists"
                                       :key="list.id"
                                       class="mt-3"
                                       :list="list"
                                >{{list.title}}</lists>
                        </v-row>

                    </v-container>
                </v-col>
            </v-row>
        </v-main>


        <v-footer
            color="indigo lighten-1"
            padless
        >
            <v-row
                justify="center"
                no-gutters
            >
                <v-btn
                    v-for="link in links"
                    :key="link"
                    color="white"
                    text
                    rounded
                    class="my-2"
                >
                    {{ link }}
                </v-btn>
                <v-col
                    class="indigo py-4 text-center white--text"
                    cols="12"
                >
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
import navigationBar from "@/components/Navigation-bar";
import sideBar from "@/components/Side-bar";
import listForm from "@/components/List-Form";
import Lists from "@/components/Lists";
import {mapGetters} from 'vuex'

export default {
  name: 'App',
    components:{
        Lists,
        navigationBar,
        sideBar,
        listForm
    },
    computed: mapGetters(['allLists']),
    data: () => ({
        links: [
            'Home',
            'About Us',
            'Team',
            'Services',
            'Blog',
            'Contact Us',
        ],
    }),
};
</script>

<style>
#inspire{
    background-image: url("assets/hello_Purple.jpg");
}
v-alert{
    word-wrap: break-word;
}
</style>