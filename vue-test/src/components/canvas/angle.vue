<template>
    <div class="page_main">
        <canvas ref="cavs" width="300" height="300"></canvas>
    </div>

</template>

<script>
export default {
    name: 'canvasTest',
    data() {
        return {
            isBegin: false,
            mouse: {
                x: 0,
                y: 0,
                angle: 0
            },
            ball: {},
            angle: 0

        }
    },
    mounted() {
        let self = this;
        let canvas = this.$refs.cavs;
        let ctx = canvas.getContext('2d');

        this.ball = new Ball(canvas.width / 2 + 20, canvas.width / 2 + 20, 10);
        // 球函数
        function Ball(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.angle = 0;
        };

        // 事件
        let requestID = null;
        let transR = 50;
        // 中心点
        let center = {
            transR,
            x: canvas.width / 2,
            y: canvas.height / 2
        }
        //绘制球
        function drawBall() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let ball = self.ball;
            ctx.save();

            let linearColor = ctx.createLinearGradient(-50, 0, 100, 0);
            linearColor.addColorStop(0, 'rgb(255, 255, 255)');
            linearColor.addColorStop(1, 'rgb(255, 0, 0)');
            ctx.fillStyle = linearColor;
            ctx.translate(center.x, center.y);

            let disAngle = self.mouse.angle - self.angle;
            self.angle += disAngle * 0.2;
            ctx.rotate(self.angle);


            ctx.beginPath();
            //不需要知道半径r， 直接 根据旋转角的差值来计算 坐标
            ball.x = self.mouse.x;
            ball.y = self.mouse.y
            ctx.arc(80, 0, ball.radius, 0, 2 * Math.PI, true);
            ctx.fillRect(-50, -10, 100, 20);
            ctx.fill();
            ctx.restore();
            requestID = requestAnimationFrame(drawBall);
        };

        !self.isBegin && drawBall();

        canvas.addEventListener('touchmove', function (e) {
            self.mouse.x = e.touches[0].pageX - center.x;
            self.mouse.y = e.touches[0].pageY - center.x;

            self.mouse.angle = Math.atan2(self.mouse.y, self.mouse.x);
            console.log(Math.atan2(self.mouse.y, self.mouse.x) * 180 / Math.PI);
            // console.log(self.mouse.x, self.mouse.y);
        })

    }
}
</script>

<style lang="less" scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
}

.page_main {
  width: 100%;
  canvas {
    width: 100%;
    background: #333;
  }
}
</style>
