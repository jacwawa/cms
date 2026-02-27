const page = document.body.getAttribute("data-page");
if (page) {
  document.querySelectorAll('.nav a[data-page]').forEach((link) => {
    if (link.getAttribute('data-page') === page) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

if (page === "snippets") {
  const copySvg =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 8h11v13H8z"></path><path d="M5 3h11v3h-2V5H7v10H5z"></path></svg>';

  const copyText = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.focus();
    area.select();
    document.execCommand("copy");
    area.remove();
  };

  document.querySelectorAll(".content pre").forEach((pre) => {
    const wrapper = document.createElement("div");
    wrapper.className = "code-block";
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy-btn";
    button.setAttribute("aria-label", "Copy snippet");
    button.innerHTML = `${copySvg}<span>Copy</span>`;
    wrapper.appendChild(button);

    button.addEventListener("click", async () => {
      try {
        await copyText(pre.textContent);
        button.classList.add("copied");
        button.querySelector("span").textContent = "Copied";
      } catch (_error) {
        button.querySelector("span").textContent = "Failed";
      }

      window.setTimeout(() => {
        button.classList.remove("copied");
        button.querySelector("span").textContent = "Copy";
      }, 1400);
    });
  });
}
