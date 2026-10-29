
"use strict";

// =============================
// 1. 題目資料：共 8 題
// =============================
const QUESTIONS = [
  {
    stage: 0, goal: 0, type: "single",
    title: "哪張照片把人物放在三分線附近？",
    hint: "小提示：可以把照片想像成九宮格。",
    options: [
      ["A", "照片 A", "person-third"],
      ["B", "照片 B", "person-center"],
      ["C", "照片 C", "person-edge"]
    ],
    answer: "A",
    answerText: "照片 A",
    explain: "三分法會把畫面分成九宮格，把主要人物安排在三分線或交點附近。這只是常見的構圖方法，不是唯一的好拍法。"
  },
  {
    stage: 0, goal: 0, type: "single",
    title: "哪張建築照片看起來左右對稱？",
    hint: "觀察建築物與畫面中央的位置。",
    options: [
      ["A", "照片 A", "sym-left"],
      ["B", "照片 B", "sym-center"],
      ["C", "照片 C", "sym-right"]
    ],
    answer: "B",
    answerText: "照片 B",
    explain: "對稱構圖會利用畫面左右相似的形狀和位置，讓照片呈現整齊、平衡的感覺。"
  },
  {
    stage: 0, goal: 0, type: "single",
    title: "哪張照片用道路線條引導我們看向主角？",
    hint: "觀察道路延伸的方向與人物的位置。",
    options: [
      ["A", "照片 A", "lead-target"],
      ["B", "照片 B", "lead-away"],
      ["C", "照片 C", "lead-flat"]
    ],
    answer: "A",
    answerText: "照片 A",
    explain: "引導線可以是道路、欄杆或建築線條；當線條延伸到主角附近，就能幫助觀眾把注意力放在主角上。"
  },
  {
    stage: 1, goal: 1, type: "single",
    title: "想拍清楚同學，背景太亂時可以怎麼做？",
    hint: "好的取景不只要看人物，也要觀察後面有什麼。",
    options: [
      ["A", "直接站在原地拍", "bg-busy"],
      ["B", "換個角度，避開雜物", "bg-clean"],
      ["C", "讓更多雜物入鏡", "bg-more"]
    ],
    answer: "B",
    answerText: "換個角度，避開雜物",
    explain: "拍照前先看看背景。移動一小步、換個拍攝方向，就可能讓主角更明顯。"
  },
  {
    stage: 1, goal: 1, type: "single",
    title: "想從玩偶眼睛的高度拍照，該怎麼做？",
    hint: "想想相機鏡頭和玩偶眼睛的高度。",
    options: [
      ["A", "蹲低，讓鏡頭接近玩偶眼睛", "angle-eye"],
      ["B", "從玩偶正上方往下拍", "angle-high"],
      ["C", "站很遠，用原本的高度拍", "angle-far"]
    ],
    answer: "A",
    answerText: "蹲低，讓鏡頭接近玩偶眼睛",
    explain: "把相機放在主角眼睛附近的高度，是平視拍攝。改變角度會讓照片出現不同感覺。"
  },
  {
    stage: 1, goal: 1, type: "single",
    title: "同學的臉因為背光太暗，可以怎麼改善？",
    hint: "想一想：光要從哪裡照過來，才能看清楚臉？",
    options: [
      ["A", "讓亮光繼續只照在他身後", "light-back"],
      ["B", "移到柔和光線照到臉的位置", "light-face"],
      ["C", "繼續待在很暗的地方", "light-dark"]
    ],
    answer: "B",
    answerText: "移到柔和光線照到臉的位置",
    explain: "光線會影響照片明暗。讓柔和光線照到人物的臉，是改善人像偏暗的一種簡單方法。"
  },
  {
    stage: 2, goal: 2, type: "single",
    title: "想拍出整個運動會現場，應該選哪張？",
    hint: "要介紹一個地方，通常得把周圍環境也拍進來。",
    options: [
      ["A", "操場與人群的全景", "sport-wide"],
      ["B", "運動員的臉部特寫", "sport-face"],
      ["C", "運動鞋的特寫", "sport-shoes"]
    ],
    answer: "A",
    answerText: "操場與人群的全景",
    explain: "全景適合交代活動發生的地點和整體環境；特寫更適合呈現人物表情或物品細節。"
  },
  {
    stage: 2, goal: 2, type: "order",
    title: "用三張照片說故事！",
    hint: "依照「先介紹地點 → 再呈現活動 → 最後看人物表情」的順序點選。",
    options: [
      ["A", "人物表情特寫", "story-close"],
      ["B", "活動現場全景", "story-wide"],
      ["C", "學生參與活動的中景", "story-mid"]
    ],
    answer: "BCA",
    answerText: "B → C → A",
    explain: "全景先交代活動地點，中景帶出正在做什麼，最後的特寫能強調人物表情。這是常見的影像敘事方式之一。"
  }
];

