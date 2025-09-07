declare global {
  interface Window {
    FORMSPREE_ENDPOINT: string;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form") as HTMLFormElement;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch(window.FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        alert("✅ Your message has been sent!");
        form.reset();
      } else {
        alert("⚠️ Something went wrong.");
      }
    } catch {
      alert("❌ Network error.");
    }
  });
});
