<template>
    <v-fragment>
        <div class="dimmer">
            <header>
                <h1>인턴 정보
        <!--            <span>A sidebar menu as seen on the <a href="#">Google Nexus 7</a> page</span>-->
                </h1>
            </header>
            <div class="home-container">
                <sui-card class="apply-list">
                    <sui-card-content>
                        <sui-card-header class="center aligned header">네이버 클라우드 운영팀 인턴</sui-card-header>
                        <sui-list divided relaxed>
        <!--                TODO :더미 데이터 넣고 v-for 로 리스트 생성    -->
                            <sui-list-item>
                                <sui-list-icon size="large" vertical-align="middle"/>
                                <sui-list-content>
                                    <a is="sui-list-header">담당업무</a>
                                    <sui-list bulleted>
                                        <sui-list-item href="#">북미, 남미, 유럽 등 글로벌 사용자 데이터 분석 및 조사를 기초로 글로벌 웹툰 서비스의 User Scenario 발굴/개선</sui-list-item>
                                        <sui-list-item>지역별 사용자 니즈를 분석하고 우선순위 및 feature를 정의</sui-list-item>
                                        <sui-list-item>서비스 적용 과제의 Backend/Frontend 상세설계 (Task Flow & Wireframing) 작성</sui-list-item>
                                    </sui-list>
                                </sui-list-content>   
                            </sui-list-item>
                            <sui-list-item>
                                <sui-list-icon size="large" vertical-align="middle"/>
                                <sui-list-content>
                                    <a is="sui-list-header">자격요건</a>
                                    <sui-list bulleted>
                                        <sui-list-item href="#">북미, 남미, 유럽 등 글로벌 사용자 데이터 분석 및 조사를 기초로 글로벌 웹툰 서비스의 User Scenario 발굴/개선</sui-list-item>
                                        <sui-list-item>지역별 사용자 니즈를 분석하고 우선순위 및 feature를 정의</sui-list-item>
                                        <sui-list-item>서비스 적용 과제의 Backend/Frontend 상세설계 (Task Flow & Wireframing) 작성</sui-list-item>
                                    </sui-list>
                                </sui-list-content>   
                            </sui-list-item>
                            <sui-list-item>
                                <sui-list-icon size="large" vertical-align="middle"/>
                                <sui-list-content>
                                    <a is="sui-list-header">우대사항</a>
                                    <sui-list bulleted>
                                        <sui-list-item href="#">북미, 남미, 유럽 등 글로벌 사용자 데이터 분석 및 조사를 기초로 글로벌 웹툰 서비스의 User Scenario 발굴/개선</sui-list-item>
                                        <sui-list-item>지역별 사용자 니즈를 분석하고 우선순위 및 feature를 정의</sui-list-item>
                                        <sui-list-item>서비스 적용 과제의 Backend/Frontend 상세설계 (Task Flow & Wireframing) 작성</sui-list-item>
                                    </sui-list>
                                </sui-list-content>   
                            </sui-list-item>
                            <sui-list-item>
                                <sui-list-icon size="large" vertical-align="middle"/>
                                <sui-list-content>
                                    <a is="sui-list-header">전형절차 및 기타사항</a>
                                    <sui-list bulleted>
                                        <sui-list-item href="#">북미, 남미, 유럽 등 글로벌 사용자 데이터 분석 및 조사를 기초로 글로벌 웹툰 서비스의 User Scenario 발굴/개선</sui-list-item>
                                        <sui-list-item>지역별 사용자 니즈를 분석하고 우선순위 및 feature를 정의</sui-list-item>
                                        <sui-list-item>서비스 적용 과제의 Backend/Frontend 상세설계 (Task Flow & Wireframing) 작성</sui-list-item>
                                    </sui-list>
                                </sui-list-content>   
                            </sui-list-item>
                            <sui-list-item>
                                <sui-list-icon size="large" vertical-align="middle"/>
                                <sui-list-content>
                                    <a is="sui-list-header">회사/조직소개</a>
                                    <sui-list bulleted>
                                        <sui-list-item href="#">북미, 남미, 유럽 등 글로벌 사용자 데이터 분석 및 조사를 기초로 글로벌 웹툰 서비스의 User Scenario 발굴/개선</sui-list-item>
                                        <sui-list-item>지역별 사용자 니즈를 분석하고 우선순위 및 feature를 정의</sui-list-item>
                                        <sui-list-item>서비스 적용 과제의 Backend/Frontend 상세설계 (Task Flow & Wireframing) 작성</sui-list-item>
                                    </sui-list>
                                </sui-list-content>   
                            </sui-list-item>
                        </sui-list>
                    </sui-card-content>
                    <sui-button horizontal-align="middle" primary>지원하기</sui-button>
                </sui-card>
                
            </div>
        </div>
    </v-fragment>
</template>

<script>
    export default {
        name: "Info",
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
