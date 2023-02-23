import type { NextApiRequest, NextApiResponse } from "next";
import { NotionAPI } from "notion-client";

const notion = new NotionAPI();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const recordMap = await notion.getPage(id as string);
  res.send(recordMap);
}
