import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    // Server-side logging / email integration point
    console.log("📩 New contact form inquiry:", {
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : "N/A",
      subject: subject ? subject.trim() : "General Inquiry",
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been received! Our team will contact you shortly.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
