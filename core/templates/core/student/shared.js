/* ══ DATA ══ */
const COURSES=[
  {id:'en1',lang:'en',title:'Verbs & Tenses',sub:'English Grammar · Module 1',prog:80,tag:'tag-en',emoji:'🇬🇧',sections:[{icon:'fa-book',title:'Overview',content:'This module covers all 12 tenses in English: <strong>Simple, Continuous, Perfect, and Perfect Continuous</strong> forms — both active and passive.'},{icon:'fa-pen',title:'Key Rules',content:'<ul><li>Simple Present: <strong>I walk / She walks</strong></li><li>Present Continuous: <strong>I am walking</strong></li><li>Past Simple: <strong>I walked</strong></li><li>Future Simple: <strong>I will walk</strong></li><li>Present Perfect: <strong>I have walked</strong></li></ul>'},{icon:'fa-lightbulb',title:'Exercises',content:'Complete exercises 1–5 in your workbook, pages 34–40. Focus on choosing the correct tense based on context clues.'}]},
  {id:'en2',lang:'en',title:'Speaking Skills',sub:'English Communication · Module 2',prog:65,tag:'tag-en',emoji:'🇬🇧',sections:[{icon:'fa-microphone',title:'Overview',content:'Oral communication techniques: <strong>pronunciation, fluency, intonation</strong>, and conversational strategies for B1 level.'},{icon:'fa-comments',title:'Practice Topics',content:'<ul><li>Describing people and places</li><li>Expressing opinions and agreeing/disagreeing</li><li>Narrating past events</li><li>Making plans and suggestions</li></ul>'},{icon:'fa-headphones',title:'Listening Drill',content:'Listen to Unit 4 audio (15 min) and answer comprehension questions. Focus on <strong>natural connected speech</strong>.'}]},
  {id:'fr1',lang:'fr',title:'Grammaire Française',sub:'Français B1 · Module 3',prog:72,tag:'tag-fr',emoji:'🇫🇷',sections:[{icon:'fa-book',title:'Contenu',content:'Ce module couvre les <strong>temps du subjonctif, le conditionnel</strong>, les accords grammaticaux et la concordance des temps.'},{icon:'fa-pen',title:'Points Clés',content:'<ul><li>Subjonctif présent : <strong>que je sois, que tu aies</strong></li><li>Conditionnel présent : <strong>je serais, tu aurais</strong></li><li>Accord du participe passé</li></ul>'},{icon:'fa-lightbulb',title:'Exercices',content:'Faire les exercices pages 55–62 du manuel. Revoir aussi les <strong>pronoms relatifs composés</strong>.'}]},
  {id:'fr2',lang:'fr',title:'Expression Écrite',sub:'Français B1 · Module 4',prog:55,tag:'tag-fr',emoji:'🇫🇷',sections:[{icon:'fa-pen-nib',title:'Contenu',content:'Rédaction de <strong>lettres formelles, essais argumentatifs</strong> et synthèses de documents.'},{icon:'fa-list',title:'Structure',content:'<ul><li>Introduction : accroche + problématique</li><li>Développement : 2–3 arguments avec exemples</li><li>Conclusion : synthèse + ouverture</li></ul>'},{icon:'fa-pencil',title:'Devoir',content:'Rédiger un essai de 200 mots sur : <strong>"Les avantages et inconvénients des réseaux sociaux"</strong>. À remettre mercredi.'}]}
];
const HOMEWORK=[
  {id:'hw1',lang:'en',title:'Irregular Verbs List',sub:'English Grammar — Due Wednesday',due:'due',dueLabel:'Due Wednesday',tag:'tag-hw-en',emoji:'📚',sections:[{icon:'fa-list',title:'Assignment',content:'Memorize and write 3 example sentences for each of the <strong>50 irregular verbs</strong> on the provided list.'},{icon:'fa-star',title:'Tip',content:'Group verbs by pattern: <strong>cut/cut/cut</strong>, <strong>run/ran/run</strong>. Patterns are easier to remember than individual words.'}]},
  {id:'hw2',lang:'en',title:'Reading: The Guardian',sub:'English Reading — Due Friday',due:'pending',dueLabel:'Due Friday',tag:'tag-hw-en',emoji:'📰',sections:[{icon:'fa-newspaper',title:'Task',content:'Read the article "How languages shape our world" and answer the 8 comprehension questions provided.'},{icon:'fa-pencil',title:'Written Response',content:'Write a short paragraph (80–100 words) summarising the author\'s main argument in <strong>your own words</strong>.'}]},
  {id:'hw3',lang:'fr',title:'Essai Argumentatif',sub:'Expression Écrite — À remettre mercredi',due:'due',dueLabel:'Mercredi',tag:'tag-hw-fr',emoji:'✍️',sections:[{icon:'fa-pen-nib',title:'Sujet',content:'Rédigez un essai de <strong>200 à 250 mots</strong> sur : "Les avantages et les inconvénients des réseaux sociaux pour les jeunes."'},{icon:'fa-check-double',title:'Critères',content:'<ul><li>Structure correcte (intro, développement, conclusion)</li><li>Connecteurs logiques</li><li>Richesse du vocabulaire</li><li>Orthographe et grammaire</li></ul>'}]},
  {id:'hw4',lang:'fr',title:'Exercices – Subjonctif',sub:'Grammaire · Déjà rendu',due:'ok',dueLabel:'Submitted ✓',tag:'tag-hw-fr',emoji:'📝',sections:[{icon:'fa-check-circle',title:'Statut',content:'Ce devoir a été <strong>rendu et corrigé</strong>. Note : <span style="color:var(--green);font-weight:600">15/20</span>. Très bon travail !'}]}
];
const NOTIFS=[
  {id:1,cat:'absence',read:false,av:'K',cls:'r',title:'Absence recorded — Wed Apr 2',sub:'English Grammar · Room A1 · 16:00–18:00',name:'Mme. Karima Benali',role:'Secretary — Attendance Office',time:'Today, 10:05 AM',greeting:'Dear Oumaima,',intro:'An <strong>absence has been recorded</strong> for the following session:',details:[{i:'fa-calendar',t:'Date: Wednesday, April 2nd, 2026'},{i:'fa-book',t:'Subject: English Grammar'},{i:'fa-clock',t:'Time: 16:00–18:00'},{i:'fa-door-open',t:'Room: A1'},{i:'fa-chalkboard-teacher',t:'Teacher: Prof. Laurent'}],notes:['This is your <strong>1st recorded absence</strong> this month.','Provide a justification document within <strong>3 working days</strong>.']},
  {id:2,cat:'secretary',read:false,av:'K',cls:'b',title:'Payment received — 4 500 DA',sub:'French Course — March 2026',name:'Mme. Karima Benali',role:'Secretary — Payments Office',time:'Today, 09:30 AM',greeting:'Dear Oumaima,',intro:'Your <strong>payment has been received</strong> Luminafully:',details:[{i:'fa-calendar',t:'Date: April 8th, 2026'},{i:'fa-money-bill-wave',t:'Amount: 4 500 DA'},{i:'fa-receipt',t:'Reference: PAY-2026-0412'}],notes:['Your account is now <strong>fully up to date</strong>. Thank you!']},
  {id:3,cat:'teacher',read:false,av:'L',cls:'g',title:'New grade posted — 17.5/20',sub:'Grammar Test #1 · Prof. Laurent',name:'Prof. Laurent',role:'English Teacher — B1 Group',time:'Yesterday, 04:15 PM',greeting:'Dear Oumaima,',intro:'Your grade for <strong>Grammar Test #1</strong> has been posted:',details:[{i:'fa-star',t:'Grade: 17.5 / 20'},{i:'fa-calendar',t:'Session: March 2026'},{i:'fa-trophy',t:'Rank: Top of the class'}],notes:['Excellent work! Minor improvement needed on <strong>passive voice</strong>.']},
  {id:4,cat:'teacher',read:false,av:'M',cls:'a',title:'HW correction: Subjonctif — 15/20',sub:'French Grammaire · Prof. Martin',name:'Prof. Martin',role:'French Teacher — B1 Group',time:'Yesterday, 11:00 AM',greeting:'Dear Oumaima,',intro:'Your homework on <strong>Subjonctif</strong> has been corrected:',details:[{i:'fa-star',t:'Grade: 15 / 20'},{i:'fa-pen',t:'Strong conjugation accuracy'},{i:'fa-triangle-exclamation',t:'Agreement errors in sentences 4 & 7'}],notes:['Review <strong>participe passé agreements</strong> before the final exam.']},
  {id:5,cat:'system',read:false,av:'⚙',cls:'p',title:'Schedule update — Exam rescheduled',sub:'B2 Exam · Friday Apr 18 → 14:00',name:'Lumina Academy System',role:'Automated Notification',time:'Today, 08:00 AM',greeting:'Dear Oumaima,',intro:'Your exam schedule has been <strong>updated</strong>:',details:[{i:'fa-calendar',t:'Old time: Friday Apr 18 · 10:00–12:00'},{i:'fa-clock',t:'New time: Friday Apr 18 · 14:00–16:00'},{i:'fa-door-open',t:'Room: B3 (unchanged)'}],notes:['Please update your calendar accordingly.']}
];

