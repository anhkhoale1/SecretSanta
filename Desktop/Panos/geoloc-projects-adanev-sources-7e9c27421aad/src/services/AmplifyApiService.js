import { API } from "aws-amplify";

const authorizer = {
    headers: {
        //Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
    }
}

const requests = {
    get(apiName, path){ return API.get(apiName, path, authorizer) },
    put(apiName, path, body){ return API.put(apiName, path, {...authorizer, ...body}) },
    post(apiName, path, body){ return API.post(apiName, path, {...authorizer, ...body}) },
    del(apiName, path, body){ return API.del(apiName, path, {...authorizer, ...body}) },
}

export default requests;