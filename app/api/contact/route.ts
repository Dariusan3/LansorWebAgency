import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const {
        first_name,
        last_name,
        email,
        telefon,
        company_name,
        help,
        info,
      } = await req.json();

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "dariusosadici@gmail.com",
          pass: "jtvk jtbj wsuv onbg",
        },
      });

      const mailOptions = {
        from: email,
        to: "dariusosadici@gmail.com",
        subject: "Contact Form Submission",
        html: `
                    <h1>Contact Form</h1>
                    <p>Prenume: ${first_name}</p>
                    <p>Nume: ${last_name}</p>
                    <p>Email: ${email}</p>
                    <p>Telefon: ${telefon}</p>
                
                    <p>Numele Companiei: ${company_name}</p>
                    <p>Help: ${help}</p>
                
                    <p>Info: ${info}</p>
                `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json("email has been sent");
    } catch (error) {
      return NextResponse.json("email has not been sent");
    }
  } else {
    return NextResponse.json("method not allowed");
  }
}
