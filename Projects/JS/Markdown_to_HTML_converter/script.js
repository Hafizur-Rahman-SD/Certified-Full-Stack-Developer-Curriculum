
function convertMarkdown(){

  // Get user input
  let text =
  document.getElementById("markdown-input").value;


  // Heading level 3
  text = text.replace(
    /^### (.*)$/gm,
    "<h3>$1</h3>"
  );

  // Heading level 2
  text = text.replace(
    /^## (.*)$/gm,
    "<h2>$1</h2>"
  );

  // Heading level 1
  text = text.replace(
    /^# (.*)$/gm,
    "<h1>$1</h1>"
  );

  // Bold **text**
  text = text.replace(
    /\*\*(.*?)\*\*/g,
    "<strong>$1</strong>"
  );

  // Italic *text*
  text = text.replace(
    /\*(.*?)\*/g,
    "<em>$1</em>"
  );

  // Links
  text = text.replace(
    /\[(.*?)\]\((.*?)\)/g,
    '<a href="$2">$1</a>'
  );

  // Images
  text = text.replace(
    /!\[(.*?)\]\((.*?)\)/g,
    '<img src="$2" alt="$1">'
  );

  // Blockquote
  text = text.replace(
    /^> (.*)$/gm,
    "<blockquote>$1</blockquote>"
  );

  return text;
}



//  Convert Button 
document
.getElementById("convert-btn")
.onclick = function(){

  let html = convertMarkdown();

  // Show HTML code
  document
  .getElementById("html-output")
  .textContent = html;

  // Show preview
  document
  .getElementById("preview")
  .innerHTML = html;

};



//  Clear Button

document
.getElementById("clear-btn")
.onclick = function(){

  document
  .getElementById("markdown-input")
  .value = "";

  document
  .getElementById("html-output")
  .textContent = "";

  document
  .getElementById("preview")
  .innerHTML = "";

};



//Copy HTML Button 

document
.getElementById("copy-btn")
.onclick = function(){

  let html =
  document.getElementById("html-output")
  .textContent;

  navigator.clipboard.writeText(html);

  alert("HTML copied!");

};



// Dark Mode Toggle 

document
.getElementById("theme-toggle")
.onclick = function(){

  document.body.classList.toggle("light");

};