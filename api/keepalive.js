export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://pennywise-8eh3.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: "a@a.com",
          password: "pass123"
        })
      }
    );

    res.status(200).json({
      status: response.status,
      time: new Date().toISOString()
    });

  } catch (err) {
    res.status(500).json({
      error: err.message,
      time: new Date().toISOString()
    });
  }
}
