import{f as i}from"./Dnd51l0P.js";import{a as u,H as f,U as c,J as l,Q as d}from"./bJE-s1Db.js";const m=u({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:s}=d(),{default:o}=f(),r=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:o,tags:r,parent:s}},render({use:t,unwrap:s,fallbackSlot:o,tags:r,parent:n}){var a;try{let e=t;return typeof t=="string"&&(e=(n==null?void 0:n.slots[t])||((a=n==null?void 0:n.parent)==null?void 0:a.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),e?s?i(e(),r):[e()]:o?o():l("div")}catch{return l("div")}}}),_=m;export{_};
