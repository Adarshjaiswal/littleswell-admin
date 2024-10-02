const userData = JSON.parse(localStorage.getItem('userData') || '{}');
const userRole = userData && userData.role ? userData.role : null;
console.log("=====",userData, userRole);


let navigation = [];

if (userRole === 'admin') {
  navigation = [
    // { heading: 'Apps & Pages' },
    // {
    //   title: 'Manage Role',
    //   icon: { icon: 'bx-user' },
    //   to: 'apps-role',
    // },
    // {
    //   title: 'Manage Skills',
    //   icon: { icon: 'bx-certification' },
    //   // to: 'apps-skill',
    //   children: [
    //     // { title: 'Job-Skill', to: 'apps-skill' },
    //     // { title: 'Prefered-Job-Skill', to: 'apps-manage_prefered_job_skills' },

    //   ],
    // },
    {
      title: 'Manage Vaccine',
      icon: { icon: 'bx-doughnut-chart' },
      to: 'apps-vaccine',
    },



    {
      title: 'Manage Users',
      icon: { icon: 'bxs-user-detail' },
      children: [
        { title: 'Manage Users', to: 'apps-users' },
       

      ],
    },
    // {
    //   title: 'Manage Concerns',
    //   icon: { icon: 'bxs-coupon' },
    //   to: 'apps-concern',
    // },

    //  {
    //   title: 'Manage Locations',
    //   icon: { icon: 'bx-current-location' },
    //   children: [
    //     { title: 'Manage State', to: 'apps-state' },
    //     { title: 'Manage City', to: 'apps-city' },
    //   ],
    // },

    // {
    //   title: 'Manage Candidates',
    //   icon: { icon: 'bxs-food-menu' },
    //   to: 'apps-jobapplication',
    // },

    {
      title: 'Manage Acc. Deactivation',
      icon: { icon: 'bxs-user-x' },
      to: 'apps-acc_deactivation',
    },
    // {
    //   title: 'Salary Slip',
    //   icon: { icon: 'bxs-receipt' },
    //   to: 'apps-salaryslip',
    // },

    {
      title: 'Manage Payments',
      icon: { icon: 'bx-rupee' },
      children: [
        // { title: 'Manage Amount', to: 'apps-paymentamount' },
        // { title: 'All Payments', to: 'apps-allpayment' },
        // { title: 'Refund Requests', to: 'apps-refundrequest' },
        // { title: 'Refund payments', to: 'apps-refundpayment' },
      ],
    },

    {
      title: 'Manage Reports',
      icon: { icon: 'bxs-report' },
      children: [
        // { title: 'Application Reports', to: 'apps-application_reports' },
        // { title: 'User Reports', to: 'apps-user_reports' },
        // { title: 'Employees Report', to: 'apps-employees_report' },
        // { title: 'Non Applicant Report', to: 'apps-non_applicant_user_report' },
      ],
    },
  ];
} else  if (userRole === 'recruitment') {
  navigation = [
    { heading: 'Apps & Pages' },
    {
      title: 'Manage Skills',
      icon: { icon: 'bx-certification' },
      // to: 'apps-skill',
      children: [
        { title: 'Job-Skill', to: 'apps-skill' },
        { title: 'Prefered-Job-Skill', to: 'apps-manage_prefered_job_skills' },

      ],
    },
    {
      title: 'Manage Job',
      icon: { icon: 'bx-doughnut-chart' },
      to: 'apps-job',
    },

    {
      title: 'Manage Users',
      icon: { icon: 'bxs-user-detail' },
      children: [
        { title: 'Manage Users', to: 'apps-users' },
        { title: 'Add Bulk Employee', to: 'apps-addemployee' },

      ],
    },
    {
      title: 'Manage Concerns',
      icon: { icon: 'bxs-coupon' },
      to: 'apps-concern',
    },
     {
      title: 'Manage Locations',
      icon: { icon: 'bx-current-location' },
      children: [
        { title: 'Manage State', to: 'apps-state' },
        { title: 'Manage City', to: 'apps-city' },
      ],
    },
    {
      title: 'Manage Candidates',
      icon: { icon: 'bxs-food-menu' },
      to: 'apps-jobapplication',
    },
    {
      title: 'Manage Acc. Deactivation',
      icon: { icon: 'bxs-user-x' },
      to: 'apps-acc_deactivation',
    },
    {
      title: 'Salary Slip',
      icon: { icon: 'bxs-receipt' },
      to: 'apps-salaryslip',
    },
    {
      title: 'Manage Reports',
      icon: { icon: 'bxs-report' },
      children: [
        { title: 'Application Reports', to: 'apps-application_reports' },
        { title: 'User Reports', to: 'apps-user_reports' },
        { title: 'Employees Report', to: 'apps-employees_report' },
        { title: 'Non Applicant Report', to: 'apps-non_applicant_user_report' },
      ],
    },
  ];

}else if(userRole ==='account'){
  navigation = [
    { heading: 'Apps & Pages' },
    {
      title: 'Manage Concerns',
      icon: { icon: 'bxs-coupon' },
      to: 'apps-concern',
    },
    {
      title: 'Manage Payments',
      icon: { icon: 'bx-rupee' },
      children: [
        { title: 'Manage Amount', to: 'apps-paymentamount' },
        { title: 'All Payments', to: 'apps-allpayment' },
        { title: 'Refund Requests', to: 'apps-refundrequest' },
        { title: 'Refund payments', to: 'apps-refundpayment' },
      ],
    },
  ];



}
else if(userRole ==='compliances'){
  navigation = [
    { heading: 'Apps & Pages' },
    {
      title: 'Manage Concerns',
      icon: { icon: 'bxs-coupon' },
      to: 'apps-concern',
    },
    {
      title: 'Salary Slip',
      icon: { icon: 'bxs-receipt' },
      to: 'apps-salaryslip',
    },

  ];



}

export default navigation;
