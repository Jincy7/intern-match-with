<template>
    <v-fragment>
        <div class="dimmer">
            <header>
                <h1>지원자 정보
        <!--            <span>A sidebar menu as seen on the <a href="#">Google Nexus 7</a> page</span>-->
                </h1>
            </header>
            <div class="home-container">
                <sui-card-group :items-per-row="3" stackable>
                    <sui-card>
                        <sui-image :src="image[0]"/>
                        <sui-card-content>
                            <sui-card-header>씹창놈</sui-card-header>
                            <sui-card-meta>취업 성공하고 면접자들 엿먹이려고 지원함</sui-card-meta>
                        </sui-card-content>
                        <sui-card-content extra>
                            <sui-icon name="users" /> 여자친구 3 Girls
                        </sui-card-content>               
                    </sui-card>
                    <sui-card>
                        <sui-image :src="image[3]"/>
                        <sui-card-content>
                            <sui-card-header>곧 28살</sui-card-header>
                            <sui-card-meta>취업 성공하고 면접자들 엿먹이려고 지원함</sui-card-meta>
                        </sui-card-content>
                        <sui-card-content extra>
                            <sui-icon name="users" /> 여자친구 20 Girls
                        </sui-card-content>
                    </sui-card>
                    <sui-card>
                        <sui-image :src="image[2]"/>
                        <sui-card-content>
                            <sui-card-header>환승역 스캐너</sui-card-header>
                            <sui-card-meta>창업 성공하고 면접자들 엿먹이려고 지원함</sui-card-meta>
                        </sui-card-content>
                        <sui-card-content extra>
                            <sui-icon name="users" /> 비서 3 Girls
                        </sui-card-content>
                    </sui-card>
                    <sui-card>
                        <sui-image :src="image[1]"/>
                        <sui-card-content>
                            <sui-card-header>간잽이</sui-card-header>
                            <sui-card-meta>지원할까 말까~</sui-card-meta>
                        </sui-card-content>
                    </sui-card>
                </sui-card-group>              
            </div>
        </div>
    </v-fragment>
</template>

<script>
export default {
    name: "Applicant",
    data: function () {
        return {
            image: []
        }
    },
    components: {
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
