/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { CurrencyDollarIcon, MailOpenIcon, UsersIcon, UserIcon, CursorClickIcon } from '@heroicons/react/outline'
// import {
//     user,
//     dollar,
//     brand,
//     patnership
// } from "./Icons";
const stats = [
  { id: 1, name: 'All Brands', stat: '4239',img:CursorClickIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'All RDs', stat: '5409', img:UserIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Total Patnerships', stat: '1329', img:MailOpenIcon, change: '3.2%', changeType: 'decrease' },
  { id: 4, name: 'Total Revenue', stat: '$9,745', img: CurrencyDollarIcon, change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Stats() {
  return (
      <div className="rounded-xl">
    <div className="bg-white my-5">
      {/* <h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3> */}
      <dl className=" grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 flex-auto">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-white px-5 sm:pt-6 sm:px-6 overflow-hidden"
          >
            <dt>
            <span className="absolute -top-3 right-6 text-light-gray text-3xl">...</span>
              <div className="absolute bg-light-red rounded-full p-3">
                <item.img className="h-6 w-6 text-maron-300" aria-hidden="true" />
              </div>
              <p className="ml-16 text-2xl font-black text-dark-gray truncate">{item.stat}</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p className="text-xs font-medium text-light-gray">{item.name}</p>
              
            </dd>
          </div>
        ))}
      </dl>
      </div>
    </div>
  )
}
