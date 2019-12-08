<template>
    <div class="search-box">
        <a class="gn-icon gn-icon-search"><span>Search</span></a>
        <input class="search-input" type="text" placeholder="원하는 회사를 검색해 보세요!" v-model="passedQuery">
        <i class="far fa-times-circle close-button"></i>

        <sui-button class="search-button" @click="search">
            <h1>
                인턴 같이 탐색 하기
                <span><i class="fas fa-chevron-circle-right"></i></span>
            </h1>
        </sui-button>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Search",
        data: () => {
          return {
              passedQuery: ''
          }
        },
        methods: {
            search: function () {
                this.$store.commit('updateSearchQuery', {
                    searchQuery: this.passedQuery
                });
            }
        },
        computed: {
            ...mapGetters({
                childQuery: 'getSearchQuery'
            })
        }
    }
</script>

<style scoped>
    .search-box {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 16px auto 32px;
        width: 80%;
        height: 100%;
        border-radius: 6px;
        /*border: 1px solid #c6d0da;*/
        background-color: white;
        color: black;
        text-align: center;
    }

    h1 {
        font-size: 1.3em;
        line-height: 1.3;
        margin: 0.1em 0;
        font-weight: 300;
    }

    a {
        /*position: absolute;*/
        /*top: 24px;*/
        /*left: 12px;*/
    }

    .search-input {
        background-color: transparent;
        border: none;
        margin: 0;
        padding: 0;
        width: 40%;
        height: 60px;
        color: rgba(0, 0, 0, .87);
        word-wrap: break-word;
        outline: none;
        display: flex;
        flex: 100%;
        -webkit-tap-highlight-color: transparent;
    }

    .close-button {
        font-size: 1.5em;
        cursor: pointer;
        margin: 16px;
        color: #5f6f81;
    }

    .close-button:hover {
        color: black;
    }

    .search-button {
        /*position: absolute;*/
        margin: 0 !important;
        /*top: 0;*/
        /*right: 0;*/
        width: 360px !important;
        height: 60px;
        background-color: #34495e !important;
        color: white !important;
    }
    .search-button:hover {
        background-color: #283849 !important;
        color: white !important;
    }
</style>
