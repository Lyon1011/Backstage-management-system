const rules = {
    number: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        {
            pattern: /^1[3-9]\d{9}$/,
            message: '请输入正确的手机号',
            tigger: 'change'
        }
    ],
    code: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        { min: 6, max: 6, message: '请输入6位验证码', trigger: 'blur' }
    ]
}

export default rules
