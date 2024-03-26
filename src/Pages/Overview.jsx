import { FolderIcon, CurrencyDollarIcon, CogIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Real-Time Price Tracking',
    description:
      'We provide real-time updates on cryptocurrency prices, allowing users to stay informed about the latest market trends and fluctuations.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Comprehensive Data Visualization',
    description:
      'We offer comprehensive data visualization tools, including charts, graphs, and tables, to present cryptocurrency price movements and market trends in a visually appealing and easy-to-understand format.',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Portfolio Management',
    description:
      'Users can monitor the value of their portfolios, view asset allocations, track transaction history, and set customizable alerts for price movements.',
    icon: FolderIcon,
  },
  {
    name: 'Customization and Personalization',
    description:
      'Users can customize their watchlists, select preferred cryptocurrencies for tracking, adjust chart settings, and create personalized alerts based on specific criteria.',
    icon: CogIcon,
  },
]

export default function Overview() {
  return (
    <div className="bg-black py-12 h-screen sm:h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-red-500 sm:text-4xl">
          Crypto at your fingertips – Anytime, Anywhere!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Stay ahead of the curve with up-to-the-minute pricing data for a wide range of cryptocurrencies.
            Our platform aggregates data from multiple exchanges, providing you with accurate and reliable pricing information at your fingertips.
            From Bitcoin and Ethereum to lesser-known altcoins, track the prices of your favorite digital assets with ease.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-400">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
