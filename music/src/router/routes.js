export default [
  {
    path: '/',
    name: 'concerthall',
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: '/concerthall',
        name: 'concerthall',
        component: () => import('@/views/concerthall/concertHall.vue')
      },
      {
        path: '/find',
        name: 'find',
        component: () => import('@/views/find/find.vue')
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('@/views/me/me.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  }
]