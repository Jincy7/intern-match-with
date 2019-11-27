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
                                    <input placeholder="Search" type="search" class="gn-search">
                                    <a class="gn-icon gn-icon-search"><span>Search</span></a>
                                </li>
                                <li>
                                    <a class="gn-icon gn-icon-download">Downloads</a>
                                    <ul class="gn-submenu">
                                        <li><a class="gn-icon gn-icon-illustrator">Vector Illustrations</a></li>
                                        <li><a class="gn-icon gn-icon-photoshop">Photoshop files</a></li>
                                    </ul>
                                </li>
                                <li><a class="gn-icon gn-icon-cog">Settings</a></li>
                                <li><a class="gn-icon gn-icon-help">Help</a></li>
                                <li>
                                    <a class="gn-icon gn-icon-archive">Archives</a>
                                    <ul class="gn-submenu">
                                        <li><a class="gn-icon gn-icon-article">Articles</a></li>
                                        <li><a class="gn-icon gn-icon-pictures">Images</a></li>
                                        <li><a class="gn-icon gn-icon-videos">Videos</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div><!-- /gn-scroller -->
                    </nav>
                </li>
                <li><a href="#">Intern Search</a></li>
                <!--        <li><a class="codrops-icon codrops-icon-prev" href="#"><span>Previous Demo</span></a></li>-->
                <!--    TODO : 로그인 후에는 아래 코드 로그인 된 걸로 하고 사용자 이름 보여주고, 로그아웃 버튼 표출  -->
                <li><a class="codrops-icon codrops-icon-drop" href="#"><span>Login for Service</span></a></li>

            </ul>
<!--            Main Panel -->
            <div>
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseLayout"
    }
</script>

<style scoped>

</style>
