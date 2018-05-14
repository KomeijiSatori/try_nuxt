<template>
  <div>

    <h1>Hello world!</h1>
    <div v-for="blog in blogs.results" :key="blog.id">
        <h3><nuxt-link :to="{ name: 'blog-blog_id', params: { blog_id: blog.id }}">{{ blog.title }}</nuxt-link></h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ params }) {
    let { data } = await axios.get(`/api/blogs/`);
    return { blogs: data }
  }
}
</script>
