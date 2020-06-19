const bcrypt = require('bcrypt');
const auth = require('../../../auth');
const ModelAuth = require('../../../model/auth') ;
const ModelUser = require('../../../model/user') ;
const nameCollection = 'auth'

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }
        
    async function login(username, password) { 
        //console.log({ username })
        const data = await store.query(ModelAuth, { username });// -> { username: 'nicaba' }

        console.log(data)

        return bcrypt.compare(password, data.password)
            .then(sonIguales => {

                if (sonIguales) {
                    // Genera token;
                    const newToken = auth.sign({ ...data }) 
                    const buildData = async (ModelUser, data ,newToken) => {
                        //Obtiene resto del usuario
                        const dt_user = await store.query(ModelUser, {username})// ->{ username: 'nicaba' }
                        
                        //console.log(dt_user)
                        
                        const constructor_data = {
                            user : dt_user,
                            token: newToken
                        }

                        return constructor_data
                    }

                    return buildData(ModelUser, data ,newToken)

                } else {
                    console.log('Pass Failed')
                    throw new Error('Informacion invalida');
                }
            });
    }

    async function upsert(data, newUser) {
        const authData = {
            id: data.id,
        }

        if (data.username) {
            authData.username = data.username;
        }

        if (data.password) {
            authData.password = await bcrypt.hash(data.password, 5);//encripta pass, 5 veces ejecuta el algoritmo, lo normal es entre 5-10
        }

        return store.upsert(ModelAuth, nameCollection, authData, newUser);
    }

    
    return {
        login,
        upsert,
    };
}

