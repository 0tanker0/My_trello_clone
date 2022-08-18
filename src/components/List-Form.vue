<template>
    <v-card
        class="mt-5 mr-6"
    max-width="344">

        <v-container>
            <v-text-field
                outlined
                dense
                flat
                hide-details
                class="ma-1"
                label="Введите заголовок списка"
                v-model="new_list"
            ></v-text-field>
        </v-container>

        <v-container>

            <v-alert
                v-model="alert"
                border="left"
                close-text="Close Alert"
                type="error"
                dark
                dismissible
                dense
            >Введите что-нибудь
            </v-alert>

            <v-btn
                @click="submit"
                class="ma-1 indigo white--text">
                <v-icon class="ml-0 mr-2">mdi-plus</v-icon>
                Добавить список</v-btn>


            <v-btn icon class="ml-8">
                <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
        </v-container>

    </v-card>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
    name: "List-Form",
    data: () => ({
       new_list: '',
        alert: false
    }),
    computed: mapGetters(['allLists']),
    methods: {
        ...mapMutations(['createList']),
        submit () {
            if (this.new_list.length === 0){
                this.alert = true
            }
            else{
                this.createList({
                    title: this.new_list,
                    id: Date.now(),
                    cards: []
                });
                this.new_list = '';
            }

        }
    }
    }

</script>

<style scoped>

</style>