// =============================
// 2. 關卡與學習目標
// =============================
const STAGES = [
  {
    name: "攝影觀察家",
    icon: "🖼️",
    desc: "先從照片開始，認識三分法、對稱構圖與引導線！"
  },
  {
    name: "拍照練習生",
    icon: "🌤️",
    desc: "學會注意背景、拍攝角度及光線，拍照更有想法！"
  },
  {
    name: "小小攝影師",
    icon: "🎞️",
    desc: "接下攝影任務，用不同照片把故事說清楚！"
  }
];

const GOALS = ["構圖觀察", "拍攝技巧", "影像表達"];

const $ = (id) => document.getElementById(id);

let queue = [];
let pos = 0;
let records = [];
let selected = null;
let order = [];
let locked = false;
let soundOn = true;
let audioCtx = null;

// =============================
// 3. 頁面與關卡控制
// =============================
function screen(id) {
  for (const name of ["home", "stage", "quiz", "result"]) {
    $(name).hidden = name !== id;
  }
  window.scrollTo({ top: 0, behavior: "instant" });
}

function current() {
  return QUESTIONS[queue[pos]];
}

function startRound(ids = QUESTIONS.map((_, i) => i)) {
  queue = [...ids];
  pos = 0;
  records = [];
  selected = null;
  order = [];
  locked = false;
  showStage();
}

function showStage() {
  const s = current().stage;

  $("stageIcon").textContent = STAGES[s].icon;
  $("stageTag").textContent = `第 ${s + 1} 關`;
  $("stageName").textContent = STAGES[s].name;
  $("stageDescription").textContent = STAGES[s].desc;

  screen("stage");
}

// =============================
// 4. 顯示題目與選項
// =============================
function showQuestion() {
  selected = null;
  order = [];
  locked = false;

  const q = current();

  $("stageLabel").textContent =
    `第 ${q.stage + 1} 關・${STAGES[q.stage].name}`;
  $("countLabel").textContent =
    `第 ${pos + 1} / ${queue.length} 題`;

  $("progressFill").style.width =
    `${pos / queue.length * 100}%`;

  $("progress").setAttribute(
    "aria-valuenow",
    String(Math.round(pos / queue.length * 100))
  );

  $("goalLabel").textContent = `📷 ${GOALS[q.goal]}`;
  $("questionTitle").textContent = q.title;
  $("questionHint").textContent = q.hint;

  $("instruction").textContent = q.type === "order"
    ? "請按照故事順序依次點選三張照片"
    : "請看圖或閱讀選項後，選擇一個答案";

  $("feedback").hidden = true;
  $("orderDisplay").hidden = q.type !== "order";
  $("clearOrderBtn").hidden = q.type !== "order";

  $("submitBtn").hidden = false;
  $("submitBtn").disabled = true;
  $("nextBtn").hidden = true;

  renderChoices();
  screen("quiz");
}

function renderChoices() {
  const q = current();

  $("photoChoices").innerHTML = q.options.map(
    ([id, label, scene]) => {
      const picked = q.type === "order"
        ? order.includes(id)
        : selected === id;

      const correct = locked &&
        (q.type === "order" ? true : id === q.answer);

      const wrong = locked &&
        q.type !== "order" &&
        picked && !correct;

      return `
        <button
          class="photo-option
            ${picked ? "selected" : ""}
            ${correct ? "correct" : ""}
            ${wrong ? "wrong" : ""}"
          type="button"
          data-id="${id}"
          aria-pressed="${picked}"
          ${locked || (q.type === "order" && picked) ? "disabled" : ""}
        >
          ${drawScene(scene, locked && correct)}
          <span class="option-text">
            <span class="letter">${id}</span>
            <span>${label}</span>
          </span>
        </button>
      `;
    }
  ).join("");

  $("photoChoices").querySelectorAll("button[data-id]").forEach(btn => {
    btn.addEventListener("click", () => choose(btn.dataset.id));
  });

  if (q.type === "order") {
    $("orderDisplay").textContent = order.length
      ? `你的順序：${order.join(" → ")} （${order.length}/3）`
      : "你的順序：尚未選擇";
  }
}

