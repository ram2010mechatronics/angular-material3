export const menus = [
  {
    name: 'Students',
    icon: 'group',
    open: false,
    link: false,
    sub: [
      {
        name: 'StudentList',
        icon: 'work',
        open: false,
        link: 'students/students-list',
      }, {
        name: 'Enrollment',
        icon: 'local_laundry_service',
        open: false,
        link: 'students/enrollment',
      }, {
        name: 'Contact',
        icon: 'directions',
        open: false,
        link: 'pages/contact'
      }
    ]
  }
];
