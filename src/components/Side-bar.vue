<template>
        <v-card
            height="1024"
            max-width="256"
            class="mx-auto"

        >
            <v-navigation-drawer permanent>
                <v-list-item>
                    <v-avatar
                        class="rounded-lg white--text mr-5"
                        color="primary"
                        size="30"
                    >P</v-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            <h5>Рабочая площадка <br> Trello</h5>
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            <h6>Бесплатно</h6>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list
                    dense
                    nav>

                    <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link>

                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>

                    </v-list-item>

                </v-list>

                <v-divider></v-divider>

                <v-container>
                    <h5>Режимы просмотра рабочего пространства:</h5>
                    <v-list
                        dense
                        nav>

                        <v-list-item link>

                            <v-list-item-icon>
                                <v-icon>mdi-calendar</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>Календарь</v-list-item-title>
                            </v-list-item-content>

                        </v-list-item>

                        <v-list-item link>

                            <v-list-item-icon>
                                <v-icon>mdi-table</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>Таблица</v-list-item-title>
                            </v-list-item-content>

                        </v-list-item>
                    </v-list>
                </v-container>

                <v-divider></v-divider>

            </v-navigation-drawer>
        </v-card>
</template>

<script>
export default {
    name: "Side-bar",
    data: () => ({
        items: [
            { title: 'Доски', icon: 'mdi-view-dashboard' },
            { title: 'Участники', icon: 'mdi-account-multiple' },
            { title: 'Настройки', icon: 'mdi-cogs' },
        ],
        right: null,
    })
}
</script>

<style scoped>

</style>