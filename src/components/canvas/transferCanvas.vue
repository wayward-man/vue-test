<template>
    <div class="page_main">
        <canvas ref="cavs" width="400" height="300"></canvas>
    </div>

</template>

<script>
export default {
    name: 'canvasTest',
    data() {
        return {
            msg: '3'
        }
    },
    mounted() {

        let canvas = this.$refs.cavs;
        let ctx = canvas.getContext('2d');
        let balles = []; //存放页面上的球

        let angle = 0;

        // 球函数
        function Ball(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.angle = 0;
        };
        // 事件
        canvas.addEventListener('click', function () {

            balles.push(new Ball(canvas.width / 2 + 20, canvas.width / 2 + 20, 10));
        });

        function drawSinLine() {
            let x = 0;
            let y = 20;
            for (let angle = 0; angle < Math.PI * 14; angle += 0.1) {
                ctx.fillStyle = '#fff';
                ctx.beginPath();
                x += 1;
                y += Math.sin(angle) * 10;
                ctx.arc(x, y, 2, 2 * Math.PI, true);
                ctx.fill();
            }
        };
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
            drawSinLine();
            for (let i = 0; i < balles.length; i++) {
                let ball = balles[i];
                if (ball.x > canvas.width) {
                    balles.splice(i, 1);
                    i -= 1;
                } else {
                    ctx.save();
                    //使用径向渐变
                    let grd = ctx.createRadialGradient(ball.x, ball.y, 0, ball.x, ball.y, ball.radius - 1);
                    grd.addColorStop(0.5, 'rgba(255,255,255,1)');
                    grd.addColorStop(1, 'rgba(255,255,255,.7)');
                    ctx.fillStyle = grd;


                    ctx.beginPath();
                    //重新计算球的位置
                    // 正弦运动
                    // ball.x += 1;
                    // ball.y += Math.sin(ball.angle) * 10;
                    // ball.angle += 0.1;

                    // 绕点center圆形轨迹旋转
                    // ball.x = center.x + Math.sin(ball.angle) * center.transR;
                    // ball.y = center.y + Math.cos(ball.angle) * center.transR;
                    // ball.angle += 0.1;

                    // 绕点center 椭圆轨迹旋转
                    // ball.x = center.x + Math.sin(ball.angle) * center.transR;
                    // ball.y = center.y + Math.cos(ball.angle) * center.transR / 5 * 3;
                    // ball.angle += 0.1;

                    //不需要知道半径r， 直接 根据旋转角的差值来计算 坐标
                    let disX = ball.x - center.x;
                    let disY = ball.y - center.y;
                    ball.x = Math.floor(center.x + (disX * Math.cos(ball.angle) - disY * Math.sin(ball.angle)));
                    ball.y = Math.floor(center.y + (disY * Math.cos(ball.angle) + disX * Math.sin(ball.angle)));
                    ball.angle = 0.1;


                    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, true);
                    console.log(ball.x, ball.y);

                    ctx.arc(center.x, center.y, 2, 0, 2 * Math.PI, true);
                    ctx.fill();
                    ctx.restore();
                }
            };
            requestID = requestAnimationFrame(drawBall);
        };
        window.onload = function () {
            drawBall();
        };

    }
}
</script>

<style lang="less" scoped>
html,
body {
  width: 100%;
}

.page_main {
  width: 100%;
  canvas {
    width: 100%;
    background: #333;
    margin: 0 0.2rem;
  }
}
</style>
