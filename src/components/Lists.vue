<template>
    <v-card
        max-width="344"
        class="mr-5 mt-5"
        draggable="true"
        @dragover.prevent
        @dragenter.prevent
        @drop="drop($event, list.id)">

        <v-container>
            <p class="indigo white--text"><strong><slot></slot></strong></p>
        </v-container>

        <v-divider/>

        <!--######CARDS###### -->

        <list-title-item
            v-for="card in allCards"
            :key="card.title"
            :card="card"
            :listId="list.id"
            :listTitle="list.title">
        </list-title-item>


        <v-divider/>
        <v-btn
            v-show="!isActive"
            @click="add"
            class="ma-1 indigo white--text mt-4 mb-4">
            <v-icon class="ml-0 mr-2">mdi-plus</v-icon>
            Добавить карточку
        </v-btn>

        <v-container v-show="isActive">
                <v-text-field
                    outlined
                    dense
                    flat
                    hide-details
                    class="ma-1"
                    label="Введите текст карточки"
                    v-model="box">
                </v-text-field>

            <!-- ##########ERROR##########-->

            <v-alert
                v-model="alertIsActive"
                border="left"
                close-text="Close Alert"
                type="error"
                dark
                dismissible
                dense>
                Карточка не должна быть пустой
            </v-alert>
            <v-btn class="ma-1 white text primary" @click="submit">
                Подтвердить
            </v-btn>
        </v-container>

        <v-btn @click="del" icon>
            <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-btn class="ml-2" icon>
            <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>

    </v-card>
</template>

<script>
import {mapMutations, mapGetters} from "vuex";
import listTitleItem from "@/components/List-title-item";
export default {
    name: "List-obj",
    components: {listTitleItem},
    data: () => ({
        isActive: false,
        box: '',
        alertIsActive: false
    }),
    props:{
        list: {type: Object}
    },
    computed: mapGetters(['allLists', "allCards"]),
    methods: {
        ...mapMutations(["removeList", "updateLists", "createCard", 'updateCard', "removeCard"]),
        add () {
            this.isActive === true ? this.isActive = false : this.isActive = true
        },
        submit () {
            if (this.box === '') {
                this.alertIsActive = true
            } else {
                this.createCard({id: this.list.id, title: this.box, description: '', comments: []});
                this.box = '';
            }
        },
        del () {
            this.removeList(this.list.id)
        },
        drop: (event, listId) => {
            const item = event.DataTransfer.getData('itemId');
            this.removeCard(item);
            this.createCard({id: listId, title: item.title, description: item.description, comments: item.comments})
        }
    }
}
</script>

<style scoped>
p {
    text-align: center;
    border: 1px solid darkgray ;
    border-radius: 4px;
    margin: 5px;
    font-size: 22px;
}
</style>