function choose(id) {
  if (locked) return;

  if (current().type === "order") {
    if (!order.includes(id) && order.length < 3) {
      order.push(id);
    }
    $("submitBtn").disabled = order.length !== 3;
  } else {
    selected = id;
    $("submitBtn").disabled = false;
  }

  renderChoices();
}

// =============================
// 5. 答案判斷與即時回饋
// =============================
function submit() {
  if (locked || $("submitBtn").disabled) return;

  const q = current();
  const answer = q.type === "order"
    ? order.join("")
    : selected;

  const correct = answer === q.answer;

  records.push({
    id: queue[pos],
    goal: q.goal,
    correct
  });

  locked = true;

  $("progressFill").style.width =
    `${(pos + 1) / queue.length * 100}%`;

  $("progress").setAttribute(
    "aria-valuenow",
    String(Math.round((pos + 1) / queue.length * 100))
  );

  renderChoices();

  $("feedback").hidden = false;
  $("feedback").classList.toggle("error", !correct);

  $("feedback").innerHTML = `
    <h3>
      ${correct ? "🎉 答對了！" : "💡 再認識一下這個技巧"}
    </h3>
    <p>
      ${correct
        ? q.explain
        : `正確答案：<strong>${q.answerText}</strong>。${q.explain}`}
    </p>
  `;

  $("submitBtn").hidden = true;
  $("nextBtn").hidden = false;

  $("nextBtn").textContent = pos === queue.length - 1
    ? "查看成績 →"
    : "下一題 →";

  beep(correct);
}

function next() {
  const oldStage = current().stage;
  pos++;

  if (pos >= queue.length) {
    showResult();
    return;
  }

  if (current().stage !== oldStage) {
    showStage();
  } else {
    showQuestion();
  }
}

// =============================
// 6. 成績統計與錯題再練
// =============================
function showResult() {
  const correct = records.filter(r => r.correct).length;

  $("score").innerHTML =
    `${correct} <small>/ ${records.length} 題</small>`;

  $("summary").textContent = correct === records.length
    ? "太棒了，這一輪全部答對！你可以試著用手機實際拍幾張照片。"
    : "做得不錯！攝影需要多觀察。可以再練習答錯的題目。";

  $("goalBars").innerHTML = GOALS.map((name, i) => {
    const own = records.filter(r => r.goal === i);

    if (!own.length) return "";

    const count = own.filter(r => r.correct).length;
    const rate = Math.round(count / own.length * 100);

    return `
      <div class="goal-row">
        <div>
          <span>${name}</span>
          <span>${count} / ${own.length} 題</span>
        </div>
        <div class="goal-track">
          <div style="width:${rate}%"></div>
        </div>
      </div>
    `;
  }).join("");

  $("wrongBtn").hidden = correct === records.length;
  screen("result");
}

// =============================
// 7. 音效：不用下載音效檔案
// =============================
function beep(ok) {
  if (!soundOn) return;

  try {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    audioCtx ||= new AudioContextClass();

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const notes = ok ? [650, 850] : [310];

    notes.forEach((hz, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const time = audioCtx.currentTime + i * 0.12;

      osc.type = "sine";
      osc.frequency.value = hz;

      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.exponentialRampToValueAtTime(0.12, time + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.13);

      osc.connect(gain).connect(audioCtx.destination);
      osc.start(time);
      osc.stop(time + 0.14);
    });
  } catch (err) {
    console.warn("音效無法播放：", err);
  }
}

