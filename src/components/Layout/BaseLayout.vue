<template>
    <div id="app">
        <div class="container">
            <ul id="gn-menu" class="gn-menu-main">
                <li class="gn-trigger">
                    <a class="gn-icon gn-icon-menu"><span>Menu</span></a>
                    <nav class="gn-menu-wrapper">
                        <div class="gn-scroller">
                            <ul class="gn-menu">
                                <li class="gn-search-item">
                                    <input placeholder="공고 검색" type="search" class="gn-search">
                                    <a class="gn-icon gn-icon-search"><span>검색하기</span></a>
                                </li>
                                <li>
                                    <a class="gn-icon gn-icon-download">지원 현황 확인</a>
<!--                                    <ul class="gn-submenu">-->
<!--                                        <li><a class="gn-icon gn-icon-illustrator">Vector Illustrations</a></li>-->
<!--                                        <li><a class="gn-icon gn-icon-photoshop">Photoshop files</a></li>-->
<!--                                    </ul>-->
                                </li>
                                <li><a class="gn-icon gn-icon-cog">Settings</a></li>
                                <li><a class="gn-icon gn-icon-help">Help</a></li>
<!--                                <li>-->
<!--                                    <a class="gn-icon gn-icon-archive">Archives</a>-->
<!--                                    <ul class="gn-submenu">-->
<!--                                        <li><a class="gn-icon gn-icon-article">Articles</a></li>-->
<!--                                        <li><a class="gn-icon gn-icon-pictures">Images</a></li>-->
<!--                                        <li><a class="gn-icon gn-icon-videos">Videos</a></li>-->
<!--                                    </ul>-->
<!--                                </li>-->
                            </ul>
                        </div><!-- /gn-scroller -->
                    </nav>
                </li>
                <li><a href="#">Intern Search</a></li>
                <!--        <li><a class="codrops-icon codrops-icon-prev" href="#"><span>Previous Demo</span></a></li>-->
                <!--    TODO : 로그인 후에는 아래 코드 로그인 된 걸로 하고 사용자 이름 보여주고, 로그아웃 버튼 표출  -->
                <li><a @click="toggleLogin" href="#"><span>Login for Service</span></a></li>
            </ul>
            <div v-show="isLoginClicked" class="login-form-container">
                <login-form></login-form>
            </div>
<!--            Main Panel -->
            <div>
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginForm from "@/components/UiComponents/LoginForm";

    export default {
        name: "BaseLayout",
        components: {
            LoginForm
        },
        data: () => {
            return {
                isLogin: false,
                isLoginClicked: false,
            }
        },
        methods : {
            toggleLogin: function () {
                this.isLoginClicked = !this.isLoginClicked;
            }
        }
    }
</script>

<style scoped>
.login-form-container {
    position: absolute;
    top: 76px;
    right: 16px;
}
</style>
