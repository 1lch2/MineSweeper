<template>
  <div id="timer">
      <span>{{time}}</span>s
  </div>
</template>

<script>
import store from '../store';

export default {
    name: "Timer",
    data() {
        this.timer = null;

        return {
            time: 0
        }
    },
    methods: {
        startTimer() {
            let seconds = 0;
            // let that = this;
            this.timer = setInterval(() => {
                this.time = seconds++;
                console.log("time: " + this.time);
            }, 1000)
            store.commit("setTimer", true);
        },
        stopTimer() {
            clearInterval(this.timer);
            this.timer = null;
            store.commit("setTimer", false);
        }
    },
    computed: {
        getTimerState: function () {
            return store.getters.getTimerState;
        }
    },
    watch: {
        getTimerState: function() {
            if(this.timer) {
                this.stop();
            } else {
                this.startTimer();
            }
        }
    }
}
</script>

<style scoped>
div#timer {
    font-size: 1.2em;
    line-height: 2.4em;
    text-align: center;

    border: black solid 2px;
}

span {
    margin: 0 0.2em;
}
</style>