// =============================
// 8. SVG 攝影示意圖
//    不需外部圖片，可以離線使用
// =============================
function drawScene(key, reveal = false) {
  const sky = `
    <rect width="320" height="190" fill="#bce6f5"/>
    <circle cx="270" cy="34" r="22" fill="#ffe7a3"/>
    <path d="M0 128 Q72 82 146 132 Q228 86 320 119 V190 H0Z" fill="#9bd1b3"/>
    <path d="M0 153 Q80 131 160 154 Q239 130 320 150 V190 H0Z" fill="#61b59b"/>
  `;

  const grass = `
    <path d="M0 154 H320 V190 H0Z" fill="#68b894"/>
  `;

  const person = (x, y = 125, scale = 1, shirt = "#e77d55") => `
    <g transform="translate(${x} ${y}) scale(${scale})">
      <circle cy="-27" r="13" fill="#ffcf9f"/>
      <path d="M-12 -30Q0 -50 12 -29" fill="none" stroke="#59483c" stroke-width="8"/>
      <path d="M-12 -11H12L17 21H-17Z" fill="${shirt}"/>
      <path d="M-7 21L-8 43M7 21L8 43" stroke="#374659" stroke-width="7" stroke-linecap="round"/>
      <path d="M-12 0L-23 16M12 0L23 16" stroke="#ffcf9f" stroke-width="6" stroke-linecap="round"/>
    </g>
  `;

  const tree = x => `
    <rect x="${x - 5}" y="91" width="10" height="62" rx="4" fill="#8e7859"/>
    <circle cx="${x}" cy="85" r="26" fill="#479e83"/>
    <circle cx="${x - 15}" cy="99" r="20" fill="#6abd95"/>
  `;

  const grid = `
    <path d="M106 0V190M213 0V190M0 63H320M0 127H320"
          stroke="#fff" opacity=".8" stroke-width="2"/>
  `;

  const building = x => `
    <rect x="${x - 45}" y="61" width="90" height="95"
          fill="#fff2cf" stroke="#507e85" stroke-width="3"/>
    <path d="M${x - 52} 61L${x} 24L${x + 52} 61Z" fill="#d77963"/>
    <rect x="${x - 12}" y="109" width="24" height="47"
          rx="11" fill="#5f92a0"/>
    <rect x="${x - 33}" y="80" width="16" height="22" fill="#8ec6d9"/>
    <rect x="${x + 17}" y="80" width="16" height="22" fill="#8ec6d9"/>
  `;

  const toy = `
    <ellipse cx="235" cy="152" rx="40" ry="7" fill="#427b6680"/>
    <rect x="211" y="113" width="48" height="42" rx="18" fill="#ffca80"/>
    <circle cx="235" cy="91" r="27" fill="#f7d09b"/>
    <ellipse cx="216" cy="62" rx="11" ry="26" fill="#f7d09b"/>
    <ellipse cx="253" cy="62" rx="11" ry="26" fill="#f7d09b"/>
    <circle cx="225" cy="89" r="3" fill="#485765"/>
    <circle cx="246" cy="89" r="3" fill="#485765"/>
    <path d="M230 99Q235 104 240 99"
          fill="none" stroke="#a86d65" stroke-width="2"/>
  `;

  let art = "";

  // 第一題：三分法
  if (key.startsWith("person")) {
    const x = key === "person-third" ? 106
      : key === "person-center" ? 160 : 294;

    art = sky + tree(260) + person(x) + (reveal ? grid : "");
  }

  // 第二題：對稱構圖
  else if (key.startsWith("sym")) {
    const x = key === "sym-left" ? 105
      : key === "sym-center" ? 160 : 239;

    art = sky + building(x) + tree(30) + tree(290);

    if (reveal) {
      art += `<path d="M160 0V190" stroke="#ff875b"
                    stroke-width="3" stroke-dasharray="7 5"/>`;
    }
  }

  // 第三題：引導線
  else if (key.startsWith("lead")) {
    if (key === "lead-flat") {
      art = sky + grass + `
        <path d="M0 125H320V160H0Z" fill="#d2b28d"/>
        <path d="M0 138H320" stroke="#ffefcc"
              stroke-width="4" stroke-dasharray="24 18"/>
      ` + person(240, 112, 0.8);
    } else {
      const focus = key === "lead-target" ? 173 : 66;

      art = sky + `
        <path d="M0 190L${focus - 11} 103H${focus + 11}L320 190Z"
              fill="#ccb08e"/>
        <path d="M25 190L${focus - 6} 103M295 190L${focus + 6} 103"
              fill="none" stroke="#fff5df" stroke-width="5"/>
      ` + person(key === "lead-target" ? focus : 243, 108, 0.75);

      if (reveal) {
        art += `<path d="M25 190L${focus} 103M295 190L${focus} 103"
                      stroke="#ffde5a" stroke-width="4" fill="none"/>`;
      }
    }
  }

  // 第四題：背景整理
  else if (key.startsWith("bg")) {
    const clutter = key !== "bg-clean";

    art = sky + (
      clutter ? `
        <rect x="18" y="43" width="67" height="58"
              rx="5" fill="#f5aa80"/>
        <rect x="220" y="36" width="76" height="52"
              rx="4" fill="#a1bbd6"/>
        <path d="M26 53H79M26 67H79M230 49H284M230 64H284"
              stroke="#fff8ee" stroke-width="6"/>
      ` : tree(48) + tree(285)
    ) + person(160, 118, 1.12);

    if (key === "bg-more") {
      art += `
        <circle cx="120" cy="134" r="22" fill="#e5c3e7"/>
        <rect x="267" y="124" width="28" height="35" fill="#ef9278"/>
      `;
    }
  }

  // 第五題：拍攝角度
  else if (key.startsWith("angle")) {
    art = sky + grass + toy;

    const cameraPos = key === "angle-high" ? [50, 35]
      : key === "angle-far" ? [25, 140] : [84, 91];

    const [x, y] = cameraPos;

    art += `
      <rect x="${x}" y="${y}" width="30" height="22"
            rx="5" fill="#485a6a"/>
      <circle cx="${x + 15}" cy="${y + 11}" r="7" fill="#94d5e4"/>
      <path d="M${x + 30} ${y + 12}L205 92"
            stroke="#e98158" stroke-width="3"
            stroke-dasharray="7 5"/>
    `;

    if (key === "angle-high") {
      art += `<path d="M178 23L207 58L177 72Z" fill="#ffffff99"/>`;
    }
  }

  // 第六題：光線
  else if (key.startsWith("light")) {
    const dim = key !== "light-face";

    art = sky + `
      <circle cx="${dim ? 264 : 60}" cy="30" r="25" fill="#ffed98"/>
    ` + person(165, 113, 1.5, "#5e9dc1");

    if (dim) {
      const opacity = key === "light-dark" ? 0.54 : 0.3;
      art += `<rect x="0" width="320" height="190"
                    fill="#1a3b64" opacity="${opacity}"/>`;
    }
  }

  // 第七、八題：活動全景
  else if (key === "sport-wide" || key === "story-wide") {
    art = `
      <rect width="320" height="190" fill="#a6d7f0"/>
      <rect y="70" width="320" height="68" fill="#a6bfcf"/>
      <path d="M0 90H320M0 108H320" stroke="#fff"
            stroke-width="5" stroke-dasharray="15 6"/>
      <path d="M0 138H320V190H0Z" fill="#d9876a"/>
      <path d="M0 150H320M0 171H320"
            stroke="#fff5e9" stroke-width="4"/>
    ` + [60, 115, 176, 246]
      .map(x => person(x, 113, 0.44, "#f2d075"))
      .join("");
  }

  // 人物特寫
  else if (key === "sport-face" || key === "story-close") {
    art = sky + `
      <ellipse cx="160" cy="190" rx="100" ry="92" fill="#f2a568"/>
      <circle cx="160" cy="78" r="69" fill="#ffcf9c"/>
      <path d="M93 64Q156 -4 227 65"
            stroke="#4d4b50" stroke-width="24" fill="none"/>
      <circle cx="137" cy="76" r="6" fill="#3f4350"/>
      <circle cx="185" cy="76" r="6" fill="#3f4350"/>
      <path d="M142 110Q161 132 184 108"
            fill="none" stroke="#b45e61" stroke-width="5"/>
    `;
  }

  // 鞋子特寫
  else if (key === "sport-shoes") {
    art = `
      <rect width="320" height="190" fill="#d8e5d7"/>
      <rect y="135" width="320" height="55" fill="#d8896a"/>
      <path d="M0 157H320" stroke="#fff2df" stroke-width="5"/>
      <path d="M132 0L131 107M201 0L206 109"
            stroke="#49628a" stroke-width="35"/>
      <path d="M102 100Q156 108 178 143V159H72Q67 142 102 100Z"
            fill="#f5faf9" stroke="#52687d" stroke-width="3"/>
      <path d="M195 103Q246 106 273 143V159H178Q173 144 195 103Z"
            fill="#ffcb7f" stroke="#52687d" stroke-width="3"/>
    `;
  }

  // 第八題：活動中景
  else if (key === "story-mid") {
    art = sky +
      `<rect y="153" width="320" height="37" fill="#d6a67b"/>` +
      person(85, 111, 0.92, "#e58465") +
      person(160, 105, 1.02, "#f4d48d") +
      person(235, 111, 0.92, "#6d9cce");
  }

  return `
    <svg viewBox="0 0 320 190"
         xmlns="http://www.w3.org/2000/svg"
         aria-hidden="true" focusable="false">
      ${art}
    </svg>
  `;
}

