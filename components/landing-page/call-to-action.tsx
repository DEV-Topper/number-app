import Image from "next/image"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section id="contact" className="card my-20 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        {/* Text content - takes full width on mobile */}
        <div className="w-full md:w-3/5 z-10">
          <h2 className="text-black dark:text-white mb-6">
            Ready to Verify
            <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">Instantly?</span>
          </h2>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Join thousands of users who trust our platform for secure SMS verification and seamless global connectivity.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/auth/sign-up" className="btn-primary">
              Create Account
            </Link>
            <Link href="/dashboard" className="btn-secondary text-black dark:text-white">
              Go to Dashboard
            </Link>
          </div>
        </div>

        {/* Image - hidden on mobile, visible on md and up */}
        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
          <Image
            src="/purple-circle-wave-static.png"
            alt="Purple Wave"
            width={500}
            height={500}
            className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
          />
        </div>
      </div>
    </section>
  )
}
