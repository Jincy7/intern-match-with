<template>
    <v-fragment>
        <div class="dimmer">
            <header>
                <h1>지원자 정보
        <!--            <span>A sidebar menu as seen on the <a href="#">Google Nexus 7</a> page</span>-->
                </h1>
            </header>
            <div class="home-container">
                <sui-card class="apply-list">
                    <sui-card-content>
                        <sui-card-header>지원자 목록</sui-card-header>
                        <sui-card-meta>기업에서 진행중인 인턴 공고입니다!</sui-card-meta>
                        <sui-list divided relaxed>
                            <sui-list-item :key="info" v-for="info in companyInfo[0].applicants">
                                <sui-list-content>
                                    <a v-if="!info.isChecked" is="sui-list-header" v-on:click="loadModal(info.id)">{{info.name}}</a>
                                    <sui-button v-if="!info.isChecked" positive content="합격" />
                                    <sui-button v-if="!info.isChecked" negative content="불합격" />
                                </sui-list-content>
                            </sui-list-item>
                        </sui-list>
                    </sui-card-content>
                </sui-card>
                <sui-modal v-model="modal">
                <sui-modal-header>{{internInfo[modalId].internName}} 질문</sui-modal-header>
                <sui-modal-content>
                    <sui-card class="apply-list">
                        <sui-card-content>
                            <sui-list divided relaxed>
                                <sui-list-item :key="ques" v-for="ques in internInfo[modalId].questions">
                                    <sui-list-icon size="large" vertical-align="middle"/>
                                    <sui-list-content>
                                        <a is="sui-list-header">{{ques}}</a>
                                        <div class="ui form">
                                        <div class="field">
                                            <textarea></textarea>
                                        </div>
                                        </div>
                                    </sui-list-content>   
                                </sui-list-item>
                            </sui-list>
                        </sui-card-content>
                    </sui-card>
                </sui-modal-content>
                <sui-modal-actions>
                    <sui-button primary @click.native="toggle2">제출하기</sui-button>
                    <sui-button secondary @click.native="toggle2">취소</sui-button>
                </sui-modal-actions>
            </sui-modal>
            </div>
        </div>
    </v-fragment>
</template>

<script>
export default {
    name: "Applicant",
    methods: {
            loadModal(id) {
                this.modalId = id
                this.modal = !this.modal
            },
            toggle1() {
                this.modal = !this.modal
            },
            checkToggle() {
                this.modal2 = !this.modal2
                this.modal1 = false
            },
    },
    data: () => {
        return {
            modalId: 0,
            modal: false,
            companyInfo: [
                {
                        id: 0,
                        imageSrc: require(`@/../public/images/Samsung.png`),
                        header: `삼성`,
                        desc: `Samsung`,
                        applicants:[
                            {
                                name: '허진호',
                                isChecked: false,
                                answers: [
                                    'ddddd',
                                    'dddddd',
                                    'fdfdfsf'
                                ]
                            },
                            {
                                name: '진창엽',
                                isChecked: false,
                                answers: [
                                    'ddddd',
                                    'dddddd',
                                    'fdfdfsf'
                                ]
                            }
                        ]
                },
                {
                        id: 1,
                        imageSrc: require(`@/../public/images/Naver.jpg`),
                        header: `네이버`,
                        desc: `Naver`,
                        internIds:[0]
                },
                {
                        id: 2,
                        imageSrc: require(`@/../public/images/Kakao.png`),
                        header: `카카오`,
                        desc: `KaKao`,
                        internIds:[2]
                },
            ],
                
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