// =============================
// 9. 按鈕事件
// =============================
$("startBtn").addEventListener("click", () => startRound());
$("enterBtn").addEventListener("click", showQuestion);
$("submitBtn").addEventListener("click", submit);
$("nextBtn").addEventListener("click", next);

$("clearOrderBtn").addEventListener("click", () => {
  if (!locked) {
    order = [];
    $("submitBtn").disabled = true;
    renderChoices();
  }
});

$("wrongBtn").addEventListener("click", () => {
  const wrongIds = records
    .filter(r => !r.correct)
    .map(r => r.id);

  startRound(wrongIds);
});

$("againBtn").addEventListener("click", () => startRound());
$("homeBtn").addEventListener("click", () => screen("home"));

$("logo").addEventListener("click", e => {
  e.preventDefault();
  screen("home");
});

$("soundBtn").addEventListener("click", () => {
  soundOn = !soundOn;

  $("soundBtn").textContent = soundOn
    ? "🔊 音效開啟"
    : "🔇 音效關閉";

  $("soundBtn").setAttribute("aria-pressed", String(soundOn));
});

// 預設顯示首頁
screen("home");

/*
========================================
攝影構圖小達人｜隨機題庫擴充系統

適合對象：國小高年級～國中生

原本題庫：8 題
新增題目：16 題
總題庫：24 題

每次挑戰：
第一關隨機抽 3 題
第二關隨機抽 3 題
第三關隨機抽 2 題

總共 8 題
========================================
*/