/* ══ SIDEBAR ══ */
let shut=false;
function toggleSB(){shut=!shut;document.getElementById('sb').classList.toggle('shut',shut)}

/* ══ NOTIFICATIONS ══ */
function renderNotifList(){
  const unread=NOTIFS.filter(n=>!n.read).length;
  const badge=document.getElementById('bellBadge');
  if(badge)badge.textContent=unread||'0';
  const ndList=document.getElementById('ndList');
  if(ndList)ndList.innerHTML=NOTIFS.map(n=>`
    <div class="nd-item${n.read?'':' unread'}" onclick="openMsg(${n.id})">
      <div class="nd-dot ${n.cls}">${typeof n.av==='string'&&n.av.length===1?`<i class="fas ${iconFor(n.cls)}"></i>`:n.av}</div>
      <div><div class="nd-p">${n.title}</div><div class="nd-t"><i class="fas fa-clock"></i> ${n.time}</div></div>
    </div>`).join('');
}
function iconFor(c){return{b:'fa-file-lines',r:'fa-clipboard-list',g:'fa-chalkboard-teacher',a:'fa-pen',p:'fa-gear'}[c]||'fa-bell'}
function toggleNotif(){document.getElementById('nDrop').classList.toggle('open')}
document.addEventListener('click',e=>{const nd=document.getElementById('nDrop');if(nd&&!e.target.closest('.tb-notif-wrap'))nd.classList.remove('open')});
function markRead(){NOTIFS.forEach(n=>n.read=true);renderNotifList();toast('All notifications marked as read.','fa-check-double','var(--b3)')}

