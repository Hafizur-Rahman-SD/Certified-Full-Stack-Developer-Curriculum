function convertMarkdown() {

  let text = document.getElementById("markdown-input").value;

  // heading level 3
  text = text.replace(/^### (.*)$/gm, "<h3>$1</h3>");

  // heading level 2
  text = text.replace(/^## (.*)$/gm, "<h2>$1</h2>");

  // heading level 1
  text = text.replace(/^# (.*)$/gm, "<h1>$1</h1>");

  // images
  text = text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  // links
  text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // bold **text**
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // bold __text__
  text = text.replace(/__(.*?)__/g, "<strong>$1</strong>");

  // italic *text*
  text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // italic _text_
  text = text.replace(/_(.*?)_/g, "<em>$1</em>");

  // quote
  text = text.replace(/^> (.*)$/gm, "<blockquote>$1</blockquote>");

  // remove newline
  text = text.replace(/\n/g, "");

  return text;
}


document
  .getElementById("markdown-input")
  .addEventListener("input", function () {

    let html = convertMarkdown();

    document.getElementById("html-output").textContent = html;

    document.getElementById("preview").innerHTML = html;

  });