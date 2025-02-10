export default function ContactUs() {
  const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL;
  const supportPh = process.env.NEXT_PUBLIC_SUPPORT_PHONE;
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <p>If you have any questions, reach out to us:</p>
  
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Email:</strong> {supportEmail}</li>
          <li><strong>Phone:</strong> {supportPh}</li>
          <li><strong>Address:</strong></li>
        </ul>
      </div>
    );
  }
  