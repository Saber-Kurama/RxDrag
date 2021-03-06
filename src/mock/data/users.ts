var users = [
  {
    id:1,
    login_name:'admin',
    password:'admin',
    name:'超级管理员',
    email:'super@drag.fit',
    is_supper:true,
    //roles:'',
    //forbid:'<span style="background:#eee; border-radius:12px; padding:6px;">正常</span>',
    created_at:'2019-02-22 10:52:44',
  },
  {
    id:2,
    login_name:'demo',
    password:'demo',
    name:'演示账号',
    email:'demo@drag.fit',
    roleNames:'管理员, 经理',
    roleIds:[1,2],
    is_demo:true,
    avatar:{
      id:'8',
      thumbnail: '/static/images/grid-list/plant.jpg',
      title: 'Water plant',
      author: 'BkrmadtyaKarki',
    },
    //forbid:'<span style="background:#eee; border-radius:12px; padding:6px;">正常</span>',
    created_at:'2019-02-22 13:30:49',
  },
  {
    id:3,
    login_name:'test',
    password:'test',
    name:'测试',
    email:'test@drag.fit',
    roleNames:'测试员',
    roleIds:[3],
    forbid:true,
    created_at:'2019-02-22 13:31:23',
  }
]

export default users;