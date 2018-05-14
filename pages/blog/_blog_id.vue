<template>
    <div>
        <div>
            <p> {{ blog.id }} </p>
            <p> {{ blog.title }} </p>
            <p> {{ blog.author }} </p>
            <p> {{ blog.publish_time }} </p>
            <p> {{ blog.last_update_time }} </p>
            <p> {{ blog.read_count }} </p>
            <p> {{ blog.comment_count }} </p>
            <p> {{ blog.text }} </p>
            <p> <span v-for="category in blog.categories" :key="category">{{ category }}</span> </p>
        </div>
        <p><nuxt-link :to="{ path: '/' }">Back to main page</nuxt-link></p>
    </div>
</template>

<script>
import axios from 'axios';

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
    }
}
</script>
