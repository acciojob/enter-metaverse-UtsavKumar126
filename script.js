//your JS code here. If required.
const buttons=document.getElementById("enterBtn");

document.getElementById("enterBtn").addEventListener("click", func);


function  func() {
	const para=document.getElementById("status");
	para.remove();

	const headingTag=document.createElement("h1");
	headingTag.innerText="Entered Metaverse";
	headingTag.id="status"

	const bodyTag=document.getElementsByTagName("BODY")[0];
	bodyTag.insertBefore(headingTag,buttons);	
}