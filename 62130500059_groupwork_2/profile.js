const app = {
    data() {
        return {
            firstname: 'Pongsathorn',
            lastname: 'Pichaiyuth',
            role: 'College student',
            url: 'images/profile.jpg',
            articleCount: 30,
            followerCount: 900,
            ratings: 9
        }
    }
}
Vue.createApp(app).mount('#app')