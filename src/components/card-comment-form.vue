<template>
    <v-card-actions>
        <v-avatar
            class="rounded-lg white--text mr-5"
            color="primary"
            size="30">P</v-avatar>
        <v-textarea
            class="d-inline mt-5"
            dense
            solo
            label="Введите комментарий"
            height="50"
            v-model="comment">
        </v-textarea>
        <v-btn class="primary ml-3" @click="save_comment">Сохранить</v-btn>
    </v-card-actions>
</template>

<script>
import {mapMutations} from "vuex";
export default {
    name: "card-comment-form",
    props: {
      card: {type: Object}
    },
    data: () => ({
        comment: ''
    }),
    methods:{
        ...mapMutations(['updateCard']),
        save_comment() {
            let newComments = this.card.comments;
            newComments = newComments.push({id:Date.now(), title: this.comment})
            this.updateCard({id: this.card.id, title: this.card.title, description: this.card.description, comment: newComments});
            this.comment = '';
        }
    }
}
</script>

<style scoped>

</style>