const EXTRA_QUESTIONS = [

  // ====================================
  // 第一關：攝影觀察家
  // ====================================

  {
    stage: 0,
    goal: 0,
    type: "single",

    title: "如果想把人物放在畫面正中央，應該選哪張照片？",

    hint: "注意人物和照片左右邊界的距離。",

    options: [
      ["A", "照片 A", "person-third"],
      ["B", "照片 B", "person-center"],
      ["C", "照片 C", "person-edge"]
    ],

    answer: "B",
    answerText: "照片 B",

    explain: "置中構圖是把主角放在畫面中央，適合想讓觀眾直接注意主角的情境。"
  },

  {
    stage: 0,
    goal: 0,
    type: "single",

    title: "哪張照片的人物最靠近畫面的右邊緣？",

    hint: "看看主角旁邊還剩下多少空間。",

    options: [
      ["A", "照片 A", "person-center"],
      ["B", "照片 B", "person-third"],
      ["C", "照片 C", "person-edge"]
    ],

    answer: "C",
    answerText: "照片 C",

    explain: "拍照時可以留意主角與畫面邊緣的距離。太貼邊有時會讓照片顯得擁擠。"
  },

  {
    stage: 0,
    goal: 0,
    type: "single",

    title: "哪張建築照片把建築物放在比較靠左的位置？",

    hint: "觀察建築物的中心落在畫面的哪一側。",

    options: [
      ["A", "照片 A", "sym-left"],
      ["B", "照片 B", "sym-center"],
      ["C", "照片 C", "sym-right"]
    ],

    answer: "A",
    answerText: "照片 A",

    explain: "拍攝者可以改變主角在畫面中的位置。靠左、置中或靠右，都可能產生不同構圖效果。"
  },

  {
    stage: 0,
    goal: 0,
    type: "single",

    title: "哪張建築照片的主體正好落在中央軸線附近？",

    hint: "把畫面想像成左右兩半。",

    options: [
      ["A", "照片 A", "sym-right"],
      ["B", "照片 B", "sym-left"],
      ["C", "照片 C", "sym-center"]
    ],

    answer: "C",
    answerText: "照片 C",

    explain: "把主要建築物放在中央，可以讓左右畫面比較均衡，是常見的置中構圖方式。"
  },

  {
    stage: 0,
    goal: 0,
    type: "single",

    title: "哪張照片的道路是橫向穿過畫面，而不是往遠方延伸？",

    hint: "觀察道路是左右延伸，還是朝著遠方變窄。",

    options: [
      ["A", "照片 A", "lead-target"],
      ["B", "照片 B", "lead-flat"],
      ["C", "照片 C", "lead-away"]
    ],

    answer: "B",
    answerText: "照片 B",

    explain: "道路、欄杆等線條可以是水平、垂直或斜向。不同方向的線條，會帶來不同視覺感受。"
  },


  // ====================================
  // 第二關：拍照練習生
  // ====================================

  {
    stage: 1,
    goal: 1,
    type: "single",

    title: "哪張照片的背景最簡單，讓人物更容易被看見？",

    hint: "看看人物身後有沒有太多雜物。",

    options: [
      ["A", "雜物較多", "bg-busy"],
      ["B", "雜物更多", "bg-more"],
      ["C", "背景簡單", "bg-clean"]
    ],

    answer: "C",
    answerText: "背景簡單",

    explain: "拍攝人物時，適當避開雜亂背景，可以讓觀眾更容易注意到主角。"
  },

  {
    stage: 1,
    goal: 1,
    type: "single",

    title: "想從玩偶的上方往下拍，應選哪一個相機位置？",

    hint: "相機需要比玩偶的眼睛更高。",

    options: [
      ["A", "與玩偶平視", "angle-eye"],
      ["B", "從上方往下拍", "angle-high"],
      ["C", "站在較遠處", "angle-far"]
    ],

    answer: "B",
    answerText: "從上方往下拍",

    explain: "從較高位置向下拍叫做俯拍；它會讓我們看見主角的上方與周圍環境。"
  },

  {
    stage: 1,
    goal: 1,
    type: "single",

    title: "哪個畫面是人物站在光源前面，容易產生背光效果？",

    hint: "觀察亮光出現在人物的前面還是後面。",

    options: [
      ["A", "光照到臉", "light-face"],
      ["B", "光在人物背後", "light-back"],
      ["C", "整體光線不足", "light-dark"]
    ],

    answer: "B",
    answerText: "光在人物背後",

    explain: "當主要光源從人物背後照來時，就可能形成逆光；若沒有補光，人物的臉可能偏暗。"
  },

  {
    stage: 1,
    goal: 1,
    type: "single",

    title: "如果想清楚看見人物的臉，哪個光線情境比較適合？",

    hint: "比一比哪張臉部比較明亮、容易看清。",

    options: [
      ["A", "整體偏暗", "light-dark"],
      ["B", "柔和光線照到臉", "light-face"],
      ["C", "光主要在背後", "light-back"]
    ],

    answer: "B",
    answerText: "柔和光線照到臉",

    explain: "柔和的光照在人物臉上，通常更容易看清表情，也比較不會有刺眼的陰影。"
  },

  {
    stage: 1,
    goal: 1,
    type: "single",

    title: "哪個相機位置離玩偶最遠？",

    hint: "比較三個畫面中，相機與玩偶的距離。",

    options: [
      ["A", "從玩偶上方", "angle-high"],
      ["B", "在玩偶眼睛附近", "angle-eye"],
      ["C", "站在遠處拍", "angle-far"]
    ],

    answer: "C",
    answerText: "站在遠處拍",

    explain: "距離也是取景時的重要選擇。靠近有助於拍細節，退後則可能容納更多環境。"
  },


  // ====================================
  // 第三關：小小攝影師
  // ====================================

  {
    stage: 2,
    goal: 2,
    type: "single",

    title: "想把運動員的笑容拍清楚，哪張照片最適合？",

    hint: "觀察哪張能把表情呈現得最明顯。",

    options: [
      ["A", "臉部特寫", "sport-face"],
      ["B", "操場全景", "sport-wide"],
      ["C", "鞋子特寫", "sport-shoes"]
    ],

    answer: "A",
    answerText: "臉部特寫",

    explain: "特寫會讓觀眾更仔細看見表情與細節，適合呈現人物當下的心情。"
  },

  {
    stage: 2,
    goal: 2,
    type: "single",

    title: "想拍出運動鞋的細節，應該選哪張？",

    hint: "找找哪張照片讓鞋子佔比較大的畫面。",

    options: [
      ["A", "操場全景", "sport-wide"],
      ["B", "鞋子特寫", "sport-shoes"],
      ["C", "臉部特寫", "sport-face"]
    ],

    answer: "B",
    answerText: "鞋子特寫",

    explain: "特寫除了拍人物表情，也可以拍鞋子、相機、手部等物品細節。"
  },

  {
    stage: 2,
    goal: 2,
    type: "single",

    title: "想拍到同學正在一起參加活動，也保留一點周圍環境，哪張較適合？",

    hint: "這種拍法不用離主角太遠，也不只拍臉。",

    options: [
      ["A", "人物臉部特寫", "story-close"],
      ["B", "活動中景", "story-mid"],
      ["C", "活動場地全景", "story-wide"]
    ],

    answer: "B",
    answerText: "活動中景",

    explain: "中景可以同時呈現人物動作和一部分環境，很適合交代人物正在做什麼。"
  },

  {
    stage: 2,
    goal: 2,
    type: "single",

    title: "想讓沒到現場的人認識活動場地，先選哪一張？",

    hint: "先讓觀眾知道活動在哪裡發生。",

    options: [
      ["A", "表情特寫", "story-close"],
      ["B", "活動全景", "story-wide"],
      ["C", "活動中景", "story-mid"]
    ],

    answer: "B",
    answerText: "活動全景",

    explain: "全景能交代活動整體環境，讓觀眾先了解事件發生在哪裡。"
  },

  {
    stage: 2,
    goal: 2,
    type: "single",

    title: "如果攝影任務是『拍下同學開心的表情』，哪種景別最合適？",

    hint: "重點是看清楚臉部表情，不是整個場地。",

    options: [
      ["A", "活動中景", "story-mid"],
      ["B", "人物特寫", "story-close"],
      ["C", "活動全景", "story-wide"]
    ],

    answer: "B",
    answerText: "人物特寫",

    explain: "拍照前想好要表達的重點。如果重點是人物情緒，特寫通常比全景更直接。"
  },

  {
    stage: 2,
    goal: 2,
    type: "order",

    title: "換個說故事順序：先看表情，再看活動，最後才看場地！",

    hint: "請依『人物特寫 → 活動中景 → 場地全景』依序點選。",

    options: [
      ["A", "場地全景", "story-wide"],
      ["B", "活動中景", "story-mid"],
      ["C", "人物特寫", "story-close"]
    ],

    answer: "CBA",
    answerText: "C → B → A",

    explain: "照片的播放順序可以改變敘事方式。先用特寫吸引注意，再補上活動與環境，也是一種說故事的方法。"
  }

];


