export default function ThankYouPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white p-8 rounded-xl shadow-md max-w-md text-center">
                <h1 className="text-2xl font-bold mb-2">
                    Thank You! 🙏
                </h1>

                <p className="text-gray-600 mb-4">
                    Your application has been received.
                    Our team will reach out to you shortly.
                </p>

                <a
                    href="/"
                    className="inline-block mt-4 px-6 py-2 rounded-full bg-indigo-600 text-white font-semibold"
                >
                    Back to Home
                </a>
            </div>
        </div>
    );
}
