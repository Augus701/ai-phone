export default async function handler(req, res) {
  const response = await fetch("https://api.retellai.com/create-web-call", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 你的RETELL_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      agent_id: "agent_e2dfe17e28b46166ea55f071f5"
    })
  });

  const data = await response.json();

  res.status(200).json(data);
}
