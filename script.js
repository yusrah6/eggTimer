
        const softBoiledTime = 4 * 60;  // 4 minutes in seconds
        const mediumBoiledTime = 7 * 60; // 7 minutes in seconds
        const hardBoiledTime = 10 * 60; // 10 minutes in seconds

        let timer;
        let timeLeft;
        let activeButton = null;

        function startTimer(seconds) {
            if (timer) {
                clearInterval(timer);
            }

            timeLeft = seconds;
            updateDisplay();

            // Set active button state
            if (activeButton) {
                activeButton.classList.remove("active");
            }

            activeButton = document.getElementById(getEggType(seconds));
            activeButton.classList.add("active");

            timer = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateDisplay();
                } else {
                    clearInterval(timer);
                    alert("Time's up! Your egg is ready.");
                    activeButton.classList.remove("active");
                    activeButton = null;
                }
            }, 1000);
        }

        function updateDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById("timerDisplay").textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
        }

        function formatTime(time) {
            return time < 10 ? `0${time}` : time;
        }

        function getEggType(seconds) {
            if (seconds === softBoiledTime) return 'soft-boiled';
            if (seconds === mediumBoiledTime) return 'medium-boiled';
            if (seconds === hardBoiledTime) return 'hard-boiled';
        };

    