function openMsg(id){
  const n=NOTIFS.find(x=>x.id===id);if(!n)return;
  n.read=true;renderNotifList();
  const nd=document.getElementById('nDrop');if(nd)nd.classList.remove('open');
  document.getElementById('mmAv').textContent=n.av;
  document.getElementById('mmName').textContent=n.name;
  document.getElementById('mmRole').textContent=n.role;
  document.getElementById('mmTime').textContent=n.time;
  const details=n.details.map(d=>`<div class="mm-dr"><i class="fas ${d.i}"></i><span>${d.t}</span></div>`).join('');
  const notes=n.notes.map(t=>`<p class="mm-note">${t}</p>`).join('');
  document.getElementById('mmBody').innerHTML=`<p style="margin-bottom:.7rem;color:var(--text)">${n.greeting}</p><p style="margin-bottom:.2rem;line-height:1.65">${n.intro}</p><div class="mm-detail">${details}</div>${notes}`;
  document.getElementById('msgOverlay').classList.add('open');
}
function closeMsgModal(){document.getElementById('msgOverlay').classList.remove('open')}

/* ══ LOGOUT ══ */
function openLogout(){document.getElementById('logoutOverlay').classList.add('open')}
function closeLogout(){document.getElementById('logoutOverlay').classList.remove('open')}
function confirmLogout(){
  document.getElementById('logoutOverlay').classList.remove('open');
  toast('Logged out. Goodbye, Oumaima!','fa-right-from-bracket','var(--b3)');
  setTimeout(()=>window.location.href='logout.html',1800);
}

/* ══ TOAST ══ */
function toast(msg,icon,color){
  document.getElementById('tm').textContent=msg;
  const ic=document.getElementById('ti');ic.className='fas '+(icon||'fa-check-circle');ic.style.color=color||'var(--b3)';
  const t=document.getElementById('toast');t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),3400);
}

/* ══ PARENT PIN ══ */
const PARENT_PIN='1234';
let pinInput='';
let payUnlocked=false;

