function showSOS(){

    const sosScreen = document.getElementById("sos-screen");

    sosScreen.style.display = "flex";

    sosScreen.addEventListener("click", function(){

        sosScreen.style.display = "none";

    });

}

let isPlaying = false;

function playAlarm(button){

    const alarm =
    document.getElementById("alarm-sound");

    if(!isPlaying){

        alarm.loop = true;

        alarm.play();

        isPlaying = true;

        // 大人向け
        if(button.classList.contains("alarm-btn")){

            button.textContent = "停止";

        }

        // 子ども向け
        if(button.classList.contains("child-alarm-btn")){

            button.textContent = "ていし";

        }

    }else{

        alarm.pause();

        alarm.currentTime = 0;

        isPlaying = false;

        // 大人向け
        if(button.classList.contains("alarm-btn")){

            button.textContent = "防犯ブザー";

        }

        // 子ども向け
        if(button.classList.contains("child-alarm-btn")){

            button.textContent = "おとをならす";

        }

    }

}

function openMapLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(function(position){

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const mapUrl =
            `https://www.google.com/maps?q=${lat},${lon}`;

            window.open(mapUrl, "_blank");

        });

    }else{

        alert("位置情報が使えません");

    }

}

function shareLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(function(position){

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const mapUrl =
            `https://www.google.com/maps?q=${lat},${lon}`;

            const shareText =
            `たすけて！\nいまここにいます。\n${mapUrl}`;

            // 共有できる端末
            if(navigator.share){

                navigator.share({
                    title: '現在地',
                    text: shareText
                });

            }else{

                // 共有できない場合
                navigator.clipboard.writeText(shareText);

                alert("位置情報をコピーしました");

            }

        });

    }else{

        alert("位置情報が使えません");

    }

}