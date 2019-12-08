<template>
    <v-fragment>
        <div class="dimmer"></div>
        <div>
            <header>
                <h1>참여중인 기업</h1>
               <sui-card-group :items-per-row="5">
                   <sui-card :key="company" v-for="company in companyInfo">
                       <sui-image :src="company.imageSrc" size="large"/>
                       <sui-card-content>
                           <sui-card-header>{{company.header}}</sui-card-header>
                           <sui-card-meta>{{company.desc}}</sui-card-meta>
                       </sui-card-content>
                   </sui-card>
                </sui-card-group>
            </header>
            <div class="home-container">
                <search-form></search-form>
                <sui-card class="apply-list">
                    <sui-card-content>
                        <sui-card-header>진행중인 공고 목록</sui-card-header>
                        <sui-card-meta>기업에서 진행중인 인턴 공고입니다!</sui-card-meta>
                        <sui-list divided relaxed>
                            <sui-list-item v-show="info.isShow" :key="info" v-for="info in internInfo">
                                <sui-image :src="info.imageSrc" size="mini"/>
                                <sui-list-content>
                                    <a is="sui-list-header" v-on:click="loadModal1(info.id)">{{info.internName}}</a>
                                    <a is="sui-list-description">{{info.companyName}}</a>
                                </sui-list-content>
                            </sui-list-item>
                        </sui-list>
                    </sui-card-content>
                </sui-card>
            </div>
        </div>
        <div>
            <sui-modal v-model="modal1">
                <sui-modal-header>{{internInfo[modalId].internName}}</sui-modal-header>
                <sui-modal-content>
                    <sui-card class="apply-list">
                        <sui-card-content>
                            <sui-list divided relaxed>
                                <sui-list-item :key="desc" v-for="desc in internInfo[modalId].descriptions">
                                    <sui-list-icon size="large" vertical-align="middle"/>
                                    <sui-list-content>
                                        <a is="sui-list-header">{{desc.name}}</a>
                                        <sui-list bulleted >
                                            <sui-list-item :key="item" v-for="item in desc.list">{{item}}</sui-list-item>
                                        </sui-list>
                                    </sui-list-content>
                                </sui-list-item>
                            </sui-list>
                        </sui-card-content>
                    </sui-card>
                </sui-modal-content>
                <sui-modal-actions>
                    <sui-button primary @click.native="toggle2">지원하기</sui-button>
                    <sui-button secondary @click.native="toggle1">취소</sui-button>
                </sui-modal-actions>
            </sui-modal>
            <sui-modal v-model="modal2">
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
                modalId: 0,
                modal1 : false,
                modal2: false,
                companyInfo: [
                    {
                        id: 0,
                        imageSrc: require(`@/../public/images/Samsung.png`),
                        header: `삼성`,
                        desc: `Samsung`,
                        internIds:[1]
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
                    {
                        id: 2,
                        imageSrc: require(`@/../public/images/Kakao.png`),
                        header: `카카오`,
                        desc: `KaKao`,
                        internIds:[2]
                    },
                ],
                internInfo: [
                    {
                        id: 0,
                        isShow: true,
                        imageSrc: require(`@/../public/images/Naver.jpg`),
                        internName: `네이버 클라우드 운영팀 인턴`,
                        companyName: `네이버`,
                        questions: [
                            `SW개발 관심분야와 기술 실력을 자랑할 수 있는 프로젝트가 있다면 설명해주세요. 여럿이 진행한 프로젝트의 경우 본인이 담당한 기술 분야를 명확히 적어주세요. 학교 과제는 제외입니다.`,
                            `SW개발 실력을 보여줄 수 있는 대회 수상경력이 있다면 알려주세요.`,
                            `SW개발과 관련된 대외활동을 기재해주시고, 해당 활동을 통해 진행한 프로젝트에 대한 설명과 담당한 기술 부분을 알려주세요.예시) 부스트코스, 동아리 활동(동아리 명 포함), SW 마에스트로 등`
                        ],
                        descriptions: [
                            {
                                name: '담당업무',
                                list : [
                                    `북미, 남미, 유럽 등 글로벌 사용자 데이터 분석 및 조사를 기초로 글로벌 웹툰 서비스의 User Scenario 발굴/개선`,
                                    `지역별 사용자 니즈를 분석하고 우선순위 및 feature를 정의`,
                                    `서비스 적용 과제의 Backend/Frontend 상세설계 (Task Flow & Wireframing) 작성`
                                ]
                            },
                            {
                                name: '자격요건',
                                list : [
                                    `PC웹 / 모바일웹 / 모바일앱 서비스 기획/UX 설계 경력 4년 이상`,
                                    `데이터에 기반한 논리적인 사고를 바탕으로 사용자와 서비스에 대한 인사이트를 끌어낼 수 있는 분`,
                                    `현업 부서와의 커뮤니케이션을 통해, 의견 차이를 조정하고 결과물에 대한 시너지를 이끌어낼 수 있는 분`
                                ]

                            },
                            {
                                name: '우대사항',
                                list : [
                                    `기본적인 만화/장르소설 콘텐츠 및 서비스에 대한 이해도가 높은 분(적절한 '덕력'은 플러스 요소)`,
                                    `유료 구매 및 결제가 포함된 서비스의 Backend/Frontend 상세설계 진행 및 오픈 경험이 있는 분`,
                                    `웹툰/웹소설, 영화, 뮤직, 책, 공연 등 다양한 콘텐츠를 추천하고 제공하는 서비스의 상세설계 진행 및 오픈 경험이 있는 분`
                                ]

                            },
                            {
                                name: '전형절차 및 기타사항',
                                list : [
                                    `서류전형  ▶  1차면접  ▶  2차면접 ▶ 입사`,
                                    `접수기간: 2019.11.18(월) ~ 2019.12.08(일) 23:59`,
                                    `지원서 내용 중 허위사실이 있는 경우에는 합격이 취소될 수 있습니다.`
                                ]

                            },
                            {
                                name: '회사 및 조직소개',
                                list : [
                                    `네이버웹툰 주식회사는 2017년 5월 독립법인으로 분사했습니다`,
                                    `웹툰을 정말 사랑하는 젊은 직원들이 함께 모여 열정적이고 도전적으로 재미있게 일하는 조직문화를 자랑합니다. `,
                                    `국내는 물론 글로벌로 무섭게 뻗어가며, 글로벌 콘텐츠 비즈니스 회사로서 날로 성장해가고 있습니다.`
                                ]

                            }
                        ],
                        applicants: [

                        ]
                    },
                    {
                        id: 1,
                        isShow: true,
                        imageSrc: require(`@/../public/images/Samsung.png`),
                        internName: `삼성전자 운영팀 인턴`,
                        companyName: `삼성전자`,
                        questions: [
                            `SW개발 관심분야와 기술 실력을 자랑할 수 있는 프로젝트가 있다면 설명해주세요. 여럿이 진행한 프로젝트의 경우 본인이 담당한 기술 분야를 명확히 적어주세요. 학교 과제는 제외입니다.`,
                            `SW개발 실력을 보여줄 수 있는 대회 수상경력이 있다면 알려주세요.`,
                            `SW개발과 관련된 대외활동을 기재해주시고, 해당 활동을 통해 진행한 프로젝트에 대한 설명과 담당한 기술 부분을 알려주세요.예시) 부스트코스, 동아리 활동(동아리 명 포함), SW 마에스트로 등`
                        ],
                        descriptions: [
                            {
                                name: '담당업무',
                                list : [
                                    `북미, 남미, 유럽 등 글로벌 사용자 데이터 분석 및 조사를 기초로 글로벌 웹툰 서비스의 User Scenario 발굴/개선`,
                                    `지역별 사용자 니즈를 분석하고 우선순위 및 feature를 정의`,
                                    `서비스 적용 과제의 Backend/Frontend 상세설계 (Task Flow & Wireframing) 작성`
                                ]
                            },
                            {
                                name: '자격요건',
                                list : [
                                    `PC웹 / 모바일웹 / 모바일앱 서비스 기획/UX 설계 경력 4년 이상`,
                                    `데이터에 기반한 논리적인 사고를 바탕으로 사용자와 서비스에 대한 인사이트를 끌어낼 수 있는 분`,
                                    `현업 부서와의 커뮤니케이션을 통해, 의견 차이를 조정하고 결과물에 대한 시너지를 이끌어낼 수 있는 분`
                                ]

                            },
                            {
                                name: '우대사항',
                                list : [
                                    `기본적인 만화/장르소설 콘텐츠 및 서비스에 대한 이해도가 높은 분(적절한 '덕력'은 플러스 요소)`,
                                    `유료 구매 및 결제가 포함된 서비스의 Backend/Frontend 상세설계 진행 및 오픈 경험이 있는 분`,
                                    `웹툰/웹소설, 영화, 뮤직, 책, 공연 등 다양한 콘텐츠를 추천하고 제공하는 서비스의 상세설계 진행 및 오픈 경험이 있는 분`
                                ]

                            },
                            {
                                name: '전형절차 및 기타사항',
                                list : [
                                    `서류전형  ▶  1차면접  ▶  2차면접 ▶ 입사`,
                                    `접수기간: 2019.11.18(월) ~ 2019.12.08(일) 23:59`,
                                    `지원서 내용 중 허위사실이 있는 경우에는 합격이 취소될 수 있습니다.`
                                ]

                            },
                            {
                                name: '회사 및 조직소개',
                                list : [
                                    `네이버웹툰 주식회사는 2017년 5월 독립법인으로 분사했습니다`,
                                    `웹툰을 정말 사랑하는 젊은 직원들이 함께 모여 열정적이고 도전적으로 재미있게 일하는 조직문화를 자랑합니다. `,
                                    `국내는 물론 글로벌로 무섭게 뻗어가며, 글로벌 콘텐츠 비즈니스 회사로서 날로 성장해가고 있습니다.`
                                ]

                            }
                        ]
                    },
                    {
                        id: 2,
                        isShow: true,
                        imageSrc: require(`@/../public/images/Kakao.png`),
                        internName: `카카오 비즈니스 플랫폼 인턴`,
                        companyName: `카카오`,
                        questions: [
                            `SW개발 관심분야와 기술 실력을 자랑할 수 있는 프로젝트가 있다면 설명해주세요. 여럿이 진행한 프로젝트의 경우 본인이 담당한 기술 분야를 명확히 적어주세요. 학교 과제는 제외입니다.`,
                            `SW개발 실력을 보여줄 수 있는 대회 수상경력이 있다면 알려주세요.`,
                            `SW개발과 관련된 대외활동을 기재해주시고, 해당 활동을 통해 진행한 프로젝트에 대한 설명과 담당한 기술 부분을 알려주세요.예시) 부스트코스, 동아리 활동(동아리 명 포함), SW 마에스트로 등`
                        ],
                        descriptions: [
                            {
                                name: '담당업무',
                                list : [
                                    `북미, 남미, 유럽 등 글로벌 사용자 데이터 분석 및 조사를 기초로 글로벌 웹툰 서비스의 User Scenario 발굴/개선`,
                                    `지역별 사용자 니즈를 분석하고 우선순위 및 feature를 정의`,
                                    `서비스 적용 과제의 Backend/Frontend 상세설계 (Task Flow & Wireframing) 작성`
                                ]
                            },
                            {
                                name: '자격요건',
                                list : [
                                    `PC웹 / 모바일웹 / 모바일앱 서비스 기획/UX 설계 경력 4년 이상`,
                                    `데이터에 기반한 논리적인 사고를 바탕으로 사용자와 서비스에 대한 인사이트를 끌어낼 수 있는 분`,
                                    `현업 부서와의 커뮤니케이션을 통해, 의견 차이를 조정하고 결과물에 대한 시너지를 이끌어낼 수 있는 분`
                                ]

                            },
                            {
                                name: '우대사항',
                                list : [
                                    `기본적인 만화/장르소설 콘텐츠 및 서비스에 대한 이해도가 높은 분(적절한 '덕력'은 플러스 요소)`,
                                    `유료 구매 및 결제가 포함된 서비스의 Backend/Frontend 상세설계 진행 및 오픈 경험이 있는 분`,
                                    `웹툰/웹소설, 영화, 뮤직, 책, 공연 등 다양한 콘텐츠를 추천하고 제공하는 서비스의 상세설계 진행 및 오픈 경험이 있는 분`
                                ]

                            },
                            {
                                name: '전형절차 및 기타사항',
                                list : [
                                    `서류전형  ▶  1차면접  ▶  2차면접 ▶ 입사`,
                                    `접수기간: 2019.11.18(월) ~ 2019.12.08(일) 23:59`,
                                    `지원서 내용 중 허위사실이 있는 경우에는 합격이 취소될 수 있습니다.`
                                ]

                            },
                            {
                                name: '회사 및 조직소개',
                                list : [
                                    `네이버웹툰 주식회사는 2017년 5월 독립법인으로 분사했습니다`,
                                    `웹툰을 정말 사랑하는 젊은 직원들이 함께 모여 열정적이고 도전적으로 재미있게 일하는 조직문화를 자랑합니다. `,
                                    `국내는 물론 글로벌로 무섭게 뻗어가며, 글로벌 콘텐츠 비즈니스 회사로서 날로 성장해가고 있습니다.`
                                ]

                            }
                        ]
                    }
                ],
                studentInfo: [
                    {
                        id: 0,
                        name: '허진호',
                        companyList:[
                            {
                                id:0,
                                answer:[
                                    'ddf',
                                    'dfsf',
                                    'dfseff'
                                ]
                            },
                        ]
                    },

                ]
            }
        },
        /*eslint-disable*/
        methods : {
            filterApplyList: function (query) {
                this.internInfo
                    .forEach(el => {el.isShow = false});
                this.internInfo
                    .filter((el) => el.companyName.includes(query))
                    .forEach(el => {el.isShow = true});
            },
            loadModal1(id) {
                this.modalId = id
                this.modal1 = !this.modal1
            },
            toggle1() {
                this.modal1 = !this.modal1
            },
            toggle2() {
                this.modal2 = !this.modal2
                this.modal1 = false
            },
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
        position: fixed;
        top: 60px;
        width: 100%;
        height: calc(100vh - 60px);
        /*background-color: rgba(52, 73, 94, 0.3);*/
        background-color: rgba(0, 0, 0, 0.68);
        z-index: -1;
    }

    .home-container {
        padding: 2em 370px;
    }

    .apply-list {
        width: 100% !important;
    }
</style>
