import{Q as f}from"./QPage.2c5497be.js";import{u as y}from"./use-quasar.5b0abd5e.js";import{r as t,X as _,a9 as C,a7 as o,q as c,bs as w,a4 as b,Y as k,Z as q}from"./index.949c8ed2.js";import{C as h}from"./ContentRenderer.23fcfae6.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import{u as R}from"./quizStore.5f809549.js";import"./index.597e99e0.js";import"./QSpinnerDots.5d1ac0b4.js";import"./QImg.ccc15ca5.js";import"./BlockRenderer.a82bea7e.js";const x={class:"q-pa-md"},Q={class:"q-mt-xl"},T={class:"q-mt-md"},z={__name:"ContentRendererDemo",setup(l){const s=t(`# Demo Content Renderer
  
  ## 1. Text th\u01B0\u1EDDng v\xE0 Markdown c\u01A1 b\u1EA3n
  \u0110\xE2y l\xE0 v\u0103n b\u1EA3n th\xF4ng th\u01B0\u1EDDng \u0111\u01B0\u1EE3c vi\u1EBFt b\u1EB1ng **Markdown**.
  - H\u1ED7 tr\u1EE3 *in nghi\xEAng*
  - H\u1ED7 tr\u1EE3 **in \u0111\u1EADm**
  - H\u1ED7 tr\u1EE3 ***in \u0111\u1EADm nghi\xEAng***
  - H\u1ED7 tr\u1EE3 [links](https://example.com)
  
  ## 2. Code Blocks
  ### JavaScript
  \`\`\`javascript
  // Comment in JavaScript
  const greeting = "Hello World";
  function sayHello() {
      console.log(greeting);
  }
  sayHello();
  \`\`\`
  
  ### Python
  \`\`\`python
  # Comment in Python
  def factorial(n):
      if n == 0:
          return 1
      return n * factorial(n - 1)
  
  print(factorial(5))  # Output: 120
  \`\`\`
  
  ### SQL
  \`\`\`sql
  SELECT users.name, orders.order_date
  FROM users
  JOIN orders ON users.id = orders.user_id
  WHERE orders.status = 'completed'
  ORDER BY orders.order_date DESC;
  \`\`\`

  ### Scratch
\`\`\`scratch
move (10) steps
turn cw (15) degrees
turn cw (15) degrees
turn cw (15) degrees
turn ccw (15) degrees
turn ccw (15) degrees
turn ccw (15) degrees
point in direction (90 v)
point towards [ v]
\`\`\`
  
  ## 3. Inline Code
  - \u0110\u1EC3 khai b\xE1o bi\u1EBFn trong JavaScript, b\u1EA1n c\xF3 th\u1EC3 s\u1EED d\u1EE5ng \`const\`, \`let\` ho\u1EB7c \`var\`
  - Trong Python, b\u1EA1n c\xF3 th\u1EC3 s\u1EED d\u1EE5ng \`def\` \u0111\u1EC3 \u0111\u1ECBnh ngh\u0129a h\xE0m
  - C\xE2u l\u1EC7nh SQL: \`SELECT * FROM users\`
  
  ## 4. Media URLs
  ### YouTube Videos
  https://www.youtube.com/watch?v=dQw4w9WgXcQ
  
  ### Vimeo Videos
  https://vimeo.com/148751763
  
  ### Images
  https://picsum.photos/800/400
  https://picsum.photos/800/401
  
  ## 5. K\u1EBFt h\u1EE3p nhi\u1EC1u lo\u1EA1i n\u1ED9i dung
  \u0110o\u1EA1n v\u0103n n\xE0y k\u1EBFt h\u1EE3p text th\u01B0\u1EDDng v\u1EDBi \`inline code\` v\xE0 [link](https://example.com).
  
  \`\`\`python
  # Code block trong \u0111o\u1EA1n v\u0103n
  print("Hello from Python!")
  \`\`\`
  
  Ti\u1EBFp t\u1EE5c v\u0103n b\u1EA3n sau code block. D\u01B0\u1EDBi \u0111\xE2y l\xE0 m\u1ED9t h\xECnh \u1EA3nh:
  https://picsum.photos/800/402`),n=t(`# Th\u1EED nghi\u1EC7m
  
  H\xE3y th\u1EED nh\u1EADp n\u1ED9i dung c\u1EE7a b\u1EA1n \u1EDF \u0111\xE2y.
  V\xED d\u1EE5:
  - Text th\u01B0\u1EDDng
  - \`inline code\`
  - Code blocks
  - URLs c\u1EE7a video/h\xECnh \u1EA3nh`);return(r,e)=>(_(),C("div",x,[e[3]||(e[3]=o("h5",null,"Content Renderer Demo",-1)),c(h,{content:s.value},null,8,["content"]),o("div",Q,[e[2]||(e[2]=o("h6",null,"Test Editor",-1)),c(w,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=i=>n.value=i),type:"textarea",filled:"",autogrow:"",label:"Nh\u1EADp n\u1ED9i dung \u0111\u1EC3 test"},null,8,["modelValue"]),o("div",T,[e[1]||(e[1]=o("h6",null,"K\u1EBFt qu\u1EA3:",-1)),c(h,{content:n.value},null,8,["content"])])])]))}};var I=g(z,[["__scopeId","data-v-4da1a8c9"]]);const E={name:"TestPage",components:{ContentRendererDemo:I},setup(){const l=R(),s=t(""),n=t({}),r=t([]),e=y(),i=t(!1),u=t(!1),v=t(!1);function m(a){if(!a)return null;const{questions:d,...p}=a;return p.school||(p.school="TEKY"),p}return{quizId:s,quizInfo:n,questions:r,fetchQuiz:async()=>{try{const d=(await l.fetchQuizById(s.value)).data;r.value=Object.values(d.questions),n.value=m(d),console.log(r.value)}catch(a){console.error("L\u1ED7i khi t\u1EA3i b\xE0i ki\u1EC3m tra:",a),e.notify({type:"negative",message:"L\u1ED7i khi t\u1EA3i b\xE0i ki\u1EC3m tra. Vui l\xF2ng th\u1EED l\u1EA1i."})}},createQuizInfo:m,showCorrectAnswer:i,showFeedback:u,showQuizInfoPanel:v}}},P={class:"row col-12"},S={class:"col"};function D(l,s,n,r,e,i){const u=b("ContentRendererDemo");return _(),k(f,{class:"q-pa-md"},{default:q(()=>[o("div",P,[o("div",S,[c(u)])])]),_:1})}var K=g(E,[["render",D],["__scopeId","data-v-e6e42428"]]);export{K as default};
