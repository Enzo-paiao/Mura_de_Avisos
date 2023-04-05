module.exports = {

    posts: [
        { id: "Qualquer", title: "Teste do mural", Description: "Descrição do teste" },
    ],
    getAll(){
        return this.posts;
    },

    newPost(title, Description){
        this.posts.push({ id:generateID(), title, Description })

    }


}

function generateID() {
    return Math.random().toString(36).substring(2, 9)
}