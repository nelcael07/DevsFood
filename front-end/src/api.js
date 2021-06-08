let BASE = 'https://api.b7web.com.br/devsfood/api'

export default {
    getCategorias: async()=>{
        // GET /categories
        const res = await fetch(BASE+'/categories')
        const json = await res.json();
        return json
    }
}