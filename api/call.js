export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.retellai.com/create-web-call", {
      method: "POST",
      headers: {
        "Authorization": "Bearer key_52dbeff1e5132ef0b9559041560a",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        agent_id: "agent_e2dfe17e28b46166ea55f071f5"
      })
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
