
        (function() {
            // ----- DOM elements -----
            const input = document.getElementById('markdown-input');
            const htmlOutput = document.getElementById('html-output');
            const preview = document.getElementById('preview');
            const themeBtn = document.getElementById('toggle-theme');
            const clearBtn = document.getElementById('clear');
            const toolbar = document.querySelector('.toolbar');

            // ----- simple markdown parser (educational / lightweight) -----
            function parseMarkdown(md) {
                if (!md) return '';

                let html = md
                    // escape HTML tags (prevent injection)
                    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                    // headings: # H1
                    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
                    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                    // bold: **text**
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')z
                    // italic: *text*
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                    // links: [text](url)
                    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>')
                    // image: ![alt](src)
                    .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" style="max-width:100%">')
                    // blockquote: > quote
                    .replace(/^&gt; (.*$)/gm, '<blockquote>$1</blockquote>')
                    // handle line breaks (basic)
                    .replace(/\n/g, '<br>');

                // fix potential double <br> inside blocks (simple clean)
                html = html.replace(/<\/h1><br>/g, '</h1>')
                           .replace(/<\/h2><br>/g, '</h2>')
                           .replace(/<\/h3><br>/g, '</h3>')
                           .replace(/<\/blockquote><br>/g, '</blockquote>');
                return html;
            }

            // ----- update both output & preview -----
            function updatePreview() {
                const raw = input.value;
                const parsed = parseMarkdown(raw);
                htmlOutput.innerText = parsed;      // raw html as text
                preview.innerHTML = parsed;          // rendered html
            }

            // ----- insert markdown syntax around text (toolbar) -----
            function insertSyntax(syntaxBefore, syntaxAfter, defaultText = '') {
                const start = input.selectionStart;
                const end = input.selectionEnd;
                const selected = input.value.substring(start, end) || defaultText;

                const newText = input.value.substring(0, start) + 
                                syntaxBefore + selected + syntaxAfter + 
                                input.value.substring(end);

                input.value = newText;
                input.focus();
                // set cursor after inserted (optional)
                const newCursor = start + syntaxBefore.length + selected.length + syntaxAfter.length;
                input.setSelectionRange(newCursor, newCursor);
                updatePreview();
            }

            // ----- event listeners for toolbar buttons -----
            toolbar.addEventListener('click', (e) => {
                const btn = e.target.closest('button');
                if (!btn) return;
                const action = btn.dataset.action;

                if (btn.id === 'clear') {
                    input.value = '';
                    updatePreview();
                    return;
                }

                // map actions to syntax
                switch (action) {
                    case 'h1': insertSyntax('# ', ''); break;
                    case 'h2': insertSyntax('## ', ''); break;
                    case 'h3': insertSyntax('### ', ''); break;
                    case 'bold': insertSyntax('**', '**', 'bold text'); break;
                    case 'italic': insertSyntax('*', '*', 'italic'); break;
                    case 'link': insertSyntax('[', '](https://)', 'link text'); break;
                    case 'image': insertSyntax('![', '](https://image.url)', 'alt text'); break;
                    case 'quote': insertSyntax('> ', ''); break;
                    default: return;
                }
            });

            // real-time update on input
            input.addEventListener('input', updatePreview);

            // clear button
            clearBtn.addEventListener('click', () => {
                input.value = '';
                updatePreview();
            });

            // theme toggle
            themeBtn.addEventListener('click', () => {
                document.body.classList.toggle('dark');
                themeBtn.innerText = document.body.classList.contains('dark') ? '☀️ Light mode' : '🌙 Dark mode';
            });

            // initial parse (example already inside textarea)
            updatePreview();
        })();