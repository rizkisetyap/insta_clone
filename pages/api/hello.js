// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  res.status(200).json({ name: process.env.GOOGLE_CLIENT_SECRET });
}
