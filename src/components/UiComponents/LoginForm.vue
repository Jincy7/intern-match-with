<template>
    <sui-card>
        <sui-card-content>
            <sui-card-header class="form-header">로그인</sui-card-header>
            <sui-form>
                <sui-form-field>
                    <label>아이디</label>
                    <input type="text" placeholder="ID" >
                </sui-form-field>
                <sui-form-field>
                    <label>비밀번호</label>
                    <input type="password" placeholder="Password" >
                </sui-form-field>
                <sui-button type="submit">Login</sui-button>
                <sui-button>Register</sui-button>
            </sui-form>
        </sui-card-content>
    </sui-card>
</template>

<script>
    export default {
        name: "LoginForm"
    }
</script>

<style scoped>
.form-header {
    text-align: center;
    margin: 16px;
}
</style>
