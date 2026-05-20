async function sendMessage() {

  const message = document.getElementById("message").value;

  const response = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  const data = await response.json();

  document.getElementById("response").innerHTML =
      data.content[0].text;
}