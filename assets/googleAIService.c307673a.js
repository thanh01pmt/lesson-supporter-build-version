var T;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(T||(T={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(b||(b={}));var N;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(N||(N={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=["user","model","function","system"];var M;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(M||(M={}));var x;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(x||(x={}));var G;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(G||(G={}));var L;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(L||(L={}));var v;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(v||(v={}));var D;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(D||(D={}));var F;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(F||(F={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class y extends h{constructor(e,n){super(e),this.response=n}}class K extends h{constructor(e,n,i,o){super(e),this.status=n,this.statusText=i,this.errorDetails=o}}class p extends h{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J="https://generativelanguage.googleapis.com",W="v1beta",X="0.20.0",Q="genai-js";var E;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(E||(E={}));class z{constructor(e,n,i,o,s){this.model=e,this.task=n,this.apiKey=i,this.stream=o,this.requestOptions=s}toString(){var e,n;const i=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||W;let s=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||J}/${i}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}function Z(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${Q}/${X}`),e.join(" ")}async function tt(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",Z(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let i=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(i){if(!(i instanceof Headers))try{i=new Headers(i)}catch(o){throw new p(`unable to convert customHeaders value ${JSON.stringify(i)} to Headers: ${o.message}`)}for(const[o,s]of i.entries()){if(o==="x-goog-api-key")throw new p(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new p(`Header name ${o} can only be set using the apiClient field`);n.append(o,s)}}return n}async function et(t,e,n,i,o,s){const r=new z(t,e,n,i,s);return{url:r.toString(),fetchOptions:Object.assign(Object.assign({},st(s)),{method:"POST",headers:await tt(r),body:o})}}async function I(t,e,n,i,o,s={},r=fetch){const{url:a,fetchOptions:u}=await et(t,e,n,i,o,s);return nt(a,u,r)}async function nt(t,e,n=fetch){let i;try{i=await n(t,e)}catch(o){it(o,t)}return i.ok||await ot(i,t),i}function it(t,e){let n=t;throw t instanceof K||t instanceof p||(n=new h(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function ot(t,e){let n="",i;try{const o=await t.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,i=o.error.details)}catch{}throw new K(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,i)}function st(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),A(t.candidates[0]))throw new y(`${f(t)}`,t);return rt(t)}else if(t.promptFeedback)throw new y(`Text not available. ${f(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),A(t.candidates[0]))throw new y(`${f(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),k(t)[0]}else if(t.promptFeedback)throw new y(`Function call not available. ${f(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),A(t.candidates[0]))throw new y(`${f(t)}`,t);return k(t)}else if(t.promptFeedback)throw new y(`Function call not available. ${f(t)}`,t)},t}function rt(t){var e,n,i,o;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const r of(o=(i=t.candidates)===null||i===void 0?void 0:i[0].content)===null||o===void 0?void 0:o.parts)r.text&&s.push(r.text),r.executableCode&&s.push("\n```"+r.executableCode.language+`
`+r.executableCode.code+"\n```\n"),r.codeExecutionResult&&s.push("\n```\n"+r.codeExecutionResult.output+"\n```\n");return s.length>0?s.join(""):""}function k(t){var e,n,i,o;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const r of(o=(i=t.candidates)===null||i===void 0?void 0:i[0].content)===null||o===void 0?void 0:o.parts)r.functionCall&&s.push(r.functionCall);if(s.length>0)return s}const at=[v.RECITATION,v.SAFETY,v.LANGUAGE];function A(t){return!!t.finishReason&&at.includes(t.finishReason)}function f(t){var e,n,i;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((i=t.candidates)===null||i===void 0)&&i[0]){const s=t.candidates[0];A(s)&&(o+=`Candidate was blocked due to ${s.finishReason}`,s.finishMessage&&(o+=`: ${s.finishMessage}`))}return o}function R(t){return this instanceof R?(this.v=t,this):new R(t)}function ct(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=n.apply(t,e||[]),o,s=[];return o={},r("next"),r("throw"),r("return"),o[Symbol.asyncIterator]=function(){return this},o;function r(l){i[l]&&(o[l]=function(c){return new Promise(function(d,_){s.push([l,c,d,_])>1||a(l,c)})})}function a(l,c){try{u(i[l](c))}catch(d){m(s[0][3],d)}}function u(l){l.value instanceof R?Promise.resolve(l.value.v).then(g,C):m(s[0][2],l)}function g(l){a("next",l)}function C(l){a("throw",l)}function m(l,c){l(c),s.shift(),s.length&&a(s[0][0],s[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function ut(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=ht(e),[i,o]=n.tee();return{stream:dt(i),response:lt(o)}}async function lt(t){const e=[],n=t.getReader();for(;;){const{done:i,value:o}=await n.read();if(i)return S(gt(e));e.push(o)}}function dt(t){return ct(this,arguments,function*(){const n=t.getReader();for(;;){const{value:i,done:o}=yield R(n.read());if(o)break;yield yield R(S(i))}})}function ht(t){const e=t.getReader();return new ReadableStream({start(i){let o="";return s();function s(){return e.read().then(({value:r,done:a})=>{if(a){if(o.trim()){i.error(new h("Failed to parse stream"));return}i.close();return}o+=r;let u=o.match(H),g;for(;u;){try{g=JSON.parse(u[1])}catch{i.error(new h(`Error parsing JSON response: "${u[1]}"`));return}i.enqueue(g),o=o.substring(u[0].length),u=o.match(H)}return s()})}}})}function gt(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const i of t){if(i.candidates)for(const o of i.candidates){const s=o.index;if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:o.index}),n.candidates[s].citationMetadata=o.citationMetadata,n.candidates[s].finishReason=o.finishReason,n.candidates[s].finishMessage=o.finishMessage,n.candidates[s].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[s].content||(n.candidates[s].content={role:o.content.role||"user",parts:[]});const r={};for(const a of o.content.parts)a.text&&(r.text=a.text),a.functionCall&&(r.functionCall=a.functionCall),a.executableCode&&(r.executableCode=a.executableCode),a.codeExecutionResult&&(r.codeExecutionResult=a.codeExecutionResult),Object.keys(r).length===0&&(r.text=""),n.candidates[s].content.parts.push(r)}}i.usageMetadata&&(n.usageMetadata=i.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t,e,n,i){const o=await I(e,E.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),i);return ut(o)}async function Y(t,e,n,i){const s=await(await I(e,E.GENERATE_CONTENT,t,!1,JSON.stringify(n),i)).json();return{response:S(s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function O(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return ft(e)}function ft(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let i=!1,o=!1;for(const s of t)"functionResponse"in s?(n.parts.push(s),o=!0):(e.parts.push(s),i=!0);if(i&&o)throw new h("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!i&&!o)throw new h("No content is provided for sending chat message.");return i?e:n}function pt(t,e){var n;let i={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=t.generateContentRequest!=null;if(t.contents){if(o)throw new p("CountTokensRequest must have one of contents or generateContentRequest, not both.");i.contents=t.contents}else if(o)i=Object.assign(Object.assign({},i),t.generateContentRequest);else{const s=O(t);i.contents=[s]}return{generateContentRequest:i}}function U(t){let e;return t.contents?e=t:e={contents:[O(t)]},t.systemInstruction&&(e.systemInstruction=P(t.systemInstruction)),e}function Et(t){return typeof t=="string"||Array.isArray(t)?{content:O(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Ct={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function mt(t){let e=!1;for(const n of t){const{role:i,parts:o}=n;if(!e&&i!=="user")throw new h(`First content should be with role 'user', got ${i}`);if(!w.includes(i))throw new h(`Each item should include role field. Got ${i} but valid roles are: ${JSON.stringify(w)}`);if(!Array.isArray(o))throw new h("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new h("Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const a of o)for(const u of j)u in a&&(s[u]+=1);const r=Ct[i];for(const a of j)if(!r.includes(a)&&s[a]>0)throw new h(`Content with role '${i}' can't contain '${a}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="SILENT_ERROR";class _t{constructor(e,n,i,o={}){this.model=n,this.params=i,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,i!=null&&i.history&&(mt(i.history),this._history=i.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var i,o,s,r,a,u;await this._sendPromise;const g=O(e),C={safetySettings:(i=this.params)===null||i===void 0?void 0:i.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,g]},m=Object.assign(Object.assign({},this._requestOptions),n);let l;return this._sendPromise=this._sendPromise.then(()=>Y(this._apiKey,this.model,C,m)).then(c=>{var d;if(c.response.candidates&&c.response.candidates.length>0){this._history.push(g);const _=Object.assign({parts:[],role:"model"},(d=c.response.candidates)===null||d===void 0?void 0:d[0].content);this._history.push(_)}else{const _=f(c.response);_&&console.warn(`sendMessage() was unsuccessful. ${_}. Inspect response object for details.`)}l=c}),await this._sendPromise,l}async sendMessageStream(e,n={}){var i,o,s,r,a,u;await this._sendPromise;const g=O(e),C={safetySettings:(i=this.params)===null||i===void 0?void 0:i.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,g]},m=Object.assign(Object.assign({},this._requestOptions),n),l=B(this._apiKey,this.model,C,m);return this._sendPromise=this._sendPromise.then(()=>l).catch(c=>{throw new Error($)}).then(c=>c.response).then(c=>{if(c.candidates&&c.candidates.length>0){this._history.push(g);const d=Object.assign({},c.candidates[0].content);d.role||(d.role="model"),this._history.push(d)}else{const d=f(c);d&&console.warn(`sendMessageStream() was unsuccessful. ${d}. Inspect response object for details.`)}}).catch(c=>{c.message!==$&&console.error(c)}),l}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(t,e,n,i){return(await I(e,E.COUNT_TOKENS,t,!1,JSON.stringify(n),i)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t,e,n,i){return(await I(e,E.EMBED_CONTENT,t,!1,JSON.stringify(n),i)).json()}async function Rt(t,e,n,i){const o=n.requests.map(r=>Object.assign(Object.assign({},r),{model:e}));return(await I(e,E.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),i)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,n,i={}){this.apiKey=e,this._requestOptions=i,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=P(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var i;const o=U(e),s=Object.assign(Object.assign({},this._requestOptions),n);return Y(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(i=this.cachedContent)===null||i===void 0?void 0:i.name},o),s)}async generateContentStream(e,n={}){var i;const o=U(e),s=Object.assign(Object.assign({},this._requestOptions),n);return B(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(i=this.cachedContent)===null||i===void 0?void 0:i.name},o),s)}startChat(e){var n;return new _t(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const i=pt(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return yt(this.apiKey,this.model,i,o)}async embedContent(e,n={}){const i=Et(e),o=Object.assign(Object.assign({},this._requestOptions),n);return vt(this.apiKey,this.model,i,o)}async batchEmbedContents(e,n={}){const i=Object.assign(Object.assign({},this._requestOptions),n);return Rt(this.apiKey,this.model,e,i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new h("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new q(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,i){if(!e.name)throw new p("Cached content must contain a `name` field.");if(!e.model)throw new p("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const r of o)if((n==null?void 0:n[r])&&e[r]&&(n==null?void 0:n[r])!==e[r]){if(r==="model"){const a=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,u=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(a===u)continue}throw new p(`Different value for "${r}" specified in modelParams (${n[r]}) and cachedContent (${e[r]})`)}const s=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new q(this.apiKey,s,i)}}const It="AIzaSyBWH3sEAncSjFxEnYiumkBmMSIGrhbZHMc",V=new Ot(It),At={temperature:.3,top_p:1,max_output_tokens:2048,response_mime_type:"text/plain"},St={temperature:1,topP:.4,topK:20,maxOutputTokens:8096,responseMimeType:"text/plain",responseSchema:{type:"object",properties:{id:{type:"string"},type:{type:"string",enum:["multiple_response","true_false","multiple_choice"]},question:{type:"string"},image:{type:"string"},options:{type:"array",items:{type:"object",properties:{text:{type:"string"},isCorrect:{type:"boolean"},image:{type:"string"}},required:["text","isCorrect"]}},metadata:{type:"object",properties:{bloomTaxonomy:{type:"string",enum:["remembering","understanding","applying"]},concepts:{type:"array",items:{type:"string"}},conceptDescription:{type:"string"},timeLimit:{type:"integer"},difficulty:{type:"string",enum:["very easy","easy","medium","hard","expert"]}},required:["bloomTaxonomy","concepts","difficulty"]},explanation:{type:"string"}},required:["id","type","question","options","metadata","explanation"]}},Tt={"Gemini 1.5 Flash":"gemini-1.5-flash","Gemini 1.5 Pro":"gemini-1.5-pro","Gemini 1.0 Pro":"gemini-1.0-pro","Text Embedding":"text-embedding-004",AQA:"aqa","Gemini 1.5 Pro Experimental":"gemini-1.5-pro-exp-0827","Gemini 1.5 Flash Experimental":"gemini-1.5-flash-exp-0827","Gemini 1.5 Flash-8B Experimental":"gemini-1.5-flash-8b-exp-0924","Gemini 2.0 Flash Exp":"gemini-2.0-flash-exp","Gemini Experimental 1206":"gemini-exp-1206"},bt=()=>({getAISuggestion:async e=>{try{return(await(await V.getGenerativeModel({model:"gemini-pro",generation_config:At}).generateContent(e)).response).text()}catch(n){return console.error("Chi ti\u1EBFt l\u1ED7i:",n),n.response&&(console.error("M\xE3 l\u1ED7i:",n.response.status),console.error("Th\xF4ng \u0111i\u1EC7p l\u1ED7i:",n.response.data)),"**Xin l\u1ED7i, t\xF4i kh\xF4ng th\u1EC3 \u0111\u01B0a ra g\u1EE3i \xFD l\xFAc n\xE0y. L\u1ED7i: "+n.message+"**"}}}),Nt=()=>({getAISuggestion:async e=>{try{const o=await(await V.getGenerativeModel({model:Tt["Gemini 2.0 Flash Exp"],generation_config:St,systemInstruction:`
B\u1EA1n l\xE0 m\u1ED9t chuy\xEAn gia thi\u1EBFt k\u1EBF \u0111\u1EC1 thi tr\u1EAFc nghi\u1EC7m m\xF4n Tin h\u1ECDc v\xE0 L\u1EADp tr\xECnh b\u1EB1ng ti\u1EBFng Vi\u1EC7t.
B\u1EA1n lu\xF4n thi\u1EBFt k\u1EBF c\xE1c c\xE2u h\u1ECFi tr\u1EAFc nghi\u1EC7m b\xE1m s\xE1t c\xE1c ti\xEAu ch\xED sau:

**Y\xEAu c\u1EA7u chung**

    *   C\xE2u h\u1ECFi ph\u1EA3i r\xF5 r\xE0ng, s\xFAc t\xEDch, s\u1EED d\u1EE5ng ng\xF4n ng\u1EEF chuy\xEAn m\xF4n ch\xEDnh x\xE1c.
    *   C\xE1c ph\u01B0\u01A1ng \xE1n nhi\u1EC5u ph\u1EA3i h\u1EE3p l\xFD, c\xF3 t\xEDnh ph\xE2n lo\u1EA1i, d\u1EF1a tr\xEAn c\xE1c l\u1ED7i sai th\u01B0\u1EDDng g\u1EB7p.
    *   \u0110\u1EA3m b\u1EA3o t\xEDnh ch\xEDnh x\xE1c, khoa h\u1ECDc v\xE0 c\u1EADp nh\u1EADt.
    *   \u0110\u1EA3m b\u1EA3o c\xE2u h\u1ECFi c\u1EA7n g\u1EAFn li\u1EC1n v\u1EDBi c\xE1c t\xECnh hu\u1ED1ng th\u1EF1c t\u1EBF, y\xEAu c\u1EA7u h\u1ECDc sinh v\u1EADn d\u1EE5ng ki\u1EBFn th\u1EE9c, k\u1EF9 n\u0103ng \u0111\u1EC3 gi\u1EA3i quy\u1EBFt v\u1EA5n \u0111\u1EC1 c\u1EE5 th\u1EC3. \u01AFu ti\xEAn c\xE1c b\xE0i to\xE1n, v\xED d\u1EE5 t\u1EEB c\xE1c \u1EE9ng d\u1EE5ng th\u1EF1c t\u1EBF c\u1EE7a tin h\u1ECDc, l\u1EADp tr\xECnh.
    *	  C\xE2u h\u1ECFi thu\u1ED9c v\xE0o m\u1ED9t trong 3 d\u1EA1ng sau: True/False, Multiple Choice, Multiple Response ki\u1EC3m tra m\u1EE9c \u0111\u1ED9 nh\u1EADn th\u1EE9c theo thang \u0111o Bloom.
    *   C\xE2u h\u1ECFi v\xE0 \u0111\xE1p \xE1n n\u1EBFu ch\u1EE9a m\xE3 l\u1EC7nh th\xEC PH\u1EA2I tr\xECnh b\xE0y \u1EDF d\u1EA1ng MARKDOWN code ph\xF9 h\u1EE3p.

** Y\xEAu c\u1EA7u cho t\u1EEBng d\u1EA1ng c\xE2u h\u1ECFi**

1. True/False
M\u1ED7i c\xE2u ph\xE1t bi\u1EC3u ph\u1EA3i r\xF5 r\xE0ng, d\u1EE9t kho\xE1t, ch\u1EC9 c\xF3 th\u1EC3 \u0111\xFAng ho\u1EB7c sai. Tr\xE1nh s\u1EED d\u1EE5ng ph\u1EE7 \u0111\u1ECBnh k\xE9p. G\u1EAFn li\u1EC1n v\u1EDBi t\xECnh hu\u1ED1ng/v\xED d\u1EE5 th\u1EF1c t\u1EBF n\u1EBFu c\xF3 th\u1EC3.

2. Multiple Choice
M\u1ED7i c\xE2u h\u1ECFi c\u1EA7n c\xF3 m\u1ED9t c\xE2u d\u1EABn r\xF5 r\xE0ng, 4 ph\u01B0\u01A1ng \xE1n tr\u1EA3 l\u1EDDi, trong \u0111\xF3 ch\u1EC9 c\xF3 1 ph\u01B0\u01A1ng \xE1n \u0111\xFAng duy nh\u1EA5t. C\xE1c ph\u01B0\u01A1ng \xE1n nhi\u1EC5u ph\u1EA3i h\u1EE3p l\xFD, c\xF3 t\xEDnh ph\xE2n lo\u1EA1i. \u01AFu ti\xEAn g\u1EAFn li\u1EC1n v\u1EDBi t\xECnh hu\u1ED1ng/v\xED d\u1EE5 th\u1EF1c t\u1EBF, y\xEAu c\u1EA7u h\u1ECDc sinh gi\u1EA3i quy\u1EBFt v\u1EA5n \u0111\u1EC1.

3. Multiple Response
M\u1ED7i c\xE2u h\u1ECFi c\u1EA7n c\xF3 m\u1ED9t c\xE2u d\u1EABn r\xF5 r\xE0ng, t\u1ED1i thi\u1EC3u 4 ph\u01B0\u01A1ng \xE1n tr\u1EA3 l\u1EDDi, trong \u0111\xF3 c\xF3 th\u1EC3 c\xF3 t\u1EEB 2 ph\u01B0\u01A1ng \xE1n \u0111\xFAng tr\u1EDF l\xEAn. C\xF3 th\u1EC3 ghi r\xF5 ho\u1EB7c kh\xF4ng ghi r\xF5 s\u1ED1 l\u01B0\u1EE3ng ph\u01B0\u01A1ng \xE1n \u0111\xFAng c\u1EA7n ch\u1ECDn. C\xE1c ph\u01B0\u01A1ng \xE1n nhi\u1EC5u ph\u1EA3i "kh\xF3 nh\u1EB1n", y\xEAu c\u1EA7u h\u1ECDc sinh ph\u1EA3i hi\u1EC3u s\xE2u ki\u1EBFn th\u1EE9c m\u1EDBi c\xF3 th\u1EC3 ph\xE2n bi\u1EC7t \u0111\u01B0\u1EE3c. \u01AFu ti\xEAn g\u1EAFn li\u1EC1n v\u1EDBi t\xECnh hu\u1ED1ng/v\xED d\u1EE5 th\u1EF1c t\u1EBF, y\xEAu c\u1EA7u h\u1ECDc sinh gi\u1EA3i quy\u1EBFt v\u1EA5n \u0111\u1EC1.


**L\u01B0u \xFD**

V\u1EDBi c\xE1c c\xE2u h\u1ECFi tr\u1EAFc nghi\u1EC7m c\xF3 s\u1EED d\u1EE5ng code. 
Code c\u1EA7n r\xF5 r\xE0ng, d\u1EC5 \u0111\u1ECDc, c\xF3 \u0111\u1ED9 d\xE0i v\u1EEBa ph\u1EA3i. C\xE2u h\u1ECFi c\xF3 th\u1EC3 y\xEAu c\u1EA7u h\u1ECDc sinh:
*   \u0110\u1ECDc hi\u1EC3u code v\xE0 x\xE1c \u0111\u1ECBnh ch\u1EE9c n\u0103ng, \u0111\u1EA7u ra.
*   T\xECm l\u1ED7i sai trong code (c\xFA ph\xE1p, logic).
*   D\u1EF1 \u0111o\xE1n k\u1EBFt qu\u1EA3 khi th\u1EF1c thi code.
*   L\u1EF1a ch\u1ECDn \u0111o\u1EA1n code ph\xF9 h\u1EE3p \u0111\u1EC3 gi\u1EA3i quy\u1EBFt m\u1ED9t v\u1EA5n \u0111\u1EC1 c\u1EE5 th\u1EC3.
*   Ho\xE0n thi\u1EC7n code c\xF2n thi\u1EBFu.


T\xEDnh ch\u1EA5t th\u1EF1c t\u1EBF c\u1EE7a c\xE2u h\u1ECFi.
Thi\u1EBFt k\u1EBF c\xE2u h\u1ECFi tr\u1EAFc nghi\u1EC7m y\xEAu c\u1EA7u h\u1ECDc sinh v\u1EADn d\u1EE5ng ki\u1EBFn th\u1EE9c, k\u1EF9 n\u0103ng \u0111\u1EC3 gi\u1EA3i quy\u1EBFt c\xE1c v\u1EA5n \u0111\u1EC1 trong t\xECnh hu\u1ED1ng th\u1EF1c t\u1EBF. H\xE3y \u0111\u01B0a ra c\xE1c b\xE0i to\xE1n, v\xED d\u1EE5 t\u1EEB c\xE1c \u1EE9ng d\u1EE5ng c\u1EE7a tin h\u1ECDc, l\u1EADp tr\xECnh trong \u0111\u1EDDi s\u1ED1ng.
M\xF4 t\u1EA3 t\xECnh hu\u1ED1ng m\u1ED9t c\xE1ch r\xF5 r\xE0ng, cung c\u1EA5p \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin c\u1EA7n thi\u1EBFt. C\xE2u h\u1ECFi c\u1EA7n y\xEAu c\u1EA7u h\u1ECDc sinh ph\xE2n t\xEDch t\xECnh hu\u1ED1ng, l\u1EF1a ch\u1ECDn gi\u1EA3i ph\xE1p, ho\u1EB7c d\u1EF1 \u0111o\xE1n k\u1EBFt qu\u1EA3 d\u1EF1a tr\xEAn ki\u1EBFn th\u1EE9c \u0111\xE3 h\u1ECDc.
`}).generateContent(e)).response;return console.log("Raw Response",o),o.text()}catch(n){return console.error("Chi ti\u1EBFt l\u1ED7i:",n),n.response&&(console.error("M\xE3 l\u1ED7i:",n.response.status),console.error("Th\xF4ng \u0111i\u1EC7p l\u1ED7i:",n.response.data)),"**Xin l\u1ED7i, t\xF4i kh\xF4ng th\u1EC3 \u0111\u01B0a ra g\u1EE3i \xFD l\xFAc n\xE0y. L\u1ED7i: "+n.message+"**"}}});export{Nt as a,bt as u};
