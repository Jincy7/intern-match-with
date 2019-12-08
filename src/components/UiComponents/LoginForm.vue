<template>
    <sui-card>
        <sui-card-content>
            <sui-card-header class="form-header">로그인</sui-card-header>
            <sui-form>
                <sui-form-field>
                    <label>아이디</label>
                    <input type="text" placeholder="ID" v-model="id" >
                </sui-form-field>
                <sui-form-field>
                    <label>비밀번호</label>
                    <input type="password" placeholder="Password" v-model="pass" >
                </sui-form-field>
                <sui-button @click="login">Login</sui-button>
                <sui-button>Register</sui-button>
            </sui-form>
        </sui-card-content>
    </sui-card>
</template>

<script>
    export default {
        name: "LoginForm",
        data: () => {
            return {
                id: ``,
                pass: ``,
            }
        },
        methods: {
            login: function () {
                let userType = (this.id === `studentUser`) ? `student` : `company`;
                this.$store.commit('updateLoginType', {
                    userType: userType,
                });
                this.clearInput();
            },
            clearInput: function () {
                this.id = ``;
                this.pass = ``;
            }
        }
    }
</script>

<style scoped>
.form-header {
    text-align: center;
    margin: 16px;
}
</style>
