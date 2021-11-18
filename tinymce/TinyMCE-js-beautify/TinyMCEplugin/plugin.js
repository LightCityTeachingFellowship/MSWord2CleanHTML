// An extended source code plugin viewer for TinyMCE
// Uses jsbeautifier http://jsbeautifier.org/
// P.J.Lawrence July 2014
//
// (1) add to web page script link to beautify-html.js, for example
//      <script src="/<path to>/TinyMCE-js-beautify/js/beautify-html.js"></script>
// (2) add external plugin to tinymce.init code block, for example
//      external_plugins: {
//          "codebeautify": "/<path to>/TinyMCE-js-beautify/TinyMCEplugin/plugin.js"
//      },
// (3) optionaly add to tool bar, for example
//      toolbar: "codebeautify"
// 
//
tinymce.PluginManager.add("codebeautify", function (e) {
    function o() {
        var o = e.windowManager.open({
            title: "Source code beautify",
            body: {
                type: "textbox",
                name: "codebeautify",
                multiline: !0,
                minWidth: e.getParam("code_dialog_width", 600),
                minHeight: e.getParam("code_dialog_height", Math.min(tinymce.DOM.getViewPort().h - 200, 500)),
                spellcheck: !1,
                style: "direction: ltr; text-align: left"
            },
            onSubmit: function (o) {
                e.focus(), e.undoManager.transact(function () {
                    e.setContent(o.data.codebeautify)
                }), e.selection.setCursorLocation(), e.nodeChanged()
            }
        });

        var HtmlCode = e.getContent({
            source_view: !0
        });
        if (typeof (html_beautify) === "function") {
            options = {
                "indent_size": 4
            };
            // HtmlCode = HtmlCode.replace(/<([a-zA-Z0-9]*)>[ \r\n\\s]*[&nbsp;]*[ \r\n\\s]*<\/\1>/gi, '');
            HtmlCode = HtmlCode.replace(/<(span)>[ \r\n\\s]*&nbsp;[ \r\n\\s]*<\/\1>/gi, '');
            HtmlCode = HtmlCode.replace(/<(strong)>[ \r\n\\s]*&nbsp;[ \r\n\\s]*<\/\1>/gi, '');
            HtmlCode = HtmlCode.replace(/<(p)>[ \r\n\\s]*&nbsp;[ \r\n\\s]*<\/\1>/gi, '');
            HtmlCode = HtmlCode.replace(/(<td width="\d+\.*\d*(%|px)*")/gi, '<td');
            HtmlCode = HtmlCode.replace(/<li>&nbsp;<\/li>/gi, '');//remove empty li tags
            HtmlCode = HtmlCode.replace(/<li(\s+[a-zA-Z]+\s*=\s*("([^"]*)"|'([^']*)'))*\s*>/gi, '<li>');//Remove attributes and styles from lists
            HtmlCode = HtmlCode.replace(/<\/li>[\r\n]*[\\s]*<\/ol>[\r\n]*[\\s]*<ol>/gi, '');
            HtmlCode = HtmlCode.replace(/(<\/ol>[\r\n]*[\\s]*)(<li>)/gi, '$1</li>$2');
            HtmlCode = HtmlCode.replace(/<\/ol>[\r\n\\s]*<ol>/gi, '');
            HtmlCode = HtmlCode.replace(/<\/li>([\r\n]*[\\s]*<ol>)/gi, '$1');
            HtmlCode = HtmlCode.replace(/<a [a-zA-Z0-9_-]*="[a-zA-Z0-9_-]*"><\/a>/gi, '');
            
            HtmlCode = html_beautify(HtmlCode, options);//BEAUTIFY THE HTML
                        
            HtmlCode = HtmlCode.replace(/<\/em>[\r\n]*[\\s]*[ ]*/gi, '</em>');//Correct error in Beautifier which breaks the to another line after </em>
            HtmlCode = HtmlCode.replace(/(<\/li>[\r\n]*)([\\s]*<\/ol>[\r\n]*[\\s]*<ul>[\r\n]*[\\s]*)([ ]*<li>.*<\/li>[\r\n]*)*[\\s]*<\/ul>/gi, '$1$3</ol>');

            console.log(HtmlCode);
        }
        o.find("#codebeautify").value(HtmlCode)
    }
    e.addButton("codebeautify", {
        icon: "code",
        tooltip: "Source code beautify",
        onclick: o
    }), e.addMenuItem("code beautify", {
        icon: "code",
        text: "Source code beautify",
        context: "tools",
        onclick: o
    })
});
