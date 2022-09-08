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
        updateLists (state, card) {
            state.lists = state.lists.map( (l) => {
                if (l.id === card.id){
                    return l
                }
            })
        },
        createList (state, newList) {
            state.lists.push(newList)
        },
        removeList (state, extraList){
            state.cards =  state.cards.filter(x => { return x.cardId !== extraList})
            state.lists = state.lists.filter(function (f) {return f.id !== extraList})
        },
        createCard (state, newCard) {
            state.cards.push(newCard)
        },
        removeCard (state, extraCard) {
            state.cards = state.cards.filter(x => {return x.cardId !== extraCard})
        },
        updateCard (state, card)  {
            state.cards = state.cards.map( (c) => {
                if (c.cardId === card.cardId) {
                    c = card
                }
                return c
            })
        }
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