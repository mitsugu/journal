document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".secret").forEach(secret => {

        // 表示用ラベル
        const label = secret.dataset.label || "not safe";

        // トグル用ボタン
        const toggle = document.createElement("button");
        toggle.type = "button";
        toggle.className = "secret-toggle";
        toggle.textContent = label;
        toggle.setAttribute("aria-expanded", "false");

        // secret の直前に配置
        secret.parentNode.insertBefore(toggle, secret);

        // 初期状態は非表示
        secret.classList.remove("is-visible");

        // クリック・タップで切り替え
        toggle.addEventListener("click", () => {
            const visible = secret.classList.toggle("is-visible");

            toggle.classList.toggle("is-visible", visible);
            toggle.setAttribute("aria-expanded", String(visible));
        });
    });
});

// 使い方
//includeHTMLSecure('header-placeholder', 'parts/header.html');
function includeHTMLSecure(placeholderId, filePath) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) {
		console.error("Not Found place holder ID!!");
		return;
	}

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.text();
        })
        .then(htmlText => {
console.log("取得したHTML:", htmlText);
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');

            const content = doc.body.querySelector('.caution');

            if (content) {
                placeholder.replaceWith(content);
            }
        })
        .catch(error => {
            console.error('HTML include error:', error);
        });
}
includeHTMLSecure("caution","header.html");
