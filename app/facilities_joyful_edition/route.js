import { createStitchHtmlResponse } from "../_stitch/renderHtml";

export const dynamic = "force-static";

export function GET() {
  return createStitchHtmlResponse("facilities_joyful_edition");
}
