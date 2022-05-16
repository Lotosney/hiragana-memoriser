
let hiraganaSigns = ['あ', 'い', 'う', 'え', 'お'    ,'か', 'き', 'く', 'け', 'こ', 'きゃ', 'きゅ', 'きょ',
    'さ', 'し', 'す', 'せ', 'そ', 'しゃ', 'しゅ', 'しょ',
    'た', 'ち', 'つ', 'て', 'と', 'ちゃ', 'ちゅ', 'ちょ',
    'な', 'に', 'ぬ', 'ね', 'の', 'にゃ', 'にゅ', 'にょ',
    'は', 'ひ', 'ふ', 'へ', 'ほ', 'ひゃ', 'ひゅ', 'ひょ',
    'ま', 'み', 'む', 'め', 'も', 'みゃ', 'みゅ', 'みょ',
    'や', 'ゆ', 'よ',
    'ら', 'り', 'る', 'れ', 'ろ', 'りゃ', 'りゅ', 'りょ',
    'わ', 'を', 'が', 'ぎ', 'ぐ', 'げ', 'ご', 'ぎゃ', 'ぎゅ', 'ぎょ',
    'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'じゃ', 'じゅ', 'じょ',
    'だ', 'ぢ', 'づ', 'で', 'ど', 'ぢゃ', 'ぢゅ', 'ぢょ',
    'ば', 'び', 'ぶ', 'べ', 'ぼ', 'びゃ', 'びゅ', 'びょ',
    'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ', 'ぴゃ', 'ぴゅ', 'ぴょ']




let latinSigns=['a', 'i' , 'u'	, 'e'	, 'o',  'ka'	, 'ki'	, 'ku'	, 'ke'	, 'ko'	, 'kya'	, 'kyu'	, 'kyo'
, 'sa'	, 'shi'	, 'su'	, 'se'	, 'so'	, 'sha'	, 'shu'	, 'sho'
, 'ta'	, 'chi'	, 'tsu'	, 'te'	, 'to'	, 'cha'	, 'chu'	, 'cho'
, 'na'	, 'ni'	, 'nu'	, 'ne'	, 'no'	, 'nya'	, 'nyu'	, 'nyo'
, 'ha'	, 'hi'	, 'fu'	, 'he'	, 'ho'	, 'hya'	, 'hyu'	, 'hyo'
, 'ma'	, 'mi'	, 'mu'	, 'me'	, 'mo'	, 'mya'	, 'myu'	, 'myo'
, 'ya'		, 'yu'		, 'yo'	
, 'ra'	, 'ri'	, 'ru'	, 're'	, 'ro'	, 'rya'	, 'ryu'	, 'ryo'
, 'wa' , 'wo', 'n',  'ga'	, 'gi'	, 'gu'	, 'ge'	, 'go'	, 'gya'	, 'gyu'	, 'gyo'
, 'za'	, 'ji'	, 'zu'	, 'ze'	, 'zo'	, 'ja'	, 'ju'	, 'jo'
, 'da'	, 'ji'	, 'zu'	, 'de'	, 'do'	, 'ja'	, 'ju'	, 'jo'
, 'ba'	, 'bi'	, 'bu'	, 'be'	, 'bo'	, 'bya'	, 'byu'	, 'byo'
, 'pa'	, 'pi'	, 'pu'	, 'pe'	, 'po'	, 'pya'	, 'pyu'	, 'pyo'
, 'vu'			
]

let scoreNum = 0;
let negScoreNum = 0;

let positiveScoreNumber = document.getElementById('positiveScoreNumber')
positiveScoreNumber.innerText = `${scoreNum}`
let negativeScoreNumber = document.getElementById('negativeScoreNumber')
negativeScoreNumber.innerText = `${negScoreNum}`

let chosenHiragana = Math.floor(Math.random() * hiraganaSigns.length)

let chosenLatin =  chosenHiragana


let myFeedback = document.getElementById('feedback')
let text =document.getElementById('userInput').value

let hiragana = document.getElementById('hiraganaContainer')
hiragana.innerText = `${hiraganaSigns[chosenHiragana]}`



checkOfChoiceCorrecteness=()=>{
    let text =document.getElementById('userInput').value
    if(text.trim()==latinSigns[chosenLatin]){
        myFeedback = document.getElementById('feedback')
        let passText = "Correct!";
        myFeedback.innerText=`${passText}`
        document.getElementById('feedback').className = "color-green";
        chosenHiragana = Math.floor(Math.random() * hiraganaSigns.length)
        chosenLatin = chosenHiragana
        hiragana = document.getElementById('hiraganaContainer')
        hiragana.innerText = `${hiraganaSigns[chosenHiragana]}`
        scoreNum = scoreNum + 1
        positiveScoreNumber.innerText = `${scoreNum}`
     

    }else{   
        myFeedback = document.getElementById('feedback')
        let failText = "Wrong, correct answer was: " + latinSigns[chosenLatin] +" " ;     
        myFeedback.innerText=`${failText}` 
        myFeedback.className = 'color-red'
        chosenHiragana = Math.floor(Math.random() * hiraganaSigns.length)
        chosenLatin = chosenHiragana
        hiragana = document.getElementById('hiraganaContainer')
        hiragana.innerText = `${hiraganaSigns[chosenHiragana]}`
        negScoreNum = negScoreNum + 1
        negativeScoreNumber.innerText = `${negScoreNum}`
       
    }
}





