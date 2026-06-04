export default async function handler(req, res) {
  try {
    res.status(200).json({
      success: true,
      message: "API正常运行"
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
