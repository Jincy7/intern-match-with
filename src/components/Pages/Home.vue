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
                                    <a is="sui-list-header" v-on:click="loadInternInfoModal(info.id)">{{info.internName}}</a>
                                    <a is="sui-list-description">{{info.companyName}}</a>
                                </sui-list-content>
                            </sui-list-item>
                        </sui-list>
                    </sui-card-content>
                </sui-card>
            </div>
        </div>
        <div>
            <sui-modal v-model="internInfoModal">
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
                    <sui-button primary @click.native="internApplyModalToggle">지원하기</sui-button>
                    <sui-button secondary @click.native="internInfoModalToggle">취소</sui-button>
                </sui-modal-actions>
            </sui-modal>
            <sui-modal v-model="internApplyModal">
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
                    <sui-button primary @click.native="internApplyModalToggle">제출하기</sui-button>
                    <sui-button secondary @click.native="internApplyModalToggle">취소</sui-button>
                </sui-modal-actions>
            </sui-modal>
            <sui-modal v-model="applicantModal">
                <sui-modal-header>{{internInfo[modalId].internName}} 질문</sui-modal-header>
                <sui-modal-content>
                    
                    <sui-card class="apply-list">
                    <sui-card-content>
                        <sui-card-header>지원자 목록</sui-card-header>
                        <sui-card-meta>고객님 기업에 지원한 지원자입니다.</sui-card-meta>
                        <sui-table celled>
                            <sui-table-header>
                            <sui-table-row>
                                <sui-table-header-cell>지원자명</sui-table-header-cell>
                                <sui-table-header-cell>지원 인턴명</sui-table-header-cell>
                                <sui-table-header-cell>상태</sui-table-header-cell>
                            </sui-table-row>
                            </sui-table-header>
                            <sui-table-body>
                            <sui-table-row :key="app" v-for="app in companyInfo[0].applicants">
                                <sui-table-cell>
                                    <a is="sui-list-header" v-on:click="loadApplicantInfo(app.id)">
                                        {{app.name}}
                                    </a>
                                </sui-table-cell>
                                <sui-table-cell>{{app.internName}}</sui-table-cell>
                                <sui-table-cell>
                                    <sui-button v-if="app.state==0" content="대기"/>
                                    <sui-button v-if="app.state==1" positive content="합격"/>
                                    <sui-button v-if="app.state==2" negative content="불합" />
                                </sui-table-cell>
                            </sui-table-row>
                            </sui-table-body>
                        </sui-table>
                    </sui-card-content>
                    </sui-card>
                </sui-modal-content>
                <sui-modal-actions>
                    <sui-button secondary v-on:click="applicantModalToggle">취소</sui-button>
                </sui-modal-actions>
            </sui-modal>
            <sui-modal v-model="applicantInfoModal">
                <sui-modal-header>{{companyInfo[0].applicants[applicantId].internName}} 답변</sui-modal-header>
                <sui-modal-content>
                    <sui-card class="apply-list">
                        <sui-card-content>
                            <sui-list divided relaxed>
                                <sui-list-item :key="ques" v-for="(ques, index) in internInfo[companyInfo[0].applicants[applicantId].internId].questions">
                                    <sui-list-icon size="large" vertical-align="middle"/>
                                    <sui-list-content>
                                        <a is="sui-list-header">{{ques}}</a>
                                        <div class="ui form">
                                        <div class="field">
                                            <textarea v-model="companyInfo[0].applicants[applicantId].answer[index]"></textarea>
                                        </div>
                                        </div>
                                    </sui-list-content>
                                </sui-list-item>
                            </sui-list>
                        </sui-card-content>
                    </sui-card>
                </sui-modal-content>
                <sui-modal-actions>
                    <sui-button positive v-on:click="positiveToggle(applicantId)">합격</sui-button>
                    <sui-button negative v-on:click="negativeToggle(applicantId)">불합격</sui-button>
                    <sui-button secondary v-on:click="applicantInfoToggle">취소</sui-button>
                </sui-modal-actions>
            </sui-modal>
            <sui-modal v-model="internListModal">
                <sui-modal-header>{{studentInfo[0].name}}학생</sui-modal-header>
                <sui-modal-content>
                    
                    <sui-card class="apply-list">
                    <sui-card-content>
                        <sui-card-header>지원자 목록</sui-card-header>
                        <sui-card-meta>고객님이 지원하신 기업 목록입니다.</sui-card-meta>
                        <sui-table celled>
                            <sui-table-header>
                            <sui-table-row>
                                <sui-table-header-cell>회사명</sui-table-header-cell>
                                <sui-table-header-cell>지원 인턴명</sui-table-header-cell>
                                <sui-table-header-cell>상태</sui-table-header-cell>
                            </sui-table-row>
                            </sui-table-header>
                            <sui-table-body>
                            <sui-table-row :key="intern" v-for="intern in studentInfo[0].internList">
                                <sui-table-cell>{{intern.companyName}}</sui-table-cell>
                                <sui-table-cell>{{intern.internName}}</sui-table-cell>
                                <sui-table-cell>
                                    <sui-button v-if="intern.state==0" content="대기"/>
                                    <sui-button v-if="intern.state==1" v-on:click="loadPassModalToggle(intern.id)" positive content="합격"/>
                                    <sui-button v-if="intern.state==2" negative content="불합" />
                                </sui-table-cell>
                            </sui-table-row>
                            </sui-table-body>
                        </sui-table>
                    </sui-card-content>
                    </sui-card>
                </sui-modal-content>
                <sui-modal-actions>
                    <sui-button secondary v-on:click="internListModalToggle">취소</sui-button>
                </sui-modal-actions>
            </sui-modal>
            <sui-modal v-model="passModal">
                <sui-modal-header>{{companyInfo[0].applicants[applicantId].internName}} 결과</sui-modal-header>
                <sui-modal-content>
                    <sui-card class="apply-list">
                        <sui-card-content>
                            <sui-list divided relaxed>
                                <sui-list-item>
                                    <sui-list-icon size="large" vertical-align="middle"/>
                                    <sui-list-content>
                                        <a is="sui-list-header">축하합니다! 합격하셨습니다!!</a>
                                    </sui-list-content>
                                </sui-list-item>
                            </sui-list>
                        </sui-card-content>
                    </sui-card>
                </sui-modal-content>
                <sui-modal-actions>
                    <sui-button secondary v-on:click="passToggle">취소</sui-button>
                </sui-modal-actions>
            </sui-modal>
        </div>
    </v-fragment>
