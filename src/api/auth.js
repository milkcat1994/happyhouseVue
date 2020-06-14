// const data = [{
//         id: Date.now(),
//         text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
//     },
//     {
//         id: Date.now() + 1,
//         text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
//     },
//     {
//         id: Date.now() + 2,
//         text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
//     }
// ]

// const timeout = 500

// export const Post = {
//     list() {
//         return new Promise(resolve => {
//             setTimeout(() => resolve(data), timeout)
//         })
//     },
//     get(id) {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve(
//                     data.filter(post => post.id == id)[0]
//                 )
//             }, timeout)
//         })
//     },
//     create(text) {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 data.push({ id: Date.now(), text })
//                 resolve()
//             }, timeout)
//         })
//     },
//     remove() {

//     }
// }

export const Auth = {
    login(userId, pwd) {
        return new Promise((resolve, reject) => {
            http
                .post("/login", {
                    id: userId,
                    pwd: pwd
                })
                .then(({ data }) => {
                    console.log(data);
                    // context.commit("mutateIsLogin", true);
                    // context.commit("mutateUserInfo", data);
                    // router.push(url);

                    // 오류 코드 this in promise-then()
                    // Uncaught (in promise) TypeError
                    //this.$router.push('/About')

                    const token = Math.random().toString(36).substring(2)
                    localStorage.token = token
                    this.onChange(true)
                    resolve({ token })

                })
                .catch(error => {
                    if (error.response.status == "404") {
                        alertify.error("아이디 또는 비밀번호가 올바르지 않습니다.", 3);
                    } else {
                        alertify.error("로그인 처리시 에러가 발생했습니다.", 3);
                    }
                    console.log(error.config);
                    return reject();
                });

            // if (email !== 'test@test.com' || pw !== 'password123') return reject()
            // const token = Math.random().toString(36).substring(2)
            // localStorage.token = token
            // this.onChange(true)
            // resolve({ token })
        })
    },
    logout() {
        return new Promise((resolve, reject) => {
            delete localStorage.token
            this.onChange(false)
            resolve()
        })
    },
    loggedIn() {
        return !!localStorage.token
    },
    onChange() {}
}