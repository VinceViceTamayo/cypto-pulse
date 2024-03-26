import React, { useState, useEffect } from "react"
import axios from "axios"

export default function HomeTable() {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=PHP&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => setCoins(res.data))
    }, [])

    const coinsDetails = coins.map(coin => {
        const percentageColor = Math.sign(coin.market_cap_change_percentage_24h) === 1 ? "text-green-500" : "text-red-500"
        return (
            <tr>
                <td className="px-6 py-3 w-1/4 flex flex-row items-center">
                    <img src={coin.image} className="mr-2" width="40"/>
                    {coin.name}
                </td>
                <td className="px-6 py-3 w-1/4">₱{coin.current_price}</td>
                <td className={`px-6 py-3 w-1/4 ${percentageColor}`}>{coin.market_cap_change_percentage_24h}%</td>
                <td className="px-6 py-3 w-1/4">{coin.market_cap}</td>
            </tr>
        )
    })

    return (
        <div className="overflow-x-auto flex justify-center bg-black pb-12">
            <table className="w-3/4 table-auto divide-y border border-gray-500 rounded-3xl">
                <thead>
                <tr className="bg-red-500 text-gray-100 text-left text-xs font-medium uppercase tracking-wider">
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Price Change % (24hrs)</th>
                    <th className="px-6 py-3">Market Cap</th>
                </tr>
                </thead>
                <tbody className="bg-gray-700 divide-y divide-gray-900 text-gray-100 text-left text-xs font-medium uppercase tracking-wider">
                    {coinsDetails}
                </tbody>
            </table>
        </div>

    )
}