</template>

<script>
    import {mapGetters} from 'vuex'
    import SearchForm from "@/components/UiComponents/SearchForm";

    export default {
        name: "Home",
        components: {
            SearchForm
        },
        computed: {
            ...mapGetters({
                applicantModal: 'getApplicantModal',
                internListModal: 'getInternListModal'
            })
        },
        /*eslint-disable*/
        methods : {
            filterApplyList: function (query) {
                // TODO : 진호형이 만든 인턴 공고 데이터 객체에서 데이터 검색해서 화면에 다시 그리기
                // 데이터 객체에 isShow 값 만들어서 해당 값으로 v-show 걸어주기
                // 만약 쿼리가 비어있는 경우에는 모든 값
                // internInfo.foreach(el = > {el.isShow = false});
                // internInfo.filter((el) => el.name.includes(query)).foreach(el = > {el.isShow = true});
                console.log(query);
            },
            loadInternInfoModal(id) {
                this.modalId = id;
                this.internInfoModal = !this.internInfoModal;
            },
            internInfoModalToggle() {
                this.internInfoModal = !this.internInfoModal;
            },
            internApplyModalToggle() {
                this.internApplyModal = !this.internApplyModal;
                this.internInfoModal = false;
            },
            applicantModalToggle: function () {
                this.$store.commit('updateApplicantModal', {
                    applicantModal: !this.applicantModal
                });
            },
            internListModalToggle: function () {
                this.$store.commit('updateInternListModal', {
                    internListModal: !this.internListModal
                });
            },
            loadApplicantInfo(id) {
                this.applicantId = id;
                this.applicantInfoModal = !this.applicantInfoModal; 
            },
            positiveToggle(id){
                this.companyInfo[0].applicants[id].state = 1;
                this.applicantInfoModal = !this.applicantInfoModal; 
            },
            negativeToggle(id){
                this.companyInfo[0].applicants[id].state = 2;
                this.applicantInfoModal = !this.applicantInfoModal;
            },
            applicantInfoToggle() {
                this.applicantInfoModal = !this.applicantInfoModal; 
            },
            loadPassModalToggle(id) {
                this.passModal = !this.passModal;
                this.internId = id; 
            },
            passToggle(){
                this.passModal = !this.passModal;
            }
        },
        created() {
            this.$store.subscribe((mutation, state) => {
                if(mutation.type === 'updateSearchQuery') {
                    this.filterApplyList(state.searchQuery);
                    console.log(`Store Status : `,state);
                }
            })
        },
        data: () => {
            return {
                modalId: 0,
                applicantId: 0,
                internId:0,
                internInfoModal: false,
                internApplyModal: false,
                applicantInfoModal: false,
                passModal: false,
                studentInfo: [
                    {
                        id: 0,
                        name: '허진호',
                        internList:[
                            {
                                internId: 0,
                                companyName: 'Naver',
                                internName:'네이버 클라우드 운영팀 인턴',
                                state: 0
                            },
                            {
                                internId: 1,
                                companyName: '삼성전자',
                                internName:'삼성전자 운영팀 인턴',
                                state: 1
                            },
                            {
                                internId: 2,
                                companyName: '카카오',
                                internName:'카카오 비즈니스 플랫폼 인턴',
                                state: 2
                            },
                        ]
                    },

                ],
                companyInfo: [
                    {
                        id: 0,
                        imageSrc: require(`@/../public/images/Samsung.png`),
                        header: `삼성`,
                        desc: `Samsung`,
                        applicants:[
                            {
                                id: 0,
                                name: '허진호',
                                internName:'네이버 클라우드 운영팀 인턴',
                                internId: 0,
                                state: 2,
                                answer:
                                [
                                    'ddf',
                                    'dfsf',
                                    'dfseff'
                                ]
                            },
                            {
                                id: 1,
                                name: '진창엽',
                                internName:'네이버 클라우드 운영팀 인턴',
                                internId: 0,
                                state: 1,
                                answer:
                                [
                                    'ddf',
                                    'dfsf',
                                    'dfseff'
                                ]
                            },
                            {
                                id: 2,
                                name: '김정호',
                                internName:'네이버 클라우드 운영팀 인턴',
                                internId: 0,
                                state: 0,
                                answer:
                                [
                                    'ddf',
                                    'dfsf',
                                    'dfseff'
                                ]
                            },
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
                    {
                        id: 3,
                        imageSrc: require(`@/../public/images/Apple.png`),
                        header: `Apple`,
                        desc: `Apple`,
                        internIds:[]
                    },
                    {
                        id: 4,
                        imageSrc: require(`@/../public/images/Google.jpg`),
                        header: `구글`,
                        desc: `Google`,
                        internIds:[]
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
