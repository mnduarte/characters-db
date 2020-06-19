const {nanoid} = require('nanoid');
const auth = require('../auth');

const ModelUser = require('../../../model/user') ;
const nameCollection = 'user'

module.exports = function (injectedStore) {
    let store = injectedStore;

    async function upsert(body) {

        let newUser = true;

        //Verifica si existe
        //const validateUser = store.validateNew(ModelUser, {userName: body.userName});

        const dataUser = {
            username: body.username,
            fullname: body.fullname
        }

        //console.log(nanoid)

        if (body.id) {
            dataUser.id = body.id;
        } else {
            dataUser.id = nanoid();
            newUser = true
        }

        if (body.password || body.username) {
            await auth.upsert({
                id: dataUser.id,
                username: dataUser.username,
                password: body.password,
            }, newUser)
        }

        const result = await store.upsert( ModelUser, nameCollection, dataUser, newUser);
        console.log(result);

        return result
    }

    return {
        upsert
    };
}
