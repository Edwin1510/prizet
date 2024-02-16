

import "./Prizecard.css"
const data = [
{
pack:"FREE",
title:"$0/month",
s1:"Single User",
s2:"50GB Storage",
s3:"Unlimited Public Project",
s4:"Community Access",
s5:"Unlimited Private Project",
s6:"Dedicated Phone Support",
s7:"Free subdomain",
s8:"Monthly Status Report", 
},
{
pack:"PLUS",
title:"$9/month",
s1:"Single User",
s2:"50GB Storage",
s3:"Unlimited Public Project",
s4:"Community Access",
s5:"Unlimited Private Project",
s6:"Dedicated Phone Support",
s7:"Free subdomain",
s8:"Monthly Status Report", 
},
{
pack:"pro",
title:"$49/month",
s1:"Single User",
s2:"50GB Storage",
s3:"Unlimited Public Project",
s4:"Community Access",
s5:"Unlimited Private Project",
s6:"Dedicated Phone Support",
s7:"Free subdomain",
s8:"Monthly Status Report", 
},
];
const Card=(props)=>{
const click=(e)=>{
console.log(e)
alert("prize free") 
};
return(
<div className="card">
<h7>{props.pack}</h7>
<h3>{props.title}</h3>
<i class="fa-solid fa-check"></i>{props.s1}
<br></br>
<br></br>
<i className="fa-solid fa-check " ></i> {props.s2}
<br></br>
<br></br>
<i className="fa-solid fa-check"></i> {props.s2}

<br></br>
<br></br>
<i class="fa-solid fa-check"></i> {props.s4}
<br></br>
<br></br>
<div className="blur">
<i class="fa-solid fa-xmark"></i> {props.s5}
</div>
<br></br>
<br></br>
<div className="blur">
<i class="fa-solid fa-xmark"></i> {props.s6}
</div>
<br></br>
<br></br>
<div className="blur">
<i class="fa-solid fa-xmark"></i>{props.s7}
</div>
<br></br>
<br></br>
<div className="blur">
<i class="fa-solid fa-xmark"></i> {props.s8}
</div>
<br></br>
<br></br>
<button onClick={click}>Button</button>
</div>
)
}
const Card1=(props)=>{
    const click=(e)=>{
    console.log(e)
    alert("$ 9 prize") 
    };
    return(
    <div className="card">
    <h7>{props.pack}</h7>
    <h3>{props.title}</h3>
    <i class="fa-solid fa-check"></i>{props.s1}
    <br></br>
    <br></br>
    <i className="fa-solid fa-check " ></i> {props.s2}
    <br></br>
    <br></br>
    <i className="fa-solid fa-check"></i> {props.s2}
    
    <br></br>
    <br></br>
    <i class="fa-solid fa-check"></i> {props.s4}
    <br></br>
    <br></br>
    <i class="fa-solid fa-check"></i> {props.s5}
    <br></br>
    <br></br>
    
    <i class="fa-solid fa-check"></i> {props.s6}
    
    <br></br>
    <br></br>
    <i class="fa-solid fa-check"></i>{props.s7}
    <br></br>
    <br></br>
    <div className="blur">
    <i class="fa-solid fa-xmark"></i> {props.s8}
    </div>
    <br></br>
    <br></br>
    <button onClick={click}>Button</button>
    </div>
    )
    }
    const Card2=(props)=>{
        const click=(e)=>{
        console.log(e)
        alert("$40prize") 
        };
        return(
        <div className="card">
        <h7>{props.pack}</h7>
        <h3>{props.title}</h3>
        <i class="fa-solid fa-check"></i>{props.s1}
        <br></br>
        <br></br>
        <i className="fa-solid fa-check " ></i> {props.s2}
        <br></br>
        <br></br>
        <i className="fa-solid fa-check"></i> {props.s2}
        
        <br></br>
        <br></br>
        <i class="fa-solid fa-check"></i> {props.s4}
        <br></br>
        <br></br>
        <i class="fa-solid fa-check"></i> {props.s5}
        <br></br>
        <br></br>
        
        <i class="fa-solid fa-check"></i> {props.s6}
        
        <br></br>
        <br></br>
        <i class="fa-solid fa-check"></i> {props.s7}
        <br></br>
        <br></br>
        <i class="fa-solid fa-check" ></i> {props.s8}
        <br></br>
        <br></br>
        <button onClick={click}>Button</button>
        </div>
        )
        }
const Cards=()=>{
return(
<div className="cards">
<Card {...data[0]}/>
<Card1 {...data[1]}/>
<Card2 {...data[2]}/>
</div>
)
}
export default Cards
