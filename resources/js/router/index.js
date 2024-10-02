import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { isUserLoggedIn } from './utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ℹ️ We are redirecting to different pages based on role.
    // NOTE: Role is just for UI purposes. ACL is based on abilities.
    {
      path: '/',
      redirect: to => {
        const userData = JSON.parse(localStorage.getItem('userData') || '{}')
        const userRole = (userData && userData.role) ? userData.role : null
        if (userRole === 'admin')
          return { name: 'dashboards' }
          if (userRole === 'recruitment')
          return { name: 'dashboards' }
          if (userRole === 'account')
          return { name: 'dashboards' }
          if (userRole === 'compliances')
          return { name: 'dashboards' }


        return { name: 'login', query: to.query }
      },
    },
    {
      path: '/pages/user-profile',
      redirect: () => ({ name: 'pages-user-profile-tab', params: { tab: 'profile' } }),
    },
    {
      path: '/pages/account-settings',
      redirect: () => ({ name: 'pages-account-settings-tab', params: { tab: 'account' } }),
    },
    ...setupLayouts(routes),
  ],
})




// Handle beforeunload event for logout and warning
// window.addEventListener('beforeunload', (event) => {
//   const isLoggedIn = isUserLoggedIn()

//   if (isLoggedIn) {
//     // Clear data from local storage (you can modify this as needed)
//     localStorage.removeItem('userData')
//     localStorage.removeItem('userAbilities')
//     localStorage.removeItem('accessToken')

//     // Provide a custom warning message
//     event.preventDefault()
//     event.returnValue = 'You are currently logged in. Are you sure you want to leave?'
//   }
// })


// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach((to, from, next) => {


  const userData = JSON.parse(localStorage.getItem('userData') || '{}')
  const userRole = userData.role || null
  const isLoggedIn = isUserLoggedIn()

  if (to.name === 'login' || to.name === 'not-authorized') {
    // Allow access to login and not-authorized pages without redirection
    next()
  } else if (!isLoggedIn) {
    // Redirect to login if not logged in
    next({ name: 'login', query: { to: to.name !== 'index' ? to.fullPath : undefined } })
  } else if (userRole === 'admin') {
    // Allow access to all pages for admin
    next()
  } else if (userRole === 'account') {
    // Restrict access for account role to specific pages
    const allowedPages = ['apps-paymentamount', 'apps-concern','dashboards','apps-allpayment','apps-refundrequest','apps-refundpayment']
    if (allowedPages.includes(to.name)) {
      next() // Allow access to allowed pages
     }
    else {
      // Redirect to not-authorized for unauthorized pages
      next({ name: 'not-authorized' })
    }
  }  else if (userRole === 'recruitment') {
    // Restrict access for account role to specific pages
    const allowedPages = ['dashboards','apps-skill', 'apps-manage_prefered_job_skills','dashboards','apps-job','apps-users','apps-addemployee',
    'apps-concern','apps-state','apps-city','apps-jobapplication','apps-acc_deactivation','apps-salaryslip','apps-application_reports','apps-user_reports','apps-employees_report','apps-non_applicant_user_report']
    if (allowedPages.includes(to.name)) {
      next() // Allow access to allowed pages
     }
    else {
      // Redirect to not-authorized for unauthorized pages
      next({ name: 'not-authorized' })
    }
  }
  else if (userRole === 'compliances') {
    // Restrict access for account role to specific pages
    const allowedPages = ['dashboards','apps-concern','apps-salaryslip']
    if (allowedPages.includes(to.name)) {
      next() // Allow access to allowed pages
     }
    else {
      // Redirect to not-authorized for unauthorized pages
      next({ name: 'not-authorized' })
    }
  }


  else {
    // Handle other roles or unauthorized access
    next({ name: 'not-authorized' })
  }
})




export default router