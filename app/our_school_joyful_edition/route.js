import { createStitchHtmlResponse } from "../_stitch/renderHtml";

export const dynamic = "force-static";

export function GET() {
  return createStitchHtmlResponse("our_school_joyful_edition");
}
