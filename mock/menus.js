import Mock, { Random } from 'mockjs';

const subMenus = () => {
    let result = [];
    for (let i = 0; i < 20; i++) {
        result.push(Mock.mock(
            Random.first()
        ));
    }
    return result;
};
const menuList = () => {
    let result = [];
    for (let i = 0; i < 10; i++) {
        result.push(Mock.mock(
            {
                type: Random.first(),
                name: Random.first(),
                child: subMenus()
            }
        ));
    }
    return result;
};

export default [
    {
        url: '/api/menuList',
        method: 'post',
        response: ({ body }) => {
            return menuList;
        }
    },
];

