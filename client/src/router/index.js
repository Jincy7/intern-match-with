import Vue from 'vue'
import Router from 'vue-router'
import BaseLayout from "@/components/Layout/BaseLayout";
import Home from "@/components/Pages/Home";
import Applicant from "@/components/Pages/Applicant";

Vue.use(Router)

export default new Router({
    mode: `history`,
    routes: [
        {
            path : ``,
            name : `BaseLayout`,
            component: BaseLayout,
            redirect: `home`,
            children: [
                {
                    path: `home`,
                    name: `Home`,
                    component: Home
                },
                {
                    path: `companies/:id`,
                    name: `Info`,
                    component: Applicant
                }
            ]
        }
    ]
})
