<!DOCTYPE html>
<html>

<head>
	<title>Word2CleanHTML</title>

	<script src="tinymce/tinymce.min.js"></script>
	<script src="tinymce/TinyMCE-js-beautify/js/lib/beautify-html.js"></script>
	<script src="filesaverjs/fileSaver.js"></script>

	<style>
		select {
			width: 100%;
		}

		table#detailsSection {
			background-color: rgb(250, 235, 193);
		}

		table#detailsSection td:first-child {
			font-weight: bold;
			font-style: italic;
			text-align: right;
		}

		table#detailsSection td:first-child::after {
			content: ":";
		}

		table#detailsSection td#posttitle {
			background-color: white;
		}

		table#detailsSection td#posttitle:empty {
			font-style: italic;
		}

		table#detailsSection .editable[data-placeholder]:empty:not(:focus):not([data-div-placeholder-content]):before {
			content: attr(data-placeholder);
			float: left;
			margin-left: 2px;
			color: #b3b3b3;
		}

		body {
			margin: 0;
			background-color: rgb(235, 229, 217);
			height: 100vh;
		}

		section {
			width: 96vw;
			margin-left: auto;
			margin-right: auto;
		}

		section>h3 {
			font-style: italic;
			margin-bottom: 0;
		}

		#title {
			width: 100%;
		}
	</style>
</head>

<body>
	<!--TIMELINE TABLE SECTION-->
	<section>
		<table id="detailsSection" style="border-color: #556677; font-size: small;" border="1">
			<tbody>
				<tr class="posttitle">
					<td>Title</td>
					<td id="posttitle" contenteditable="true" class='editable' data-placeholder='Title?'></td>
				</tr>
				<tr class="category">
					<td>Category</td>
					<td>
						<select name="Category" id="category" multiple>
							<!-- <option value="">--Choose Category--</option> -->
							<option value="[Angel of Yahweh]">Angel of Yahweh</option>
							<option value="[Fall of Man]">Fall of Man</option>
							<option value="[The LAW]">The Law</option>
							<option value="[Parables]">Parables</option>
							<option value="[General_Resources]">General Resources</option>
							<option value="[Timeline]">Bible Timelines</option>
							<option value="[BibleNodeGraph]">BibleNodeGraph</option>
						</select>
					</td>
				</tr>
				<tr class="layout">
					<td>Layout</td>
					<td>
						<select name="layout" id="layout">
							<option value="">--Choose Layout--</option>
							<option value="angelOfYahwehTEMPLATE-1">Angel of Yahweh-1</option>
							<option value="angelOfYahwehTEMPLATE-2">Angel of Yahweh-2</option>
							<option value="fallOfManTEMPLATE">Fall of Man</option>
							<option value="theLawTEMPLATE">The Law</option>
							<option value="parablesTEMPLATE">Parables</option>
							<option value="generalResourcesTEMPLATE">General Resources</option>
							<option value="bibleStoryLineCREATOR">BibleStoryLine</option>
							<option value="bibleNodeGraph-1">BibleNodeGraph</option>
						</select>
					</td>
				</tr>
				<tr class="postdate">
					<td>Date</td>
					<td>
						<input id="postdate" type="date" name="postdate">
					</td>
					<td>
						<!-- <a target="_blank" href="https://github.com/LightCityTeachingFellowship/BibleStudies"> -->
						<button onclick="uploadClick()">UPLOAD</button>
						<!-- </a> -->
					</td>
				</tr>
			</tbody>
		</table>
		<h3>MSWord-2-CleanHTML </h3>
		<textarea id="timelinetable" class="timeline" placeholder="Hello..."></textarea>
	</section>
</body>
<!--TinyMCE Script-->
<script>
	tinymce.init({
		selector: "#timelinetable",
		height: 400,
		plugins: [
			"advlist autolink link image lists charmap print preview hr anchor pagebreak ",
			"searchreplace wordcount visualblocks visualchars insertdatetime media nonbreaking",
			"table directionality emoticons paste code"
		],
		external_plugins: {
			"codebeautify": "TinyMCE-js-beautify/TinyMCEplugin/plugin.js"
		},
		toolbar1: "table | undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect | link unlink anchor | image media | forecolor backcolor | print preview code | codebeautify",
		// toolbar2: "codebeautify",
		image_advtab: true,
	});
</script>

