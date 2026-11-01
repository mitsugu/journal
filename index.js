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
