<template>
    <v-fragment>
        <div class="dimmer">
            <header>
                <h1>인턴 같이 탐색, Website Menu
        <!--            <span>A sidebar menu as seen on the <a href="#">Google Nexus 7</a> page</span>-->
                </h1>
            </header>
            <div class="home-container">
                <search-form></search-form>
                <sui-card class="apply-list">
                    <sui-card-content>
                        <sui-card-header>진행중인 공고 목록</sui-card-header>
                        <sui-card-meta>기업에서 진행중인 인턴 공고입니다!</sui-card-meta>
                        <sui-list divided relaxed>
        <!--                TODO :더미 데이터 넣고 v-for 로 리스트 생성    -->
                            <sui-list-item>
                                <sui-list-icon name="github" size="large" vertical-align="middle" />
                                <sui-list-content>
                                    <a is="sui-list-header">Semantic-Org/Semantic-UI</a>
                                    <a is="sui-list-description">Updated 10 mins ago</a>
                                </sui-list-content>
                            </sui-list-item>
                            <sui-list-item>
                                <sui-list-icon name="github" size="large" vertical-align="middle" />
                                <sui-list-content>
                                    <a is="sui-list-header">Semantic-Org/Semantic-UI-Docs</a>
                                    <a is="sui-list-description">Updated 22 mins ago</a>
                                </sui-list-content>
                            </sui-list-item>
                            <sui-list-item>
                                <sui-list-icon name="github" size="large" vertical-align="middle" />
                                <sui-list-content>
                                    <a is="sui-list-header">Semantic-Org/Semantic-UI-Meteor</a>
                                    <a is="sui-list-description">Updated 34 mins ago</a>
                                </sui-list-content>
                            </sui-list-item>
                            <sui-list-item>
                                <sui-list-icon name="github" size="large" vertical-align="middle" />
                                <sui-list-content>
                                    <a is="sui-list-header">Semantic-Org/Semantic-UI-Meteor</a>
                                    <a is="sui-list-description">Updated 34 mins ago</a>
                                </sui-list-content>
                            </sui-list-item>
                            <sui-list-item>
                                <sui-list-icon name="github" size="large" vertical-align="middle" />
                                <sui-list-content>
                                    <a is="sui-list-header">Semantic-Org/Semantic-UI-Meteor</a>
                                    <a is="sui-list-description">Updated 34 mins ago</a>
                                </sui-list-content>
                            </sui-list-item>
                            <sui-list-item>
                                <sui-list-icon name="github" size="large" vertical-align="middle" />
                                <sui-list-content>
                                    <a is="sui-list-header">Semantic-Org/Semantic-UI-Meteor</a>
                                    <a is="sui-list-description">Updated 34 mins ago</a>
                                </sui-list-content>
                            </sui-list-item>
                            <sui-list-item>
                                <sui-list-icon name="github" size="large" vertical-align="middle" />
                                <sui-list-content>
                                    <a is="sui-list-header">Semantic-Org/Semantic-UI-Meteor</a>
                                    <a is="sui-list-description">Updated 34 mins ago</a>
                                </sui-list-content>
                            </sui-list-item>
                        </sui-list>
                    </sui-card-content>
                </sui-card>
            </div>
        </div>
    </v-fragment>
</template>

<script>
    import SearchForm from "@/components/UiComponents/SearchForm";
    export default {
        name: "Home",
        components: {
            SearchForm
        }
    }
</script>

<style scoped>
    .dimmer {
        width: 100%;
        height: 100vh;
        /*background-color: rgba(52, 73, 94, 0.3);*/
        background-color: rgba(0, 0, 0, 0.68);
    }

    .home-container {
        padding: 2em 370px;
    }

    .apply-list {
        width: 100% !important;
    }
</style>
