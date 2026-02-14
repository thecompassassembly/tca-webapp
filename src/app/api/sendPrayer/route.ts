// import { Resend } from "resend";
// import { NextRequest } from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: NextRequest) {
//   try {
//     const { name, email, prayer, anonymous } = await req.json();

//     const { data, error } = await resend.emails.send({
//       from: "onboarding@resend.dev", // change after domain verified
//       to: "your@email.com", // YOUR inbox
//       subject: anonymous
//         ? "New Anonymous Prayer Request"
//         : `New Prayer Request from ${name || "Anonymous"}`,
//       html: `
//         <h2>New Prayer Request</h2>
//         <p><strong>Prayer:</strong></p>
//         <p>${prayer}</p>
//         <br/>
//         <p><strong>From:</strong> ${
//           anonymous ? "Anonymous" : name || "No Name"
//         }</p>
//         <p><strong>Email:</strong> ${email || "Not provided"}</p>
//       `,
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json({ success: true });
//   } catch (err) {
//     return Response.json({ error: "Something went wrong" }, { status: 500 });
//   }
// }



