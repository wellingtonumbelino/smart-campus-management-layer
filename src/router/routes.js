function lazyLoad(view, path = '') {
  return path ? () => import(`@/views/${path}/${view}.vue`) : () => import(`@/views/${view}.vue`);
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: lazyLoad('HomeView'),
    meta: {
      pageTitle: 'Home',
    },
  },
  {
    path: '/rooms',
    name: 'Rooms',
    children: [
      {
        path: 'list',
        name: 'List Rooms',
        component: lazyLoad('ListRoomsView', 'ListRooms'),
        meta: {
          pageTitle: 'Salas Cadastradas',
        },
      },
      {
        path: 'create',
        name: 'Create Room',
        component: lazyLoad('CreateRoomView', 'CreateRoom'),
        meta: {
          pageTitle: 'Criar Sala',
        },
      },
    ],
  },
];

export default routes;
