<template>
    <div class="login-box">
        <div class="mask"></div>
        <h2>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                data-v-ea893728=""
                stroke="#1f005c"
                stroke-width="2rem"
            >
                <!-- <defs>
                    <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="2%" stop-color="#1f005c" />
                        <stop offset="15%" stop-color="#6d0061" />
                        <stop offset="30%" stop-color="#a51e5f" />
                        <stop offset="60%" stop-color="#cf4f5c" />
                        <stop offset="80%" stop-color="#ed815e" />
                        <stop offset="100%" stop-color="#ffb56b" />
                    </linearGradient>
                </defs> -->
                <path
                    d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
                    fill="url(#gradient)"
                ></path>
            </svg>
            <span>Login</span>
        </h2>
        <LoginPanel />
    </div>
</template>

<script lang="ts" name="Login" setup>
    import LoginPanel from './cpns/LoginPanel.vue'
</script>

<style scoped lang="less">
    .login-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        flex-direction: column;
        padding: 0 10rem;
        box-sizing: border-box;
        z-index: 0;

        background-image: linear-gradient(
            125deg,
            // #f44336,
            // #e91e63,
            // #9c27b0,
            // #3f51b5,
            // #2196f3,
            #1f005c,
            #3b046b,
            #5b097a,
            #801088,
            #971787,
            #a6207b,
            #b5296d,
            #c4345d,
            #d3404d,
            #e15d4d,
            #f0895c,
            #ffb56b
        );
        background-size: 400%;
        animation: bganimation 15s infinite;

        @keyframes bganimation {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }

        .mask {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            background: #ffffff7b;
            z-index: 0;
        }

        h2 {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2.5rem;
            margin: 0 0 1rem;
            height: 3rem;
            z-index: 999;
            span {
                height: 100%;
                // background: linear-gradient(
                //     90deg,
                //     #1f005c 20%,
                //     #6d0061,
                //     #a51e5f,
                //     #cf4f5c,
                //     #ed815e,
                //     #ffb56b
                // );
                font-family: 'Poppins';
                // -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                // animation: gradient-animation 5s ease infinite;
                -webkit-text-stroke: 1px #1f005c;
            }
            @keyframes gradient-animation {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
            }

            svg {
                width: 2.5rem;
                height: 100%;
                margin-right: 0.5rem;
                // -webkit-text-stroke: 1px #1f005c;
            }
        }
    }
</style>
