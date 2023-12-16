

const UserScoreList = (props) => {
    const userScores = props.userScores
    const sortedData = userScores.sort((a, b) => b.score - a.score);

    // 上位5つの要素を取得
    const topFiveScores = sortedData.slice(0, 5);
    return (
        <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-white">
        <thead className="text-xs uppercase bg-gray-50 bg-gray-700 text-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                    なまえ
                </th>
                <th scope="col" className="px-6 py-3">
                    スコア
                </th>
            </tr>
        </thead>
        <tbody>
            {topFiveScores.map(score => (
            <tr className="border-b bg-gray-800 border-gray-700" key={score.id}>
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                    {score.username}
                </th>
                <td className="px-6 py-4 text-white">
                    {score.score}
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>
    )
}

export default UserScoreList