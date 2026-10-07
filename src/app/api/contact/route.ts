import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { persona, data } = body;

    if (!persona || !data) {
      return NextResponse.json(
        { success: false, error: "Missing required persona or data payload" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // Compile subject and structured HTML template
    let subject = "";
    let htmlContent = "";
    let replyToEmail = "";

    if (persona === "recruiter") {
      const company = data.company || "Company";
      const role = data.role || "Software Engineering";
      const engagement = data.engagementType || "Full-time";
      replyToEmail = data.recruiterEmail || "";

      subject = `[Recruitment] ${role} Opportunity at ${company} (${engagement})`;
      htmlContent = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8f5f5; border: 1px solid #cfc6c7; border-radius: 12px; color: #443235;">
          <h2 style="margin-top: 0; color: #443235; border-bottom: 1px solid #cfc6c7; padding-bottom: 12px;">💼 New Recruitment Opportunity</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #654a4e; width: 140px;">Company:</td>
              <td style="padding: 8px 0; color: #443235;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #654a4e;">Role Title:</td>
              <td style="padding: 8px 0; color: #443235;">${role} (${engagement})</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #654a4e;">Job Spec / URL:</td>
              <td style="padding: 8px 0; color: #443235;"><a href="${data.jobIdOrUrl}" style="color: #916a70;">${data.jobIdOrUrl || "N/A"}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #654a4e;">Recruiter Email:</td>
              <td style="padding: 8px 0; color: #443235;"><a href="mailto:${replyToEmail}" style="color: #916a70;">${replyToEmail || "N/A"}</a></td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #ffffff; border: 1px solid #cfc6c7; border-radius: 8px;">
            <p style="font-weight: bold; margin-top: 0; margin-bottom: 6px; color: #654a4e;">Description / Note:</p>
            <p style="margin: 0; color: #443235; white-space: pre-wrap;">${data.jobDesc || "No additional description provided."}</p>
          </div>
        </div>
      `;
    } else if (persona === "freelance") {
      const pType = data.projectType || "Full-Stack Project";
      const timeframe = data.timeframe || "Standard";
      const budget = data.budget || "TBD";
      replyToEmail = data.freelanceEmail || "";

      subject = `[Freelance Inquiry] ${pType} (${budget}) — ${timeframe}`;
      htmlContent = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8f5f5; border: 1px solid #cfc6c7; border-radius: 12px; color: #443235;">
          <h2 style="margin-top: 0; color: #443235; border-bottom: 1px solid #cfc6c7; padding-bottom: 12px;">⚡ New Freelance Project Commission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #654a4e; width: 140px;">Project Type:</td>
              <td style="padding: 8px 0; color: #443235;">${pType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #654a4e;">Timeline:</td>
              <td style="padding: 8px 0; color: #443235;">${timeframe}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #654a4e;">Estimated Budget:</td>
              <td style="padding: 8px 0; color: #443235;">${budget}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #654a4e;">Client Email:</td>
              <td style="padding: 8px 0; color: #443235;"><a href="mailto:${replyToEmail}" style="color: #916a70;">${replyToEmail || "N/A"}</a></td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #ffffff; border: 1px solid #cfc6c7; border-radius: 8px;">
            <p style="font-weight: bold; margin-top: 0; margin-bottom: 6px; color: #654a4e;">Project Scope & Deliverables:</p>
            <p style="margin: 0; color: #443235; white-space: pre-wrap;">${data.freelanceScope || "No scope provided."}</p>
          </div>
        </div>
      `;
    } else {
      const name = data.collabName || "Fellow Builder";
      const paid = data.collabPaid || "Unpaid / Hackathon";
      const stack = data.collabStack || "AI / Fullstack";
      replyToEmail = data.collabEmail || "";

      subject = `[Collaboration] Project Collaboration with ${name} (${paid})`;
      htmlContent = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8f5f5; border: 1px solid #cfc6c7; border-radius: 12px; color: #443235;">
          <h2 style="margin-top: 0; color: #443235; border-bottom: 1px solid #cfc6c7; padding-bottom: 12px;">🤝 Collaboration Invitation</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #654a4e; width: 140px;">Collaborator:</td>
              <td style="padding: 8px 0; color: #443235;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #654a4e;">Structure:</td>
              <td style="padding: 8px 0; color: #443235;">${paid}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #654a4e;">Stack / Role:</td>
              <td style="padding: 8px 0; color: #443235;">${stack}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #654a4e;">Repo / Link:</td>
              <td style="padding: 8px 0; color: #443235;"><a href="${data.collabRepo}" style="color: #916a70;">${data.collabRepo || "N/A"}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #654a4e;">Contact Handle:</td>
              <td style="padding: 8px 0; color: #443235;">${replyToEmail || "N/A"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #ffffff; border: 1px solid #cfc6c7; border-radius: 8px;">
            <p style="font-weight: bold; margin-top: 0; margin-bottom: 6px; color: #654a4e;">The Vision / Pitch:</p>
            <p style="margin: 0; color: #443235; white-space: pre-wrap;">${data.collabPitch || "No pitch provided."}</p>
          </div>
        </div>
      `;
    }

    // If RESEND_API_KEY is configured, dispatch live email via Resend SDK
    if (apiKey) {
      const resend = new Resend(apiKey);
      const { data: resendData, error: resendError } = await resend.emails.send({
        from: "Ritam Portfolio <onboarding@resend.dev>",
        to: "ritam413@gmail.com",
        replyTo: replyToEmail || undefined,
        subject: subject,
        html: htmlContent,
      });

      if (resendError) {
        return NextResponse.json({ success: false, error: resendError.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, id: resendData?.id });
    }

    // Fallback in case RESEND_API_KEY is not yet in .env (development mode)
    return NextResponse.json({
      success: true,
      simulated: true,
      message: "Inquiry recorded in simulation mode. Add RESEND_API_KEY to send live emails.",
    });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error occurred" },
      { status: 500 }
    );
  }
}
