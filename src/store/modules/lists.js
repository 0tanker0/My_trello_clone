export default{
    state: {
        lists: [],
        cards: [],
    },
    getters: {
        allLists(state){
            return state.lists
        },
        allCards(state) {
            return state.cards
        }
    },
    mutations: {
        updateLists (state) {
            state.cards.map(function (x) {state.lists[x.id].unshift(x)});
            state.cards = [];
        },
        createList (state, newList) {
            state.lists.push(newList)
        },
        removeList (state, extraList){
            state.cards =  state.cards.filter(x => { return x.id !== extraList})
            state.lists = state.lists.filter(function (f) {return f.id !== extraList})
        },
        createCard (state, newList) {
            state.cards.push(newList)
        },
        removeCard (state, extraCard) {
            state.cards = state.cards.filter(x => {return x.title !== extraCard})
        },
        updateCard (state, card) {
            state.cards = state.cards.map((x) => {
                x.title === card.title ? { ...x, id: card.id } : x
            })
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