// ====================================
// 將新增的 16 題加入原本題庫
// ====================================

QUESTIONS.push(...EXTRA_QUESTIONS);


// ====================================
// 隨機打亂題目的工具
// ====================================

function shuffleQuestionIds(list) {

  const result = [...list];

  for (let i = result.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];

  }

  return result;

}


// ====================================
// 保存原本開始測驗的功能
// ====================================

const originalStartRound = startRound;


// ====================================
// 新增隨機抽題功能
// ====================================

startRound = function(ids) {

  // 如果是錯題再練，不重新抽題
  if (Array.isArray(ids)) {

    originalStartRound(ids);

    return;

  }


  // 每關抽題數量
  const plan = [
    [0, 3],
    [1, 3],
    [2, 2]
  ];

  const chosen = [];


  // 從各關卡題庫中隨機抽題
  for (const [stage, count] of plan) {

    const pool = QUESTIONS

      .map((q, index) => ({ q, index }))

      .filter(item => item.q.stage === stage)

      .map(item => item.index);


    const shuffled = shuffleQuestionIds(pool);

    chosen.push(...shuffled.slice(0, count));

  }


  // ====================================
  // 避免連續兩次出現完全相同的題組
  // ====================================

  const storageKey = "photoQuestPreviousQuestionSet_v1";

  try {

    const last = JSON.parse(
      localStorage.getItem(storageKey) || "[]"
    );

    const previousSet = new Set(last);

    const isSame = (
      last.length === chosen.length &&
      chosen.every(i => previousSet.has(i))
    );

    if (isSame) {

      const used = new Set(chosen);

      const alternate = QUESTIONS.findIndex(
        (q, i) => q.stage === 0 && !used.has(i)
      );

      if (alternate !== -1) {

        chosen[0] = alternate;

      }

    }


    localStorage.setItem(
      storageKey,
      JSON.stringify(chosen)
    );

  } catch (err) {

    // 無法使用 localStorage 時仍可抽題
    console.info("無法儲存上一輪題目：", err);

  }


  // ====================================
  // 開始本輪 8 題測驗
  // ====================================

  originalStartRound(chosen);

};


// ====================================
// 隨機題庫功能完成
// ====================================

console.log("攝影構圖小達人：24 題隨機題庫已載入！");
