<template>
    <div
        draggable="true"
        @dragstart="dragStart($event, card)">
        <v-card class="mt-5 ma-3 primary white--text"
                v-if="card.id === listId"
                elevation="3">
            <v-card-text class="white--text p">
                <v-card-actions>
                    {{card.title}}
                    <v-spacer/>
                    <v-btn icon >
                        <v-icon class="white--text" @click="dialog = true">mdi-note-edit-outline</v-icon>
                    </v-btn>
                    <v-btn icon >
                        <v-icon class="white--text" @click="del">mdi-close</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card-text>
        </v-card>
        <div class="text-center">
            <v-dialog
                v-model="dialog"
                max-width="1000">
                <v-card class="grey lighten-4">
                    <v-card-title class="text-h5 grey lighten-2">
                        Карточка: "{{card.title}}"
                        <br>
                        В списке: "{{listTitle}}"
                    </v-card-title>

                    <v-card-actions>
                        <v-icon class="ma-3">mdi-format-align-left</v-icon>
                        <strong class="ma-3">Описание</strong>
                    </v-card-actions>
                    <v-divider/>
                    <v-container>
                        <v-textarea
                            v-model="description"
                            solo>
                        </v-textarea>
                        <v-btn class="primary" @click="save_description">
                            Сохранить
                        </v-btn>
                    </v-container>
                    <v-divider/>
                    <v-card-actions>
                        <v-icon class="ma-3">mdi-comment-multiple</v-icon>
                        <strong class="ma-3">Комментарии</strong>
                    </v-card-actions>

                    <!-- ##########COMMENT-FORM##########-->
                    <card-comment-form :card="card"></card-comment-form>

                    <!-- ##########COMMENTS##########-->
                    <v-card-actions v-for="comm in card.comments" :key="comm.id">
                        <v-avatar
                            class="rounded-lg white--text mr-5"
                            color="primary"
                            size="30">P</v-avatar>
                        <v-alert
                            class="d-inline mt-5"
                            dense
                            label="Введите комментарий"
                            height="50"
                            :value="comm.title"
                            @input="$emit('update:modelValue', $event.target.value)">
                            {{comm.title}}
                        </v-alert>
                    </v-card-actions>

                </v-card>
            </v-dialog>
        </div>
    </div>


</template>

<script>
import cardCommentForm from "@/components/card-comment-form";
import {mapMutations} from "vuex";
export default {
    name: "List-title-item",
    components: {cardCommentForm},
    props: {
        card: {type: Object},
        listId: {type: Number},
        listTitle: {type: String}
    },
    data: () => ({
        dialog: false,
        description: '',
    }),
    methods: {
        ...mapMutations(['removeCard', 'updateCard']),
        del() {
            this.removeCard(this.card.title);
        },
        open() {
            this.dialog === false ? this.dialog = true : this.dialog = false;
        },
        save_description() {
            this.updateCard({id: this.card.id, title: this.card.title, description: this.description, comments: this.comments});
        },
        dragStart: (event, item) => {
            event.dataTransfer.dropEffect = 'move';
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('itemId', item);
        }
    }
}
</script>

<style scoped>
.p {
    font-size: 14px;
    word-wrap: break-word;
}
v-btn {
    text-align: right;
    height: 12px;
}
</style>