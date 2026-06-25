import React, {useState} from "react";
import "./App.css";
import {useTranslation} from "react-i18next";


function App(){


const {t,i18n}=useTranslation();


const [changing,setChanging]=useState(false);



const changeLanguage=(lng)=>{


setChanging(true);



setTimeout(()=>{


i18n.changeLanguage(lng);


setChanging(false);



},400);



}





const date =

new Intl.DateTimeFormat(

i18n.language,

{

dateStyle:"long"

}

).format(new Date());





const number =

new Intl.NumberFormat(

i18n.language

).format(1234567.89);






return(


<div className="app">



<div className={

changing ?

"page transition"

:

"page"

}>


<section className="header">


<div className="company">

TASKFLOW GLOBAL TECHNOLOGIES

</div>



<h1>

{t("app.title")}

</h1>




<p className="subtitle">

{t("app.subtitle")}

</p>




<div className="status">

● Plataforma Online

</div>



</section>







<section className="dashboard">





<div className="card">

<span>

Idioma

</span>


<strong>

{i18n.language}

</strong>


</div>







<div className="card">


<span>

Data do Sistema

</span>


<strong>

{date}

</strong>


</div>






<div className="card">


<span>

Processamento

</span>


<strong>

{number}

</strong>


</div>




</section>








<section className="language-box">


<h3>

{t("app.select_language")}

</h3>



<div>


<button

onClick={()=>changeLanguage("pt-BR")}

>

Português

</button>



<button

onClick={()=>changeLanguage("en-US")}

>

English

</button>


</div>



</section>



</div>




<footer>

TASKFLOW ENTERPRISE SYSTEM © 2026

</footer>



</div>



)



}


export default App;