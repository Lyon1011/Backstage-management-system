const rules = {
    name: [
        {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
        },
        {
            rule: /^[a-zA-Z0-9]{4-16}$/,
            message: '用户名长度在4-16之间',
            trigger: 'change'
        }
    ],
    password: [
        {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
        },
        {
            rule: /^[a-zA-Z0-9]{8-16}$/,
            message: '密码长度在8-16之间',
            trigger: 'change'
        }
    ]
}
export default rules
