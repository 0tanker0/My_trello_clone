<template>
    <v-app-bar
        app
        absolute
        elevate-on-scroll
        color="indigo">

        <v-app-bar-nav-icon class="white--text"></v-app-bar-nav-icon>

        <v-btn
            v-for="link in links"
            :key="link"
            class="white--text ml-3"
            text>
            {{link}}
        </v-btn>

        <v-btn color="indigo lighten-3 ml-3">Создать</v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
            <v-text-field
                class="grey lighten-4 ml-3"
                dense
                flat
                hide-details
                solo-inverted
            ></v-text-field>
        </v-responsive>

        <v-btn icon class="ml-3">
            <v-icon class="white--text rounded-circle">mdi-information-outline</v-icon>
        </v-btn>

        <v-btn icon class="ml-3">
            <v-icon class="white--text rounded-circle">mdi-bell-outline</v-icon>
        </v-btn>

        <v-btn icon class="ml-3 mr-3">
            <v-avatar color="indigo">
                <v-icon class="white--text">
                    mdi-account-circle
                </v-icon>
            </v-avatar>
        </v-btn>

    </v-app-bar>
</template>

<script>
export default {
    name: "Navigation-bar",
    data: () => ({
        links: [
            'Рабочие пространства',
            'Недавние',
            'В избранном',
            'Шаблоны',
        ]
    })
}
</script>

<style scoped>

</style>