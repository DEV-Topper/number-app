import { Globe, Smartphone, Wallet } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Global Coverage",
    description: "Access virtual numbers from multiple countries with instant SMS verification capabilities.",
    icon: Globe,
    color: "bg-[#7A7FEE]",
  },
  {
    id: 2,
    title: "Instant eSIM",
    description: "Activate eSIM plans instantly with QR codes and manage your mobile connectivity seamlessly.",
    icon: Smartphone,
    color: "bg-[#7A7FEE]",
  },
  {
    id: 3,
    title: "Secure Wallet",
    description: "Deposit funds, withdraw earnings, and track all transactions with our integrated wallet system.",
    icon: Wallet,
    color: "bg-[#7A7FEE]",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6">
        Seamless Global
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">Communications</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Rent virtual numbers for SMS verification, activate eSIM plans instantly, and manage your global communications
        with our comprehensive platform. Simple, secure, and reliable.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm`}>
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
