<template>
    <v-fragment>
        <div class="dimmer">
            <header>
<!--                <sui-card-group :items-per-row="5">-->
<!--                    <sui-card :key="company" v-for="company in companyCardInfo">-->
<!--                        <sui-image :src="company.imageSrc" />-->
<!--                        <sui-card-content>-->
<!--                            <sui-card-header>{{company.header}}</sui-card-header>-->
<!--                            <sui-card-meta>{{company.desc}}</sui-card-meta>-->
<!--                        </sui-card-content>-->
<!--                    </sui-card>-->
<!--                </sui-card-group>-->
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
        },
        data: () => {
            return {
                companyCardInfo: [
                    {
                        imageSrc: require(`@/../public/images/Samsung.png`),
                        header: `삼성`,
                        desc: `Samsung`
                    },
                    {
                        imageSrc: require(`@/../public/images/Naver.jpg`),
                        header: `네이버`,
                        desc: `Naver`
                    },
                    {
                        imageSrc: require(`@/../public/images/Kakao.png`),
                        header: `카카오`,
                        desc: `KaKao`
                    },
                ]
            }
        },
        /*eslint-disable*/
        methods : {
            filterApplyList: function (query) {
                // TODO : 진호형이 만든 인턴 공고 데이터 객체에서 데이터 검색해서 화면에 다시 그리기
                // 데이터 객체에 isShow 값 만들어서 해당 값으로 v-show 걸어주기
                // 만약 쿼리가 비어있는 경우에는 모든 값
                // internInfo.foreach(el = > {el.isShow = false});
                // internInfo.filter((el) => el.name.includes(query)).foreach(el = > {el.isShow = true});
                console.log(query)
            }
        },
        created() {
            this.$store.subscribe((mutation, state) => {
                if(mutation.type === 'updateSearchQuery') {
                    this.filterApplyList(state.searchQuery);
                    console.log(`Store Status : `,state);
                }
            })
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
