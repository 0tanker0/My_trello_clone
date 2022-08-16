export default{
    state: {
        lists: [],
        cards: []
    },
    getters: {
        allLists(state){
            return state.lists
        }
    },
    mutations: {
        updateLists (state) {
            state.cards.map(function (x) {state.lists[x.id].unshift(x)});
            state.cards = [];
        },
        createList (state, newList) {
            state.lists.unshift(newList)
        },
        removeList (state, extraList){
            state.lists = state.lists.filter(function (f) {return f.id !== extraList})
        },
        createCard (state, newList) {
            state.cards.unshift(newList)
        },
    },
    actions: {
        addNewLists(ctx, lists){
            ctx.commit('updateLists', lists)
        },
        addNewCard(ctx, lists) {
            ctx.commit("createCard", lists)
        }
    },
}