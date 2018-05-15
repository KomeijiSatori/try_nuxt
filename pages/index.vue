<template>
    <div>
        <h1>以下表单纯粹测试用，随便填即可</h1>
        <Form ref="login_form" :model="login_form" :rules="ruleValidate" :label-width="80">
            <FormItem label="用户名" prop="name">
                <Input v-model="login_form.name" label="用户名" placeholder="输入用户名"></Input>
            </FormItem>
            <FormItem label="Token" prop="token">
                <Input v-model="login_form.token" placeholder="输入Token"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleLogin()">提交</Button>
                <Button type="ghost" @click="handleReset()" style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>
        <div v-for="blog in blogs.results" :key="blog.id">
            <h3><nuxt-link :to="{ name: 'blog-blog_id', params: { blog_id: blog.id }}">{{ blog.title }}</nuxt-link></h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    async asyncData ({ params }) {
        let { data } = await axios.get(`/api/blogs/`);
        return { blogs: data }
    },

    methods: {
        handleLogin () {
            this.$refs['login_form'].validate((valid) => {
                if (valid) {
                    this.$store.commit("login", this.login_form);
                    this.$Message.success('登陆成功!');
                } else {
                    this.$Message.error('参数错误!');
                }
            })
        },
        handleReset () {
            this.$refs['login_form'].resetFields();
        },
    },

    data () {
        return {
            login_form: {
                name: "",
                token: "",
            },
            ruleValidate: {
                name: [
                    { required: true, message: '用户名不能为空', trigger: 'blur', }
                ],
                token: [
                    { required: true, message: 'Token 不能为空', trigger: 'blur', }
                ]
            },
        };
    },
}

</script>
