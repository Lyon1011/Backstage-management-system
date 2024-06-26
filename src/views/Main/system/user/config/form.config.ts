import { formType } from '@/encapsulate-ui/form/types'

const formItemConfig: formType = {
    formItemOptions: [
        {
            type: 'input',
            label: 'id',
            placeholder: '请输入id',
            field: 'id'
        },
        {
            type: 'input',
            label: '用户名',
            placeholder: '请输入用户名',
            field: 'name'
        },
        {
            type: 'input',
            label: '真实姓名',
            placeholder: '请输入真实姓名',
            field: 'realname'
        },
        {
            type: 'input',
            label: '电话号码',
            placeholder: '请输入电话号码',
            field: 'cellphone'
        },
        {
            type: 'select',
            label: '用户状态',
            placeholder: '请选择用户状态',
            options: [
                { title: '启用', value: 1 },
                { title: '禁用', value: 0 }
            ],
            field: 'enable'
        },
        {
            type: 'datepicker',
            label: '创建时间',
            otherOptions: {
                startPlaceholder: '开始时间',
                endPlaceholder: '结束时间',
                type: 'daterange'
            },
            field: 'createAt'
        }
    ]
}

export default formItemConfig
