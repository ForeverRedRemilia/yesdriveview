<template>
    <div>
        <el-form>
            <el-form-item label="用户名">
                <el-input v-model="u_name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item v-model="u_pass" label="密码">
                <el-input placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
            <el-button @click="login" type="primary">登录</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                u_name: '',
                u_pass: ''
            }
        },
        methods: {
            login() {
                this.$router.push("/index")
            }
        }
    }
</script>

<style scoped>

</style>