<!-- TO CREATE AND UPLOAD FILE TO LIGHTCITY GITHUB REPOSITORY -->
<script>
	//COPY AND PASTE TO POSTTITLE WITHOUT FORMATTING
	posttitle.addEventListener("paste", function (e) {
		// cancel paste
		e.preventDefault();

		// get text representation of clipboard
		var text = e.clipboardData.getData("text/plain");

		// insert text manually
		document.execCommand("insertHTML", false, text);
	});

	function saveDynamicDataToFile() {
		var selectCategory = document.querySelector('#category');

		var layoutValue = document.getElementById("layout").value;
		var posttitleValue = document.getElementById("posttitle").innerText;
		// For single selection
		// var categoryValue = document.getElementById("category").value;
		// For multiple selections
		var categoryValue = [];
		for (var option of selectCategory) {
			if (option.selected) {
				categoryValue.push(option.value);
			}
		}
		var dateValue = document.getElementById("postdate").value;

		if ((!layoutValue) || (!posttitleValue) || (!categoryValue) || (!dateValue)) {
			alert("!!! PLEASE FILL IN ALL DETAILS !!!");
			return false;
		} else {
			var filename = posttitleValue + `.html`;

			var jekyllFrontMatter =
				`---` + `
layout: ` + layoutValue + `
title: "` + posttitleValue + `"` + `
categories: ` + categoryValue + `
date: ` + dateValue + `
---

`;
			//Non-Beautified Code
			var contents = tinymce.activeEditor.getContent();

			//Beautified Code
			var HtmlCode = contents;
			var beautified_HtmlCode = contents;

			if (typeof (html_beautify) === "function") {
				options = {
					"indent_size": 4
				};
				// HtmlCode = HtmlCode.replace(/<([a-zA-Z0-9]*)>[ \r\n\\s]*[&nbsp;]*[ \r\n\\s]*<\/\1>/gi, '');
				HtmlCode = HtmlCode.replace(/<(span)>[ \r\n\\s]*&nbsp;[ \r\n\\s]*<\/\1>/gi, '');
				HtmlCode = HtmlCode.replace(/<(strong)>[ \r\n\\s]*&nbsp;[ \r\n\\s]*<\/\1>/gi, '');
				HtmlCode = HtmlCode.replace(/<(p)>[ \r\n\\s]*&nbsp;[ \r\n\\s]*<\/\1>/gi, '');
				HtmlCode = HtmlCode.replace(/(<td width="\d+\.*\d*(%|px)*")/gi, '<td');
				HtmlCode = HtmlCode.replace(/<li>&nbsp;<\/li>/gi, ''); //remove empty li tags
				HtmlCode = HtmlCode.replace(/<li(\s+[a-zA-Z]+\s*=\s*("([^"]*)"|'([^']*)'))*\s*>/gi,
				'<li>'); //Remove attributes and styles from lists
				HtmlCode = HtmlCode.replace(/<\/li>[\r\n]*[\\s]*<\/ol>[\r\n]*[\\s]*<ol>/gi, '');
				HtmlCode = HtmlCode.replace(/(<\/ol>[\r\n]*[\\s]*)(<li>)/gi, '</li>');
				HtmlCode = HtmlCode.replace(/<\/ol>[\r\n\\s]*<ol>/gi, '');
				HtmlCode = HtmlCode.replace(/<\/li>([\r\n]*[\\s]*<ol>)/gi, '');
				HtmlCode = HtmlCode.replace(/<a [a-zA-Z0-9_-]*="[a-zA-Z0-9_-]*"><\/a>/gi, '');

				HtmlCode = html_beautify(HtmlCode, options); //BEAUTIFY THE HTML

				HtmlCode = HtmlCode.replace(/<\/em>[\r\n]*[\\s]*[ ]*/gi,
				'</em>'); //Correct error in Beautifier which breaks the to another line after </em>
				HtmlCode = HtmlCode.replace(
					/(<\/li>[\r\n]*)([\\s]*<\/ol>[\r\n]*[\\s]*<ul>[\r\n]*[\\s]*)([ ]*<li>.*?<\/li>[\r\n]*)*[\\s]*<\/ul>/gi,
					'</ol>');

				beautified_HtmlCode = HtmlCode;
			}

			//Non-Beautified
			// var xyz = jekyllFrontMatter + contents;

			//Beautified
			var xyz = jekyllFrontMatter + beautified_HtmlCode;

			var blob = new Blob([xyz], {
				type: "text/plain;charset=utf-8"
			});
			saveAs(blob, filename);
			console.log(xyz);

			//open LightCity Github Repository in another browser tab
			window.open('https://github.com/LightCityTeachingFellowship/BibleStudies');
		}
	}
</script>

<script>
	function uploadClick() {
		saveDynamicDataToFile();
		return true;
	}
</script>

</html>
