import { createStitchHtmlResponse } from "../_stitch/renderHtml";

export const dynamic = "force-static";

export function GET() {
  return createStitchHtmlResponse("contact_joyful_edition");
}
