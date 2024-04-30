interface formItemType {
    type: 'password' | 'input' | 'select' | 'datepicker'
    label: string
    placeholder?: any
    rules?: any[]
    options?: any[]
    otherOptions?: any
    isHidden?: boolean
    field: string
}

interface formType {
    formItemOptions: formItemType[]
    layoutStyle?: object
    formItemStyle?: object
    labelWidth?: string
}

export { formItemType, formType }
