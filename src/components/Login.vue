<template>
    <div>
        <el-form label-width="75px">
            <el-form-item label="用户名">
                <el-col span="6">
                    <el-input v-model="u_name" placeholder="请输入用户名"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="密码">
                <el-col span="6">
                    <el-input v-model="u_pass" placeholder="请输入密码" type="password"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="验证码">
                <slide-verify
                        ref="slideblock"
                        @again="onAgain"
                        @fulfilled="onFulfilled"
                        @success="onSuccess"
                        @fail="onFail"
                        @refresh="onRefresh"
                        :accuracy="accuracy"
                        :slider-text="text"
                ></slide-verify>
            </el-form-item>
            <el-button @click="login" type="primary" style="width: 300px;font-weight: bold;background-color: #2777f8">
                登录
            </el-button>
        </el-form>
    </div>
</template>

<script>
    import SlideVerify from "@/components/slide-verify";
    export default {
        name: "Login",
        components: {SlideVerify},
        data() {
            return {
                u_name: '',
                u_pass: '',
                text: '向右滑动填充拼图',
                // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
                accuracy: 3,
            }
        },
        methods: {
            login() {
                this.$router.push("/index")
            },
            onSuccess() {
            },
            onFail() {
            },
            onRefresh() {
                this.msg = ''
            },
            onFulfilled() {
            },
            onAgain() {
                // 刷新
                this.$refs.slideblock.reset();
            },
            handleClick() {
                // 父组件直接可以调用刷新方法
                this.$refs.slideblock.reset();
            },
        }
    }
</script>

<style scoped>

</style>