async function submitData() {
  const data = {
    clientID: document.getElementById("clientID").value,
    password: document.getElementById("password").value,
    PropertyID: document.getElementById("propertyID").value,
    price: document.getElementById("price").value,
    status: document.getElementById("status").value
  };

  await fetch("YOUR_N8N_WEBHOOK_URL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  alert("Updated!");
}
