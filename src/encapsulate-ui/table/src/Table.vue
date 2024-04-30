<template>
    <div class="table-box">
        <div class="header">
            <slot name="header">
                {{ tableTitle }}
            </slot>
        </div>
        <el-table :data="usersList" stripe style="width: 100%">
            <el-table-column type="selection" align="center" width="60">
            </el-table-column>
            <el-table-column
                type="index"
                label="序号"
                align="center"
                width="80"
            ></el-table-column>
            <template v-for="prop of propsList">
                <el-table-column
                    :prop="prop.prop"
                    :label="prop.label"
                    min-width="180"
                    align="center"
                >
                    <template #default="scope">
                        <slot :name="prop.slotName" :row="scope.row">
                            {{ scope.row[prop.prop] }}
                        </slot>
                    </template>
                </el-table-column>
            </template>
        </el-table>
        <div class="footer">
            <slot name="footer"> </slot>
        </div>
    </div>
</template>

<script lang="ts" name="EncapsulateTable" setup>
    import { defineProps, toRefs } from 'vue'
    const props = defineProps({
        usersList: Array,
        propsList: Array,
        tableTitle: String
    })
    const { usersList, propsList } = toRefs(props)
</script>

<style scoped>
    .table-box {
        background-color: #fff;
        padding: 1rem 0;

        .footer {
            margin-top: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
