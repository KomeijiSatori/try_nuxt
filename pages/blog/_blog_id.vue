<template>
    <div>
        <div v-if="is_login">
            <h>Hello, {{ name }}, you are login with token {{ token }}</h>
            <Button type="error" @click="handleLogout()" style="margin-left: 8px">登出</Button>
        </div>
        <div>
            <p> ID: {{ blog.id }} </p>
            <p> 标题: {{ blog.title }} </p>
            <p> 作者: {{ blog.author }} </p>
            <p> 标签: <span v-for="category in blog.categories" :key="category">{{ category }} </span> </p>
            <p> 发布时间: {{ blog.publish_time }} </p>
            <p> 修改时间: {{ blog.last_update_time }} </p>
            <p> 阅读量: {{ blog.read_count }} </p>
            <p> 评论数: {{ blog.comment_count }} </p>
            <p> 正文:<br/>{{ blog.text }} </p>
        </div>
        <p><nuxt-link :to="{ name: 'index' }">返回主页</nuxt-link></p>
    </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex'

export default {
    async asyncData({ params, error }) {
        // Default data
        try {
            let url = `/api/blogs/archive/${params.blog_id}/`;
            console.log(url);
            let { data } = await axios.get(url);
            return { blog: data };
        } catch (err) {
            console.log(err);
            return error({ statusCode: 500, message: "GG" });
        }
    },
    data () {
        return {

        }
    },
    methods: {
        handleLogout () {
            if (this.is_login) {
                this.$store.commit("logout");
                this.$Message.success('登出成功!');
            } else {
                this.$Message.error('并未登陆!');
            }
        },
    },
    computed: {
        ...mapState({
            name: state => state.user_info.name,
            token: state => state.user_info.token,
            is_login: state => state.is_login,
        })
    }
}
</script>
