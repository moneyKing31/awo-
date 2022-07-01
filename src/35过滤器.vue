<template>
    <div>
        <p>国内网站粉丝数量：{{ fens | fens1 }}</p>
        <p>国外网站粉丝数量：{{ fens | fens2 }}</p>
        <br><br>
        <p>时间：{{ time | time1('-') }}</p>
        <p>时间：{{ time | time1('/') }}</p>
        <p>{{ time }}</p>

    </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            fens: '123141423441.000',
            time: new Date().getTime(),
        }
    },
    filters: {
        fens1(value) {
            // if (!value) return ''
            return (value / 1000).toFixed(3) + '千'
        },
        fens2(value) {
            // if (!value) return ''
            return (value / 10000).toFixed(4) + '万'
        },
        time1(val, va) {
            return moment(val).format(`YYYY ${va} MM ${va} DD`)
        }
    }
}
</script>

<style>
</style>