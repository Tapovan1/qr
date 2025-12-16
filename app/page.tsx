export default function Home() {
  const ownerName = "Patel Swapnil Natvarbhai"; // Replace with owner's name
  const primaryPhone = "+91 9106992433";
  const secondaryPhone = "+91 7984794994";
  const whatsappNumber = "9106992433"; // Format: country code + number without +
  const city = "Himmatnagar";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-5 border border-white/20">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🚗</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Vehicle Emergency Information
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Owner Name */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 mb-6 border border-indigo-200">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Vehicle Owner</p>
              <p className="text-xl font-bold text-gray-900">{ownerName}</p>
            </div>
          </div>

          {/* Alert Message */}
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
            <p className="text-red-800 font-medium flex items-center gap-2">
              <span className="text-xl">⚠️</span>
              If this vehicle needs attention, please contact:
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="space-y-3 mb-6">
            {/* Primary Call Button */}
            <a
              href={`tel:${primaryPhone}`}
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="text-2xl">📞</span>
              <div className="text-left">
                <div className="text-xs opacity-90">Primary Contact</div>
                <div className="text-lg">{primaryPhone}</div>
              </div>
            </a>

            {/* Secondary Call Button */}
            <a
              href={`tel:${secondaryPhone}`}
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="text-2xl">📞</span>
              <div className="text-left">
                <div className="text-xs opacity-90">Secondary Contact</div>
                <div className="text-lg">{secondaryPhone}</div>
              </div>
            </a>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="text-2xl">💬</span>
              <span className="text-lg">WhatsApp Contact</span>
            </a>
          </div>

          {/* Location Info */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-6 border border-blue-100">
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <span className="text-xl">📍</span>
              <span className="font-medium">City:</span>
              <span className="font-semibold text-blue-700">{city}</span>
            </div>
          </div>

          {/* Emergency Instructions */}
          {/* <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚑</span>
              <div>
                <p className="text-gray-800 font-medium mb-1">
                  In case of accident or breakdown
                </p>
                <p className="text-gray-700 text-sm">
                  Please call immediately using the buttons above
                </p>
              </div>
            </div>
          </div> */}

          {/* Thank You Message */}
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600 font-medium">
              Thank you for your help 🙏
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-4 text-sm text-gray-600">
          <p>Tap any button to contact the vehicle owner</p>
        </div>
      </div>
    </div>
  );
}
