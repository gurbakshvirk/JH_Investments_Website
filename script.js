// Add the business owner's verified contact details before publishing.
const JH_CONTACT = {
  phone: "", // digits only, including country code, e.g. 91XXXXXXXXXX
  email: ""
};
document.querySelectorAll("[data-whatsapp]").forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    if(JH_CONTACT.phone) window.open(`https://wa.me/${JH_CONTACT.phone}`,"_blank");
    else alert("WhatsApp contact number is not configured yet. Please contact the website administrator.");
  });
});
const form=document.getElementById("enquiryForm");
if(form){
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(form).entries());
    if(!JH_CONTACT.phone){
      document.getElementById("formMessage").textContent="The enquiry is ready, but the business WhatsApp number has not been added yet. Please configure it in script.js.";
      return;
    }
    const message=`JH INVESTMENTS - Website Enquiry\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email||"Not provided"}\nService: ${data.service}\nMessage: ${data.message}`;
    window.open(`https://wa.me/${JH_CONTACT.phone}?text=${encodeURIComponent(message)}`,"_blank");
  });
}
document.getElementById("year").textContent=new Date().getFullYear();
const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".navlinks");
if(toggle&&nav)toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"×":"☰";});
document.querySelectorAll(".navlinks a").forEach(a=>a.addEventListener("click",()=>{nav?.classList.remove("open");toggle?.setAttribute("aria-expanded","false");if(toggle)toggle.textContent="☰";}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".faq-question").forEach(button=>button.addEventListener("click",()=>button.parentElement.classList.toggle("open")));