function openPinModal(){
  pinInput='';updatePinDots();
  document.getElementById('pinError').textContent='';
  document.getElementById('pinOverlay').style.display='flex';
}
function closePinModal(){document.getElementById('pinOverlay').style.display='none';pinInput='';updatePinDots()}
function pinPress(d){
  if(pinInput.length>=4)return;
  pinInput+=d;updatePinDots();
  if(pinInput.length===4){
    setTimeout(()=>{
      if(pinInput===PARENT_PIN){
        payUnlocked=true;
        closePinModal();
        document.getElementById('payLockBanner').style.display='none';
        document.getElementById('payContent').style.display='block';
        toast('Parent access granted','fa-shield-halved','var(--green)');
      } else {
        document.querySelectorAll('.pin-dot').forEach(d=>d.classList.add('error'));
        document.getElementById('pinError').textContent='Incorrect PIN. Please try again.';
        setTimeout(()=>{pinInput='';updatePinDots();document.querySelectorAll('.pin-dot').forEach(d=>d.classList.remove('error'));},900);
      }
    },200);
  }
}
function pinDel(){if(pinInput.length>0){pinInput=pinInput.slice(0,-1);updatePinDots()}}
function updatePinDots(){
  for(let i=0;i<4;i++){
    const d=document.getElementById('pd'+i);
    if(d)d.classList.toggle('filled',i<pinInput.length);
  }
}
function lockPayments(){
  payUnlocked=false;
  const banner=document.getElementById('payLockBanner');
  const content=document.getElementById('payContent');
  if(banner)banner.style.display='flex';
  if(content)content.style.display='none';
  toast('Section locked','fa-lock','var(--muted)');
}

/* ══ PDF ══ */
function stripHTML(html){const d=document.createElement('div');d.innerHTML=html;return d.innerText||d.textContent||''}
function downloadLessonPDF(data){
  if(!data)return;
  const{jsPDF}=window.jspdf;
  const doc=new jsPDF({unit:'mm',format:'a4'});
  const blue=[22,102,188];const dark=[12,33,64];const muted=[107,138,168];const light=[235,245,253];
  const W=210,M=18,TW=W-M*2;
  doc.setFillColor(...blue);doc.rect(0,0,W,42,'F');
  doc.setFont('helvetica','bold');doc.setFontSize(10);doc.setTextColor(255,255,255);doc.setGState(doc.GState({opacity:.6}));
  doc.text('Lumina ACADEMY',M,13);doc.setGState(doc.GState({opacity:1}));
  doc.setFontSize(20);doc.setTextColor(255,255,255);doc.text(data.title,M,26);
  doc.setFontSize(9);doc.setFont('helvetica','normal');doc.setTextColor(200,225,250);doc.text(data.sub,M,34);
  doc.setFontSize(8);doc.setTextColor(200,225,250);const dt=new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
  doc.text(dt,W-M,13,{align:'right'});
  let y=52;
  data.sections.forEach(s=>{
    if(y>270){doc.addPage();y=18;}
    doc.setFillColor(...light);doc.roundedRect(M,y-4,TW,8,2,2,'F');
    doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(...dark);
    doc.text(s.title,M+4,y+2);y+=12;
    doc.setFont('helvetica','normal');doc.setFontSize(9.5);doc.setTextColor(...muted);
    const plain=stripHTML(s.content);
    const lines=doc.splitTextToSize(plain,TW-4);
    lines.forEach(line=>{if(y>282){doc.addPage();y=18;}doc.text(line,M+4,y);y+=5.5;});
    y+=6;
  });
  const pages=doc.getNumberOfPages();
  for(let p=1;p<=pages;p++){
    doc.setPage(p);doc.setFillColor(245,250,252);doc.rect(0,287,W,10,'F');
    doc.setFontSize(7.5);doc.setFont('helvetica','normal');doc.setTextColor(...muted);
    doc.text('Lumina Academy — Student Portal',M,293);
    doc.text(`Page ${p} / ${pages}`,W-M,293,{align:'right'});
  }
  doc.save(`${data.title.replace(/\s+/g,'_')}.pdf`);
  toast(`PDF downloaded: ${data.title}`,'fa-file-pdf','var(--b3)');
}

/* ══ INIT ══ */
document.addEventListener('DOMContentLoaded',()=>renderNotifList());
