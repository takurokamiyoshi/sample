var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// プレーヤーを埋め込む場所ID
var ytArea = 'sample';

// API読み込み後にプレーヤー埋め込み
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player(ytArea, {
        width: ytWidth, // プレーヤーのサイズ横幅
        height: ytHeight, // プレーヤーのサイズ高さ
        videoId: '0HRgsxTUKhw', // 埋め込むYouTube ID
        playerVars: {
        'rel': '0',
        'showinfo': '0',
        'controls': '0'
        },
        events: { 
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError
        }
    });
}


function onPlayerReady(e) {
    e.target.mute(); // ミュート設定
}

var stateArea = document.getElementById('status');
function onPlayerStateChange(e) {
    // 現在のステータス取得
    var ytStatus = e.target.getPlayerState();
    var stateIns = 'ステータス：';
    // ステータスの判別
    switch (ytStatus) {
        case -1:
            stateIns += '未開始(-1)';
            break;
        case 0:
            stateIns += '終了(0)';
            alert(1);
            break;
        case 1:
            stateIns += '再生中(1)';
            break;
        case 2:
            stateIns += '停止(2)';
            break;
        case 3:
            stateIns += 'バッファリング中(3)';
            break;
        case 5:
            stateIns += '頭出し済み(5)';
            break;
        default:
            break;
    }
    stateArea.innerHTML = stateIns;
}

function onPlayerError(e) {
    // エラーの種別取得
    var ytError = e.data;
    var errorIns = '読み込みに失敗しました。';
    // エラーの判別
    switch (ytError) {
        case 2:
            errorIns += '無効なパラメータ値が含まれています。(2)';
            break;
        case 5:
            errorIns += 'HTML5プレーヤーで再生できない、または HTML5プレーヤーに関する別のエラーが発生しました。(5)';
            break;
        case 100:
            errorIns += '動画が見つかりません。(100)';
            break;
        case 101:
            errorIns += '動画の所有者が、埋め込み動画プレーヤーでの再生を許可していません。(101)';
            break;
        case 150:
            errorIns += '動画の所有者が、埋め込み動画プレーヤーでの再生を許可していません。(150)';
            break;
        default:
            break;
    }
    alert(errorIns);
}