const ModelCharacter = require('../../../model/character') ;

module.exports = function (injectedStore) {
    let store = injectedStore;
    
    function list() {
        return store.list(ModelCharacter);
    }

    async function paginatedList(pag, lim, username) {
        const page = parseInt(pag)
        const limit = parseInt(lim)

        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const results = {}

        if (endIndex < await store.countDocument(ModelCharacter)) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }
        
        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }


        
        //console.log(ModelCharacter)
        const character = await store.paginatedList(ModelCharacter, limit, startIndex);
        results.results = character
        //console.log(character)
        results.results = character
                
        return results;
    }

    return {
        list,
        paginatedList
    };
}
