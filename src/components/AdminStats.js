/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { CursorClickIcon, MailOpenIcon, UsersIcon } from '@heroicons/react/outline'

const stats = [
  { id: 1, name: 'Total Subscribers', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'Avg. Open Rate', stat: '58.16%', icon: MailOpenIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Avg. Click Rate', stat: '24.57%', icon: CursorClickIcon, change: '3.2%', changeType: 'decrease' },
  { id: 4, name: 'Avg. Click Rate', stat: '24.57%', icon: CursorClickIcon, change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Stats() {
  return (
    <div className="bg-white rounded-xl my-5">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 overflow-hidden"
          >
            <dt>
              <div className="absolute bg-indigo-500 rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.stat}</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">{item.name}</p>
              
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
